import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import { Deck, RawDeck } from "../Types/Decks";

const env = process.env.NODE_ENV;

function Decks() {
    
    const [decks,setDecks] = useState([] as Deck[])

    console.log(env)
    useEffect(() => {
        async function getDecks() {
             const decks = await fetch(env !== 'production' ? "https://archidekt.com/api/decks/cards/?owner=HyperWalrus&pageSize=50" : '/get-decks')
            .then((response) => response.json() as unknown as RawDeck)
            setDecks(decks.results)
        }
        getDecks()
    },[])

return (
    <div className="flex flex-col gap-3 m-2 text-[#2A2539]">
        <Navbar/>

        {/* Deck list */}
        <div className="flex border bg-[#EAE9E5] rounded-[30px] p-6 overflow-x-auto" onClick={() => {
            console.log('bitch');
        }}>
            {decks.map((deck) => {
                return(
                        <div key={deck.name} className="flex flex-col flex-shrink-0 w-96 hover:brightness-50">
                            <img src={deck.featured} alt={deck.name} className="rounded-[30px] p-2"/>
                            <p>{deck.name}</p>
                        </div>
                    )
                })}
        </div>

        {/* TODO: Card list */}
        <div className="flex border bg-[#EAE9E5] rounded-[30px] p-6 overflow-x-auto">
            cards
        </div>
    </div>
)
}

export default Decks;