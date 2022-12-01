import { Card, Disease } from "./card.types";

export const situationsCards: Card[] = [
    {
        message: "Et bien chantez maintenant",
        diseases: [Disease.HIV, Disease.HepatitisA],
    },
    {
        message: "Quel beau fromage vous avez là",
        diseases: [Disease.HepatitisB, Disease.Papillomavirus],
    },
];
