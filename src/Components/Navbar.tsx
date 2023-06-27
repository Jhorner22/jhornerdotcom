import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    function resumeButton() {
        fetch('Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className="flex flex-row justify-between items-end">
            <div className="flex">
                <Link to='/'>
                    <img src="/jphlogobigger.png" alt="logo" className="flex max-h-12"/>
                </Link>
            </div>
            <div className="flex flex-row gap-2.5">
                <Link to='/' className="flex py-3">
                    <p>
                        Home  
                    </p>
                </Link>
                <Link to='/books' className="flex py-3">
                    <p>
                        Books
                    </p>
                </Link>
                <Link to='/decks' className="flex py-3">
                    <p>
                        Magic Decks
                    </p>
                </Link>
                <button onClick={resumeButton} className="flex bg-[#7C6767] text-white rounded-full px-[30px] py-3 font-semibold">
                    Resume  
                </button>
            </div>
        </div>
    );
}

export default Navbar;