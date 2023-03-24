import React from 'react';
import { FaLinkedinIn, FaGithub, FaPortrait } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <div id="main" className="z-10">
      <img className="w-full h-screen object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
      <div className="w-full h-screen top-0 left-0 flex flex-col justify-center item-center text-center absolute bg-gray-800/70 z-10">
        <p className="uppercase text-sm text-white/60 font-bold mb-5">LET'S BUILD SOMETHING TOGETHER</p>
        <p className="text-white text-2xl font-medium mb-2">Hi, I'm</p>
        <h1 className="text-4xl mb-20 font-bold text-[#42f5ff] ">Ridho</h1>
        <p className="text-white/90 ">I,m a full-stack web developer from Yogyakarta, Indonesia </p>
        <p className="text-white/90 mb-5 ">My preferred tools are Html, CSS and Javascript </p>
        <div className="flex items-center justify-between gap-7 max-w-5xl mx-auto py-4">
          <a href="www.linkedin.com/in/rikyridhopangestu/" className="rounded-md shadow-md text-white shadow-[#42f5ff] p-5 cursor-pointer hover:scale-110 ">
            <FaLinkedinIn />
          </a>
          <a href="github.com/Pak-Piki" className="rounded-md shadow-md text-white  shadow-[#42f5ff] p-5 cursor-pointer hover:scale-110 ">
            <FaGithub />
          </a>
          <a href="#home" className="rounded-md shadow-md text-white shadow-[#42f5ff] p-5 cursor-pointer hover:scale-110 ">
            <FiMail />
          </a>
          <a href="/contact" className="rounded-md shadow-md text-white shadow-[#42f5ff] p-5 cursor-pointer hover:scale-110 ">
            <FaPortrait />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
