import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { dataPortfolio } from '../data/data';

const DetailsPortfolio = () => {
  const { id } = useParams();
  return (
    <div className="w-full h-screen mx-auto bg-sky-900 overflow-hidden">
      <div className="w-full px-16">
        <div className="text-4xl font-bold text-center text-[#42f5ff] mb-10 pt-5">{dataPortfolio[id - 1].catergory}</div>
        <img className="w-full h-[800px] object-cover rounded-xl p-2" src={dataPortfolio[id - 1].image} alt="mininalism" />{' '}
        <div className="flex justify-between px-3 ">
          <h1 className="text-white text-center ">{dataPortfolio[id - 1].nama}</h1> <FaGithub className="text-white cursor-pointer" size={18} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPortfolio;
