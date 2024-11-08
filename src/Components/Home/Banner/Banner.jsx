import React from "react";
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <div className="py-10 w-9/12 mx-auto text-[#bcdff4]">
    
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/assets/banner.png" className="max-w-sm  " />
          <div className="space-y-10">
            <h1 className="text-5xl tracking-wider uppercase text-yellow-400 font-bold font-heading-aldrich w-5/6">
              Discover Gaming, Earning, and Trading
            </h1>
            <p className="text-4xl font-bold uppercase font-heading-aldrich">
              All In a Single App
            </p>

            <button className="bg-yellow-400 hover:bg-[#f7f9bc] duration-500 px-10 py-3 text-xl text-gray-900 uppercase font-bold rounded-3xl">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
