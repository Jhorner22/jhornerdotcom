export interface RawDecks{
    count:number
    next:string
    previous:string
    results:Decklist[];
}

export interface Decklist{
    name:string;
    featured:string;
    id:number;
}

export interface RawDeck{
    id:number;
    cards:Cards[];
}

export interface Cards{
    id:number;
    cardinfo:Card[];
}

export interface Card{
    id:number;
    
}

export interface OracleCard {
    name: string;
}