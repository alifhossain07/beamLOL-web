import React from 'react';
import { FaMedal, FaCheckCircle, FaGift, FaUserShield } from 'react-icons/fa';

const PremiumSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      <div className="w-11/12 lg:w-9/12 mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase font-heading-aldrich text-center text-yellow-300 mb-10 md:mb-12 tracking-wide animate-fadeIn">
          Get Access to BeamLOL Premium
        </h2>

        {/* Content Section */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-6 md:p-10 shadow-xl relative animate-slideUp">
          {/* Premium Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Benefit 1 */}
            <div className="flex items-start space-x-4">
              <FaMedal className="text-yellow-300 text-4xl md:text-5xl animate-spin-slow" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Grand Giveaway Eligibility</h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Permanent eligibility for events with USDT and luxury item prizes.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-400 text-4xl md:text-5xl animate-pulse" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Airdrop Priority Queue</h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Get prioritized transaction processing in the airdrop claim queue.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start space-x-4">
              <FaGift className="text-pink-400 text-4xl md:text-5xl animate-bounce-slow" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Exclusive Bonus Package</h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Receive 100,000,000 coins and 1,000 spins as a one-time bonus.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start space-x-4">
              <FaUserShield className="text-blue-400 text-4xl md:text-5xl animate-float" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Premium Profile Design</h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Unlock an exclusive profile design crafted for premium users.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-8 md:mt-10">
            <button className="bg-yellow-300 text-gray-900 font-bold text-base md:text-lg py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg transition transform hover:scale-105 hover:bg-yellow-400 animate-bounce">
              Get Premium
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-36 h-36 md:w-48 md:h-48 bg-yellow-400 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-0 w-24 h-24 md:w-32 md:h-32 bg-purple-500 rounded-full opacity-40 animate-pulse-slow"></div>
      <div className="absolute -bottom-10 right-10 w-16 h-16 md:w-24 md:h-24 bg-blue-300 rounded-full opacity-20 animate-pulse-slow"></div>
    </section>
  );
};

export default PremiumSection;
