import React, { useRef } from 'react';
import { FaCoins, FaStar, FaGem } from "react-icons/fa"; // Import relevant icons

const GameSlider = () => {
  const ref = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDragging = true;
    ref.current.classList.add("active"); // Add a class to indicate dragging
    startX = e.pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging = false;
    ref.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDragging = false;
    ref.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust scroll speed here
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-gray-900 text-gray-200 py-12 px-8">
      <div className="w-9/12 mx-auto">
        {/* Header Section */}
        <h3 className="text-yellow-400 text-sm font-bold uppercase mb-2">
          GameFlow
        </h3>
        <h2 className="text-4xl font-bold text-white mb-6">
          WE'RE PLAY-TO-WIN <br /> GAMING FIRST
        </h2>

        {/* Drag-to-Scroll Section */}
        <div
          ref={ref}
          className="flex gap-8 overflow-x-auto py-4 cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {/* Game Card 1 */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-4 rounded-2xl shadow-lg min-w-[250px] text-center transform hover:scale-105 transition-transform duration-300">
            <img src="/path/to/slider1.png" alt="Game Card" className="w-full h-60 object-cover rounded-lg mb-4" />
            <p className="text-lg font-bold text-white mb-2">Get Spin Packages</p>
            <p className="text-sm text-gray-300">Progress faster with exclusive spin packages.</p>
          </div>

          {/* Game Card 2 */}
          <div className="bg-gradient-to-b from-purple-600 to-purple-800 p-4 rounded-2xl shadow-lg min-w-[250px] text-center transform hover:scale-105 transition-transform duration-300">
            <img src="/path/to/slider2.png" alt="Game Card" className="w-full h-60 object-cover rounded-lg mb-4" />
            <p className="text-lg font-bold text-white mb-2">Receive Exclusive Offers</p>
            <p className="text-sm text-gray-300">Upgrade to premium for special benefits.</p>
          </div>

          {/* Game Card 3 */}
          <div className="bg-gradient-to-b from-green-600 to-green-800 p-4 rounded-2xl shadow-lg min-w-[250px] text-center transform hover:scale-105 transition-transform duration-300">
            <img src="/path/to/slider3.png" alt="Game Card" className="w-full h-60 object-cover rounded-lg mb-4" />
            <p className="text-lg font-bold text-white mb-2">Win Crypto Rewards</p>
            <p className="text-sm text-gray-300">Earn up to $4,000 in crypto rewards.</p>
          </div>

          {/* Additional Game Cards with Icons */}
          <div className="bg-gradient-to-b from-yellow-600 to-yellow-800 p-4 rounded-2xl shadow-lg min-w-[250px] text-center transform hover:scale-105 transition-transform duration-300">
            <FaCoins className="text-5xl text-white mb-4 mx-auto" />
            <p className="text-lg font-bold text-white mb-2">Collect Coins</p>
            <p className="text-sm text-gray-300">Gather coins and increase your earnings.</p>
          </div>

          <div className="bg-gradient-to-b from-red-600 to-red-800 p-4 rounded-2xl shadow-lg min-w-[250px] text-center transform hover:scale-105 transition-transform duration-300">
            <FaStar className="text-5xl text-white mb-4 mx-auto" />
            <p className="text-lg font-bold text-white mb-2">Achieve Stars</p>
            <p className="text-sm text-gray-300">Complete challenges to earn stars.</p>
          </div>

          <div className="bg-gradient-to-b from-teal-600 to-teal-800 p-4 rounded-2xl shadow-lg min-w-[250px] text-center transform hover:scale-105 transition-transform duration-300">
            <FaGem className="text-5xl text-white mb-4 mx-auto" />
            <p className="text-lg font-bold text-white mb-2">Gain Gems</p>
            <p className="text-sm text-gray-300">Find rare gems through mining activities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSlider;
