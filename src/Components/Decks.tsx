import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import {Decklist, RawDeck, RawDecks, Cards, Card, OracleCard } from "../Types/Decks";

const env = process.env.NODE_ENV;

function Decks() {
    
    const [decks,setDecks] = useState([] as Decklist[])
    const [currentDeckId, setCurrentDeckId] = useState<number | undefined>(); // id
    const [currentDeck, setCurrentDeck] = useState<any>(); // deck object


    useEffect(() => {
        async function getDecks() {
             const decks = await fetch(env !== 'production' ? "https://archidekt.com/api/decks/cards/?owner=HyperWalrus&pageSize=50" : '/get-decks')
            .then((response) => response.json() as unknown as RawDecks)
            setDecks(decks.results)
        }
        getDecks()
    }, [])

    useEffect(() => {
        async function getDeck() {
            const deck = await fetch(env !== 'production' ? `https://archidekt.com/api/decks/${currentDeckId}/` : '')
            .then((response) => response.json() as unknown as RawDeck);
            setCurrentDeck(deck)
        }
    getDeck()
    },[currentDeckId])

    // function deckDOM() {
    //     if (currentDeck) {
    //         currentDeck.map((cardlist: any) => {
    //             return(
    //                 <div key={cardlist.name}>
    //                     <p>{cardlist.Cards.Card.name}</p>
    //                 </div>
    //             )
    //         })
    //     }
    //     return <></>
    // }

return (
    <div className="flex flex-col gap-3 m-2 text-[#2A2539]">
        <Navbar/>

        {/* Deck list */}
        <div className="flex border bg-[#EAE9E5] rounded-[30px] p-6 overflow-x-auto">
            {decks.map((deck) => {
                return(
                        <div key={deck.name} className="flex flex-col flex-shrink-0 w-96 hover:brightness-50" onClick={() => {
                            setCurrentDeckId (deck.id);
                            console.log(currentDeckId)
                        }}>
                            <img src={deck.featured} alt={deck.name} className="rounded-[30px] p-2"/>
                            <p>{deck.name}</p>
                        </div>
                    )
                })}
        </div>

        {/* TODO: Card list */}
        <div className="flex border bg-[#EAE9E5] rounded-[30px] p-6 overflow-x-auto">
                <p>{currentDeckId}</p>
        </div>
    </div>
)
}

export default Decks;