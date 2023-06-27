import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Books() {
return (
    <div className='flex flex-col gap-3 m-2 text-[#2A2539]'>
      <Navbar/>
        <div className='flex lg:flex-row flex-col h-full  gap-2'>
            <div className='flex rounded-[30px] bg-[#EAE9E5] p-6 flex flex-col justify-between'>
                Coming Soon...
            </div>
        </div>
    </div>
)
}

export default Books;