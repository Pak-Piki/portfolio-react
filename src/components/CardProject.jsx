import React from 'react';
import { FaGithub } from 'react-icons/fa';

const CartProject = ({ image, nama }) => {
  return (
    <div className="w-full mx-auto max-w-[400px] min-h-[200px]">
      <img className="w-full h-full object-cover rounded-xl p-2" src={image} alt="mininalism" />
      <div className="flex justify-between px-3 ">
        <h1 className="text-white text-center ">{nama}</h1>
        <FaGithub className="text-white cursor-pointer" size={18} />
      </div>
    </div>
  );
};

export default CartProject;
