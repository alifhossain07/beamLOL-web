import React from 'react';
import { FaMedal, FaCheckCircle, FaGift, FaUserShield } from 'react-icons/fa';

const PremiumSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="w-9/12 mx-auto px-8">
        
        {/* Heading */}
        <h2 className="text-5xl font-bold uppercase  font-heading-aldrich text-center text-yellow-300 mb-12 tracking-wide animate-fadeIn">
          Get Access to BeamLOL Premium
        </h2>
        
        {/* Content Section */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-10 shadow-xl relative animate-slideUp">
          
          {/* Premium Benefits List */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="flex items-start space-x-4">
              <FaMedal className="text-yellow-300 text-5xl animate-spin-slow" />
              <div>
                <h3 className="text-xl font-semibold">Grand Giveaway Eligibility</h3>
                <p className="text-gray-200">
                  Permanent eligibility for events with USDT and luxury item prizes.
                </p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-400 text-5xl animate-pulse" />
              <div>
                <h3 className="text-xl font-semibold">Airdrop Priority Queue</h3>
                <p className="text-gray-200">
                  Get prioritized transaction processing in the airdrop claim queue.
                </p>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex items-start space-x-4">
              <FaGift className="text-pink-400 text-5xl animate-bounce-slow" />
              <div>
                <h3 className="text-xl font-semibold">Exclusive Bonus Package</h3>
                <p className="text-gray-200">
                  Receive 100,000,000 coins and 1,000 spins as a one-time bonus.
                </p>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex items-start space-x-4">
              <FaUserShield className="text-blue-400 text-5xl animate-float" />
              <div>
                <h3 className="text-xl font-semibold">Premium Profile Design</h3>
                <p className="text-gray-200">
                  Unlock an exclusive profile design crafted for premium users.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-10">
            <button className="bg-yellow-300 text-gray-900 font-bold text-lg py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 hover:bg-yellow-400 animate-bounce">
              Get Premium
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-0 w-32 h-32 bg-purple-500 rounded-full opacity-40 animate-pulse-slow"></div>
      <div className="absolute -bottom-16 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-pulse-slow"></div>
    </section>
  );
};

export default PremiumSection;
