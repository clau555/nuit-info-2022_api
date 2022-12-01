export interface Turn {
    situationCard: Card;
    responseCards: Card[];
}

export interface Card {
    message: string;
    diseases: Disease[];
}

export enum Disease {
    HIV = "HIV",
    Syphilis = "Syphilis",
    Gonorrhea = "Gonorrhea",
    Chlamydia = "Chlamydia",
    Papillomavirus = "Papillomavirus",
    Herpes = "Herpes",
    HepatitisA = "Hepatitis A",
    HepatitisB = "Hepatitis B",
}
