import { Card } from "./card.types";
import { IsDefined, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RoundDto {
    @ApiProperty()
    @IsDefined()
    @IsNotEmpty()
    remainingCards: Card[];
}
