import React from 'react';
import CardProject from './CardProject';
// import portfolioReact from '../assets/portfolio-react.png';
import { dataPortfolio } from '../data/data';

const Project = () => {
  return (
    <div className="w-full h-full min-h-screen m-auto md:pl-20 p-4 py-16 bg-sky-900">
      <h1 className="text-4xl font-bold text-center text-[#42f5ff] mb-10">Project</h1>
      <p className="text-base text-center text-white/80 py-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, quam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, aliquam.</p>
      <div className="block justify-center md:flex w-full md:justify-around md:gap-6 ">
        <div className="left md:w-1/2 shadow-lg shadow-[#42f5ff] pb-16 rounded-md mb-10 ">
          <div className="text-xl text-white py-2 text-center border-b-2 border-slate-400 mb-5">Team project</div>
          <div className="flex justify-center mb-5">
            {dataPortfolio
              .filter((items) => items.catergory === 'Team')
              .map((items) => (
                <CardProject image={items.image} nama={items.nama} />
              ))}
          </div>
        </div>
        <div className="right md:w-1/2 shadow-lg shadow-[#42f5ff] pb-16 rounded-md mb-10  ">
          <div className="text-xl text-white py-2 text-center border-b-2 border-slate-400 mb-5">Individual Project</div>

          <div className=" block md:flex md:justify-center mb-5">
            {dataPortfolio
              .filter((value) => value.catergory === 'Individual')
              .map((value) => (
                <CardProject image={value.image} nama={value.nama} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
