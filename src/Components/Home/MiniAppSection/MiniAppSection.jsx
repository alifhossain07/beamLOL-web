import React from 'react';
import { FaPlay } from 'react-icons/fa';

const MiniAppSection = () => {
  return (
    <section className="py-16 text-white relative overflow-hidden">
      <div className="w-10/12 lg:w-9/12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-10 md:p-16 mx-auto flex flex-col lg:flex-row items-center justify-center shadow-2xl">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img className="w-24 md:w-32" src="/assets/airdroplogo.png" alt="Airdrop Logo" />
            <h1 className="text-3xl md:text-4xl text-gray-900 font-bold font-heading-aldrich uppercase mb-4 animate-fadeIn">
              BeamLOL Mini-App <br /> Airdrop!
            </h1>
          </div>
          <p className="text-base md:text-lg opacity-90 animate-fadeIn font-text-oxanium tracking-wider">
            Dive into BeamLOL's adventure! Play, earn rewards, and <br className="hidden md:block" /> unlock exclusive treasures during our limited-time airdrop event!
          </p>
          
          {/* Play Now Button */}
          <button className="flex items-center justify-center mx-auto lg:mx-0 bg-green-500 text-black text-base md:text-lg font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg font-heading-aldrich transform hover:scale-105 transition duration-300 ease-out hover:bg-green-600 animate-bounceIn">
            <FaPlay className="mr-2" /> Play Now
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center">
          <img
            src="/assets/airdrop.webp"
            alt="BeamLOL Game Character"
            className="w-48 sm:w-60 md:w-72 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-slideInRight"
          />
          {/* Decorative Elements */}
          <div className="absolute top-0 -right-0 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-0 -left-10 w-14 h-14 sm:w-20 sm:h-20 bg-pink-300 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute -bottom-5 right-10 w-8 h-8 sm:w-10 sm:h-10 bg-green-300 rounded-full opacity-40 animate-pulse-slow"></div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-10 pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 w-36 h-36 md:w-48 md:h-48 bg-gradient-to-br from-yellow-300 to-transparent rounded-full opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default MiniAppSection;
