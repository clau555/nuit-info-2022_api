import { Injectable } from "@nestjs/common";
import { Card, Round, StartingRound } from "./card.types";
import { situationCards } from "./situationCards";
import { responseCards } from "./responseCards";

@Injectable()
export class CardService {
    // TODO return pretty good cards
    startRound(): StartingRound {
        return {
            situationCard: this.randomSituationCard(),
            responseCards: this.randomResponseCards(),
        };
    }

    round(remainingCards: Card[]): Round {
        return {
            situationCard: this.randomSituationCard(),
            responseCard: this.randomResponseCard(remainingCards),
        };
    }

    reroll(): Card[] {
        return this.randomResponseCards();
    }

    /**
     * Return one random card from the situationCards array.
     */
    randomSituationCard(): Card {
        const randomIndex = Math.floor(Math.random() * situationCards.length);
        return situationCards[randomIndex];
    }

    /**
     * Return four random cards from the situationCards array.
     */
    randomResponseCards(): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < 4; i++) {
            cards.push(this.randomResponseCard(cards));
        }
        return cards;
    }

    /**
     * Return one card which is not in excludedCards.
     * @param excludedCards
     */
    randomResponseCard(excludedCards: Card[]): Card {
        let responseCards_ = responseCards;

        if (excludedCards.length > 0) {
            // excluding cards of current hand
            responseCards_ = this.excludeCards(excludedCards, responseCards);
        }

        const randomIndex = Math.floor(Math.random() * responseCards_.length);
        return responseCards_[randomIndex];
    }

    excludeCards(cardsToExclude: Card[], cards: Card[]): Card[] {
        const outputCards: Card[] = [];
        for (const card of cards) {
            let mustExclude = false;
            for (const cardToExclude of cardsToExclude) {
                if (this.isCardEqual(card, cardToExclude)) {
                    mustExclude = true;
                    break;
                }
            }
            if (!mustExclude) {
                outputCards.push(card);
            }
        }
        return outputCards;
    }

    isCardEqual(card1: Card, card2: Card): boolean {
        return JSON.stringify(card1) == JSON.stringify(card2);
    }
}
