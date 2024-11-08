import React from "react";
import {
  FaUsers,
  FaChartLine,
  FaWallet,
  FaEthereum,
  FaCube,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="relative bg-gray-900 text-gray-200 py-32 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        

        {/* Header Section */}
        <h3 className="text-[#bcdff4] text-xl font-bold font-heading-aldrich tracking-wider uppercase mb-10">
          About BeamLOL
        </h3>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-yellow-400 tracking-wider font-heading-aldrich leading-tight">
              REAL CRYPTO MASS <br /> ADOPTION IS HERE
            </h2>
            <p className="font-text-oxanium text-[#bcdff4] tracking-wider text-lg">
              We’ve built a leading Telegram app ecosystem with more than 50M users.
            </p>
            <p className="text-[#bcdff4] text-lg font-text-oxanium tracking-wider">
              Via gamification and mass use cases, we’re bringing these users on-chain.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-6 lg:w-1/2">
            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <FaUsers className="text-yellow-400 text-3xl" />
              <div>
                <p className="text-3xl font-bold text-yellow-400">52M</p>
                <p className="text-sm text-gray-400">Total Users</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <FaChartLine className="text-yellow-400 text-3xl" />
              <div>
                <p className="text-3xl font-bold text-yellow-400">7.5M</p>
                <p className="text-sm text-gray-400">Daily Active Users</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <FaUsers className="text-yellow-400 text-3xl" />
              <div>
                <p className="text-3xl font-bold text-yellow-400">28M</p>
                <p className="text-sm text-gray-400">Monthly Active Users</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <FaWallet className="text-yellow-400 text-3xl" />
              <div>
                <p className="text-3xl font-bold text-yellow-400">25M</p>
                <p className="text-sm text-gray-400">Ton Wallets</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <FaEthereum className="text-yellow-400 text-3xl" />
              <div>
                <p className="text-3xl font-bold text-yellow-400">15M</p>
                <p className="text-sm text-gray-400">EVM Wallets</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <FaCube className="text-yellow-400 text-3xl" />
              <div>
                <p className="text-3xl font-bold text-yellow-400">2.5M</p>
                <p className="text-sm text-gray-400">On-Chain Paying Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animation */}
      
    </section>
  );
};

export default About;
