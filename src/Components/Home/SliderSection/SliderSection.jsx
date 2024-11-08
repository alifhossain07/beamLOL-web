import React, { useState } from 'react';
import { FaRocket, FaCrown, FaHandshake } from 'react-icons/fa';
import { Carousel } from "flowbite-react";

const SliderSection = () => {
  

  return (
    <div className="h-96 w-10/12 mx-auto sm:h-[450px] xl:h-[500px] 2xl:h-[600px] ">
      <Carousel slideInterval={5000}>
        
        {/* Slide 1 */}
        <div className="flex items-center justify-center h-full w-11/12 px-10 ">
          <div className="w-1/2 space-y-8">
            <div className="bg-yellow-500 text-sm rounded-full font-semibold text-black px-4 py-2 inline-block mb-4 font-text-oxanium">
              <span>BeamLOL Pre-market</span>
            </div>
            <h2 className="text-4xl font-heading-aldrich font-bold text-yellow-400">
              TRADE BEAMLOL ON TAP TAP!  PRE-MARKET IS OPEN
            </h2>
            <p className="text-gray-300 font-text-oxanium tracking-wider mt-4">
              The BeamLOL pre-market is live! Get yourself a stash, trade, or just follow the prices.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 font-text-oxanium text-black font-bold rounded-full px-6 py-2 mt-6">
              TRADE ON TAP TAP
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src="/public/assets/slider1.png" className="max-w-xs rounded-lg shadow-lg" alt="Trade Pre-Market" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex w-11/12 items-center justify-center h-full px-10 ">
          <div className="w-1/2 space-y-8">
            <div className="bg-yellow-500 text-sm rounded-full font-semibold text-black px-4 py-2 inline-block mb-4 font-text-oxanium">
              <span>500K+ users have Premium</span>
            </div>
            <h2 className="text-4xl font-heading-aldrich font-bold text-yellow-400">
              REAP BENEFITS  WITH <br /> PREMIUM
            </h2>
            <ul className="text-gray-300 mt-4 space-y-2 font-text-oxanium tracking-wider ">
              <li>⭐ Join the elite circle and receive unique benefits!</li>
              <li>🎉 Qualify for all the Grand Events</li>
              <li>🚀 Get priority in the airdrop claim process</li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-6 py-2 mt-6">
              GET PREMIUM
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src="/public/assets/slider2.png" className="max-w-xs rounded-lg shadow-lg" alt="Premium Benefits" />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex w-11/12 items-center justify-center h-full px-10 ">
          <div className="w-1/2 space-y-8">
            <div className="bg-yellow-500 text-sm rounded-full font-semibold text-black px-4 py-2 inline-block mb-4 font-text-oxanium">
              <span>BeamLOL x SUI Partnership</span>
            </div>
            <h2 className="text-4xl font-heading-aldrich tracking-wider font-bold text-yellow-400">
              BEAMLOL JOINS  SUI <br /> ECOSYSTEM!
            </h2>
            <p className="text-gray-300 font-text-oxanium tracking-wider mt-4">
              BeamLOL has partnered with SUI to enhance the ecosystem, bringing better user experiences with faster
              transactions and improved rewards.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-6 py-2 mt-6">
              LEARN MORE
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src="/public/assets/slider3.png" className="max-w-xs rounded-lg shadow-lg" alt="SUI Partnership" />
          </div>
        </div>
        
      </Carousel>
    </div>
  );
};

export default SliderSection;
