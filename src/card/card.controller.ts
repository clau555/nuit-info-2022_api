import { Controller, Get } from "@nestjs/common";
import { CardService } from "./card.service";
import { Turn } from "./card.types";

@Controller("card")
export class CardController {
    constructor(private readonly cardService: CardService) {}

    @Get("turn")
    randomSituationCard(): Turn {
        return this.cardService.turn();
    }
}
