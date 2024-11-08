import React from "react";
import { FaRocket, FaCrown, FaHandshake } from "react-icons/fa";
import { Carousel } from "flowbite-react";

const SliderSection = () => {
  return (
    <div className="py-16 w-full lg:w-10/12 mx-auto h-[600px]  md:h-[500px] xl:h-[600px] 2xl:h-[750px] overflow-hidden">
      <Carousel className="" slideInterval={5000}>
        {/* Slide 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center h-full w-full px-4 md:px-10">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src="/assets/slider1.png"
              className="max-w-[200px] sm:max-w-[250px] md:max-w-xs lg:max-w-sm rounded-lg shadow-lg"
              alt="Trade Pre-Market"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left">
            <div className="bg-yellow-500 text-xs sm:text-sm rounded-full font-semibold text-black px-4 py-2 inline-block mb-4">
              BeamLOL Pre-market
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading-aldrich font-bold text-yellow-400">
              TRADE BEAMLOL ON TAP TAP! PRE-MARKET IS OPEN
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              The BeamLOL pre-market is live! Get yourself a stash, trade, or just follow the prices.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-4 py-2 mt-4 sm:mt-6">
              TRADE ON TAP TAP
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center h-full w-full px-4 md:px-10">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src="/assets/slider2.png"
              className="max-w-[200px] sm:max-w-[250px] md:max-w-xs lg:max-w-sm rounded-lg shadow-lg"
              alt="Premium Benefits"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left">
            <div className="bg-yellow-500 text-xs sm:text-sm rounded-full font-semibold text-black px-4 py-2 inline-block mb-4">
              500K+ users have Premium
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading-aldrich font-bold text-yellow-400">
              REAP BENEFITS WITH PREMIUM
            </h2>
            <ul className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 space-y-2">
              <li>⭐ Join the elite circle and receive unique benefits!</li>
              <li>🎉 Qualify for all the Grand Events</li>
              <li>🚀 Get priority in the airdrop claim process</li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-4 py-2 mt-4 sm:mt-6">
              GET PREMIUM
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center h-full w-full px-4 md:px-10">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src="/assets/slider3.png"
              className="max-w-[200px] sm:max-w-[250px] md:max-w-xs lg:max-w-sm rounded-lg shadow-lg"
              alt="SUI Partnership"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left">
            <div className="bg-yellow-500 text-xs sm:text-sm rounded-full font-semibold text-black px-4 py-2 inline-block mb-4">
              BeamLOL x SUI Partnership
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading-aldrich font-bold text-yellow-400">
              BEAMLOL JOINS SUI ECOSYSTEM!
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              BeamLOL has partnered with SUI to enhance the ecosystem, bringing better user experiences with faster transactions and improved rewards.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-4 py-2 mt-4 sm:mt-6">
              LEARN MORE
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderSection;
