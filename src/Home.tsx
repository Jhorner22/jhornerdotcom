import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Link } from "react-router-dom";

function Home() {

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
    <div className='flex flex-col gap-3 m-2 text-[#2A2539]'>
      <Navbar/>
      <div className='flex flex-row gap-2'>
        <div className='flex w-[62.5%] rounded-[30px] bg-[#EAE9E5] p-6 flex flex-col justify-between'>
          <div>
            <h1 className='font-semibold text-[48px] '>Who is Joseph P Horner?</h1>
            <p className='text-[24px]'>I am a software engineer that enjoys finding ways to improve efficiency with Python scripts, and creating IoT systems.</p>
          </div>
          <div className='flex flex-row '> 
          <Link to='/'>
            <button onClick={resumeButton} className='text-[32px] bg-[#2A2539] text-white py-4 px-6 rounded-full'>Download My Resume</button>
          </Link>
          <a href='https://www.linkedin.com/in/joseph-horner22/' target='_blank' rel="noopener noreferrer" className='flex w-[80px] h-[80px] items-center justify-center rounded-full bg-white'>
            <img src="/linkedinlogo.png" alt="linkedinlogo" className='w-2/3 h-2/3'/>
          </a>
          <a href='https://github.com/Jhorner22' target='_blank' rel="noopener noreferrer" className='flex w-[80px] h-[80px] items-center justify-center rounded-full bg-white'>
            <img src="/githublogo.png" alt="githublogo" className='w-2/3 h-2/3'/>
          </a>
          </div>
        </div>
        <div className='flex w-[37.5%] rounded-[30px] '>
          <img src='/portrait.jpg' className='rounded-[30px]' alt='portrait'/>
        </div>
      </div>
    </div>
  );
}

export default Home;
