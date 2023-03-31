import React from 'react';
import { FaLinkedinIn, FaGithub, FaPortrait } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Hero = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedinIn size={20} />
        </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={20} />
        </>
      ),
      href: 'https://github.com/pak-piki',
    },
    {
      id: 3,
      child: (
        <>
          Mail <FiMail size={20} />
        </>
      ),
      href: 'mailto:ridhoriky25@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaPortrait size={20} />
        </>
      ),
      href: '/resume.pdf',
      download: true,
    },
  ];
  return (
    <div id="main" className="z-10">
      <img className="w-full h-screen object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
      <div className="w-full h-screen top-0 left-0 flex flex-col justify-center item-center text-center absolute bg-gray-800/70 z-10">
        <p className="uppercase text-sm text-white/60 font-bold mb-5">LET'S BUILD SOMETHING TOGETHER</p>
        <p className="text-white text-2xl font-medium mb-8">Hello!</p>
        <h1 className="text-4xl mb-20 font-bold text-[#42f5ff] ">I,m Ridho, Web developer from Indonesia </h1>
        <p className="text-white/90 mb-5 ">My preferred tools are Html, CSS and Javascript </p>
        <div className="flex items-center justify-between gap-7 max-w-5xl mx-auto py-4">
          {links.map(({ id, child, href, download }) => (
            <ul>
              <li key={id} className="flex justify-between items-center md:min-w-[200px] rounded-md shadow-md text-white shadow-[#42f5ff] p-5 cursor-pointer hover:scale-110 ">
                <a href={href} className="flex justify-between gap-2 items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
                  {child}
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
