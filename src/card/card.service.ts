import { Injectable } from "@nestjs/common";
import { Card, Turn } from "./card.types";
import { situationsCards } from "./situationsCards";

@Injectable()
export class CardService {
    turn(): Turn {
        return {
            situationCard: this.randomSituationCard(),
            responseCards: this.randomResponseCard(),
        };
    }

    /**
     * Return one random card from the situationsCards array.
     */
    randomSituationCard(): Card {
        const randomIndex = Math.floor(Math.random() * situationsCards.length);
        return situationsCards[randomIndex];
    }

    /**
     * Return four random cards from the situationsCards array.
     */
    randomResponseCard(): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * situationsCards.length);
            cards.push(situationsCards[randomIndex]);
        }
        return cards;
    }
}
