import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { MdOutlineArchive } from "react-icons/md";

const MiniAppSection = () => {
  return (
    <section className="py-20 text-white relative overflow-hidden">
      <div className="w-9/12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-16 mx-auto lg:px-12 flex flex-col lg:flex-row items-center justify-center shadow-2xl">
        
        {/* Left Content */}
        <div className="  space-y-6 text-center lg:text-left">
        <div className='flex items-center'>
        <img className='w-32' src="/assets/airdroplogo.png" alt="" />
        <h1 className="text-4xl items-center text-gray-900 font-bold font-heading-aldrich uppercase mb-4 text-shadow-lg animate-fadeIn">
            
            BeamLOL Mini-App <br /> Airdrop!
          </h1>
        </div>
          
          <p className="text-lg mb-6 ml-10 opacity-90 animate-fadeIn font-text-oxanium tracking-wider delay-200">
            Dive into BeamLOL's adventure! Play, earn rewards, and <br /> unlock exclusive treasures during our limited-time airdrop event!
          </p>
          
          {/* Play Now Button */}
          <button className="flex ml-10 items-center justify-center bg-green-500 text-black text-lg font-semibold px-8 py-3 rounded-full shadow-lg font-heading-aldrich transform hover:scale-105 transition duration-300 ease-out hover:bg-green-600 animate-bounceIn delay-400">
            <FaPlay className="mr-2" /> Play Now
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center">
          <img
            src="/assets/airdrop.webp"
            alt="BeamLOL Game Character"
            className="w-72 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-slideInRight"
          />
          {/* Decorative Elements */}
          <div className="absolute top-0 -right-0 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-0 -left-10 w-20 h-20 bg-pink-300 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute -bottom-5 right-10 w-10 h-10 bg-green-300 rounded-full opacity-40 animate-pulse-slow"></div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-10 pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-yellow-300 to-transparent rounded-full opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default MiniAppSection;
