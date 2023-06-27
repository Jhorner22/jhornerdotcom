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
    <div className='flex flex-col gap-3 m-2 text-[#2A2539]'>
      <Navbar/>
        <div className='flex lg:flex-row flex-col h-full  gap-2'>
            <div className='flex rounded-[30px] bg-[#EAE9E5] p-6 flex flex-col justify-between'>
                <div className="flex flex-row gap-4 rounded-[30px]">
                    {decks.map((deck) => {
                    return(
                        <p key={deck.name}>
                            {
                                deck.name
                            }
                            {
                                <img src={deck.featured} className="rounded-[30px]" alt="deckimage"></img>
                            }
                        </p>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
)
}

export default Decks;