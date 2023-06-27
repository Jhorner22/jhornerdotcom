import React from "react";
import Navbar from "./Navbar";
// import archidekt from 'archidekt';

function Decks() {
// console.log(
//     archidekt.searchDecks(
//         {
//             owner:"HyperWalrus"
//         }
//     )
// )

return (
    <div className='flex flex-col gap-3 m-2 text-[#2A2539]'>
      <Navbar/>
        <div className='flex lg:flex-row flex-col h-full  gap-2'>
            <div className='flex rounded-[30px] bg-[#EAE9E5] p-6 flex flex-col justify-between'>

            </div>
        </div>
    </div>
)
}

export default Decks;