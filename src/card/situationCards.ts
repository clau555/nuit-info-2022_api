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
        response:
            "Protégez vous dans le cas ou vous n'êtes pas tous les deux dépister et utiliser un moyen de contraception si voulu.",
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
        response: "Dans un rapport non protégé, il faut se faire se dépister 6 semaines après ce dernier.",
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
        response:
            "Il est vivement conseillé de faire attention a tout changement significatif. En cas de doute, allez consulter.",
    },
    {
        message: "Je suis polygame comment me protéger?",
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
        response:
            "Augmenter le nombre de partenaires augmente grandement les chances d'attrapez une IST. De plus c'est réprehensible par la loi.",
    },
    {
        message: "Mon partenaire est infecter avec le papillomavirus. Comment réagir?",
        diseases: [Disease.Papillomavirus],
        response: "Dans un premier temps se faire vacciner avant tout rapport ou utiliser un préservatif.",
    },

    {
        message: "J'ai de l'herpes comment protéger mes partenaires?",
        diseases: [Disease.Herpes],
        response: "L'herpes se transmet majoritairement par contact de muqueuses buccales. Evitez tout contact.",
    },
];
