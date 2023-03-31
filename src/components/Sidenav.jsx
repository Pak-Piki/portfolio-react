import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { IoHome } from 'react-icons/io5';
import { RiProjectorFill } from 'react-icons/ri';
import { MdPermContactCalendar } from 'react-icons/md';

const Sidenav = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Home <IoHome size={20} />
        </>
      ),
      href: '/',
    },
    {
      id: 2,
      child: (
        <>
          Project <RiProjectorFill size={20} />
        </>
      ),
      href: '/project',
    },
    {
      id: 3,
      child: (
        <>
          Contact <MdPermContactCalendar size={20} />
        </>
      ),
      href: '/contact',
      download: true,
    },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <BiMenuAltRight size={28} onClick={handleNav} className="absolute top-4 right-4 text-white z-[999] md:hidden" />
      {nav ? (
        <div className="">
          <ul className="fixed w-full h-screen flex  bg-sky-900/90 gap-3 mx-auto px-5 flex-col justify-center items-center z-40">
            {links.map(({ id, child, href }) => (
              <li key={id} className="w-full flex justify-center items-center rounded-md shadow-md bg-gray-100 shadow-[#42f5ff] m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-100">
                <a href={href} className="flex justify-between gap-2 items-center">
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
      <div className="md:block hidden fixed z-[999]">
        <div>
          <div></div>
          <div>
            <div className="flex flex-col justify-center h-screen ">
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
