import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import { Deck, RawDeck } from "../Types/Decks";


function Decks() {

    const [decks,setDecks] = useState([] as Deck[])

    
    useEffect(() => {
        async function getDecks() {
             const decks = await fetch("https://archidekt.com/api/decks/cards/?owner=HyperWalrus")
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
                {decks.map((deck) => {
                    return(
                        <p>
                            {
                                deck.name
                            }
                        </p>
                    )
                })}
            </div>
        </div>
    </div>
)
}

export default Decks;