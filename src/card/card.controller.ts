import { Body, Controller, Get, Post } from "@nestjs/common";
import { CardService } from "./card.service";
import { Card, Round, StartingRound } from "./card.types";
import { RoundDto } from "./card.dto";

@Controller("card")
export class CardController {
    constructor(private readonly cardService: CardService) {}

    @Get("startRound")
    getStartRound(): StartingRound {
        return this.cardService.startRound();
    }

    @Post("round")
    async getRound(@Body() body: RoundDto): Promise<Round> {
        return this.cardService.round(body.remainingCards);
    }

    @Get("reroll")
    getReroll(): Card[] {
        return this.cardService.reroll();
    }
}
