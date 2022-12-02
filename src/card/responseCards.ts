import { Card, Disease } from "./card.types";

export const responseCards: Card[] = [
    {
        message: "Lorem ipsum dolor sit amet",
        diseases: [Disease.HIV, Disease.Chlamydia],
    },
    {
        message: "Maitre corbeau sur son arbre perché",
        diseases: [Disease.Gonorrhea, Disease.HepatitisA],
    },
];
