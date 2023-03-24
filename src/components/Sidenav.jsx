import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { IoHome } from 'react-icons/io5';
import { RiProjectorFill } from 'react-icons/ri';
import { MdPermContactCalendar } from 'react-icons/md';

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <BiMenuAltRight size={28} onClick={handleNav} className="absolute top-4 right-4 text-white z-[999] md:hidden" />
      {nav ? (
        <div className="fixed w-full h-screen flex bg-sky-900/90 gap-2 flex-col justify-center items-center z-40">
          <a href="/" className="w-4/5 flex justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-[#42f5ff] m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
            <IoHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a href="/project" className="w-4/5 flex gap-2 justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-[#42f5ff] m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
            <RiProjectorFill size={20} />
            <span className="pl-4">Project</span>
          </a>
          <a href="/contact" className="w-4/5 flex gap-2 justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-[#42f5ff] m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
            <MdPermContactCalendar size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ''
      )}
      <div className="md:block hidden fixed z-[999]">
        <div>
          <div></div>
          <div>
            <div className="flex flex-col justify-center   h-screen ">
              <a href="/" className="rounded-md shadow-lg bg-gray-100 shadow-[#42f5ff] mx-4 my-2 p-3 cursor-pointer hover:scale-110 ease-in duration-100 ">
                <IoHome size={22} />
              </a>
              <a href="/project" className="rounded-md shadow-lg bg-gray-100 shadow-[#42f5ff] mx-4 my-2 p-3 cursor-pointer hover:scale-110 ease-in duration-100 ">
                <RiProjectorFill size={22} />
              </a>
              <a href="/contact" className="rounded-md shadow-lg bg-gray-100 shadow-[#42f5ff] mx-4 my-2 p-3 cursor-pointer hover:scale-110 ease-in duration-100 ">
                <MdPermContactCalendar size={22} />
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
