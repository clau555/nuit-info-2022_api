import { Card, Disease } from "./card.types";

export const responseCards: Card[] = [
    {
        message: "Capote neuve",
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
        message: "Coupe menstruelle",
        diseases: [],
    },
    {
        message: "Je vais aux urgences",
        diseases: [Disease.PenisFracture],
    },
    {
        message: "Petit coup de viagra",
        diseases: [],
    },
    {
        message: "Bout de scotch",
        diseases: [],
    },
    {
        message: "Je met du lubrifiant",
        diseases: [],
    },
    {
        message: "Je me lave les dents avant",
        diseases: [],
    },
    {
        message: "Je lave la capote et je l’utilise",
        diseases: [],
    },
    {
        message: "J’utilise un sac-poubelle",
        diseases: [],
    },
    {
        message: "Je me retiens d’éjaculer",
        diseases: [],
    },
    {
        message: "Pilule du lendemain",
        diseases: [Disease.Pregnancy],
    },
    {
        message: "Abstinence",
        diseases: [
            Disease.HIV,
            Disease.Syphilis,
            Disease.Gonorrhea,
            Disease.Chlamydia,
            Disease.Papillomavirus,
            Disease.Herpes,
            Disease.HepatitisA,
            Disease.HepatitisB,
            Disease.PenisFracture,
            Disease.Pregnancy,
        ],
    },
    {
        message: "Me faire dépister et faire dépister mes partenaires",
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
        message: "Je suis vaccinée",
        diseases: [Disease.HepatitisA, Disease.HepatitisB, Disease.Papillomavirus],
    },
    {
        message: "Stérilet",
        diseases: [Disease.Pregnancy],
    },
];
