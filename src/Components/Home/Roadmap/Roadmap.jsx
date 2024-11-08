import React from 'react';
import { FaCheckCircle, FaGem, FaRocket, FaCoins, FaGift, FaGamepad, FaStar } from 'react-icons/fa';

const Roadmap = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        {/* Heading */}
        <h3 className="text-[#bcdff4] text-lg md:text-xl font-bold font-heading-aldrich tracking-wider uppercase mb-8 md:mb-10">
          Future Targets
        </h3>
        <h2 className="text-3xl md:text-4xl font-heading-aldrich uppercase font-bold text-yellow-300 mb-10 md:mb-12 tracking-wider">
          Roadmap
        </h2>

        {/* Content Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 bg-white bg-opacity-10 p-6 md:p-10 rounded-xl shadow-lg">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Phase 1 */}
            <h3 className="text-xl md:text-2xl font-semibold font-heading-aldrich tracking-wider text-yellow-300 flex items-center gap-2">
              <FaRocket /> Phase 1: Launch & Community
            </h3>
            <ul className="space-y-3 pl-4 font-text-oxanium tracking-widest">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" /> Initial Game Launch
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" /> Early Access Rewards
              </li>
              <li className="flex items-center gap-2">
                <FaGamepad className="text-purple-400" /> Community Game Events
              </li>
              <li className="flex items-center gap-2">
                <FaCoins className="text-yellow-400" /> Daily Coin Rewards
              </li>
            </ul>

            {/* Phase 2 */}
            <h3 className="text-xl md:text-2xl font-semibold font-heading-aldrich tracking-wider text-yellow-300 flex items-center gap-2 mt-8">
              <FaStar /> Phase 2: Growth & Expansion
            </h3>
            <ul className="space-y-3 pl-4 font-text-oxanium tracking-widest">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" /> Mystery Game Mode
              </li>
              <li className="flex items-center gap-2">
                <FaGift className="text-red-400" /> Exclusive Airdrops
              </li>
              <li className="flex items-center gap-2">
                <FaCoins className="text-yellow-400" /> Coin Farming Challenges
              </li>
              <li className="flex items-center gap-2">
                <FaGem className="text-blue-400" /> Gem Rewards for Top Players
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Phase 3 */}
            <h3 className="text-xl md:text-2xl font-semibold font-heading-aldrich tracking-wider text-yellow-300 flex items-center gap-2">
              <FaStar /> Phase 3: Advanced Features
            </h3>
            <ul className="space-y-3 pl-4 font-text-oxanium tracking-widest">
              <li className="flex items-center gap-2">
                <FaRocket className="text-purple-400" /> Leveling System
              </li>
              <li className="flex items-center gap-2">
                <FaCoins className="text-yellow-400" /> Wallet Integration
              </li>
              <li className="flex items-center gap-2">
                <FaGift className="text-red-400" /> Cash Prizes for Challenges
              </li>
              <li className="flex items-center gap-2">
                <FaStar className="text-yellow-300" /> Star Achievements & Trophies
              </li>
            </ul>

            {/* Phase 4 */}
            <h3 className="text-xl md:text-2xl font-semibold font-heading-aldrich tracking-wider text-yellow-300 flex items-center gap-2 mt-8">
              <FaRocket /> Phase 4: Future & Expansion
            </h3>
            <ul className="space-y-3 pl-4 font-text-oxanium tracking-widest">
              <li className="flex items-center gap-2">
                <FaGift className="text-red-400" /> Limited Time Events
              </li>
              <li className="flex items-center gap-2">
                <FaCoins className="text-yellow-400" /> Seasonal Rewards
              </li>
              <li className="flex items-center gap-2">
                <FaGem className="text-blue-400" /> Special Items & Upgrades
              </li>
              <li className="flex items-center gap-2">
                <FaGamepad className="text-purple-400" /> New Game Modes - Stay Tuned!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
