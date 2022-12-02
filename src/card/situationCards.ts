import { Card, Disease } from "./card.types";

export const situationCards: Card[] = [
    {
        message: "Je veux faire l’amour à ma partenaire ce soir. Que dois-je faire ?",
        diseases: [
            Disease.HIV,
            Disease.Syphilis,
            Disease.Gonorrhea,
            Disease.Chlamydia,
            Disease.Papillomavirus,
            Disease.Herpes,
            Disease.HepatitisA,
            Disease.HepatitisB,
        ],
    },
    {
        message: "J’ai fait l’amour avec mon partenaire hier soir. Il a l’hépatite B",
        diseases: [Disease.HepatitisB],
    },
    {
        message: "Je suis une fille. J’ai eu une relation non protégée hier soir. Que faire ?",
        diseases: [
            Disease.HIV,
            Disease.Syphilis,
            Disease.Gonorrhea,
            Disease.Chlamydia,
            Disease.Papillomavirus,
            Disease.Herpes,
            Disease.HepatitisA,
            Disease.HepatitisB,
            Disease.Pregnancy,
        ],
    },
    {
        message: "Que faut-il utiliser pour sodomiser ton partenaire?",
        diseases: [
            Disease.HIV,
            Disease.Syphilis,
            Disease.Gonorrhea,
            Disease.Chlamydia,
            Disease.Papillomavirus,
            Disease.Herpes,
            Disease.HepatitisA,
            Disease.HepatitisB,
        ],
    },
    {
        message: "J’ai fait l'amour avec ma partenaire et depuis mon pénis est tout bleu, j’ai mal que faire ?",
        diseases: [Disease.PenisFracture],
    },
    {
        message: "Je vais aux putes. Que faire ?",
        diseases: [
            Disease.HIV,
            Disease.Syphilis,
            Disease.Gonorrhea,
            Disease.Chlamydia,
            Disease.Papillomavirus,
            Disease.Herpes,
            Disease.HepatitisA,
            Disease.HepatitisB,
        ],
    },
];
