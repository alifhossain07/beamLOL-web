import React, { useRef } from 'react';
import { FaCoins, FaStar, FaGem } from "react-icons/fa";

const GameSlider = () => {
  const ref = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDragging = true;
    ref.current.classList.add("active");
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
    const walk = (x - startX) * 1.5;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-gray-900 text-gray-200 py-16 px-4 sm:px-8">
      <div className="w-full lg:w-10/12 mx-auto">
        {/* Header Section */}
        <h3 className="text-[#bcdff4] text-lg sm:text-xl font-bold font-heading-aldrich tracking-wider uppercase mb-6">
          GameFlow
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading-aldrich font-bold mb-6 text-yellow-400 tracking-wider">
          WE'RE PLAY-TO-WIN, GAMING FIRST
        </h2>

        {/* Drag-to-Scroll Section */}
        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto py-4 cursor-grab scroll-smooth"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {/* Game Card 1 */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-4 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[250px] md:min-w-[300px] text-center transform hover:scale-105 transition-transform duration-300">
            <img src="/assets/game1.webp" alt="Game Card" className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4" />
            <FaGem className="text-4xl sm:text-5xl text-white mb-4 mx-auto" />
            <p className="text-base sm:text-lg font-bold text-white mb-2">Get Spin Packages</p>
            <p className="text-xs sm:text-sm text-gray-300">Progress faster with exclusive spin packages.</p>
          </div>

          {/* Game Card 2 */}
          <div className="bg-gradient-to-b from-purple-600 to-purple-800 p-4 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[250px] md:min-w-[300px] text-center transform hover:scale-105 transition-transform duration-300">
            <img src="/assets/game2.webp" alt="Game Card" className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4" />
            <FaGem className="text-4xl sm:text-5xl text-white mb-4 mx-auto" />
            <p className="text-base sm:text-lg font-bold text-white mb-2">Receive Exclusive Offers</p>
            <p className="text-xs sm:text-sm text-gray-300">Upgrade to premium for special benefits.</p>
          </div>

          {/* Game Card 3 */}
          <div className="bg-gradient-to-b from-green-600 to-green-800 p-4 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[250px] md:min-w-[300px] text-center transform hover:scale-105 transition-transform duration-300">
            <img src="/assets/game3.webp" alt="Game Card" className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4" />
            <FaGem className="text-4xl sm:text-5xl text-white mb-4 mx-auto" />
            <p className="text-base sm:text-lg font-bold text-white mb-2">Win Crypto Rewards</p>
            <p className="text-xs sm:text-sm text-gray-300">Earn up to $4,000 in crypto rewards.</p>
          </div>

          {/* Game Card 4 */}
          <div className="bg-gradient-to-b from-yellow-600 to-yellow-800 p-4 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[250px] md:min-w-[300px] text-center transform hover:scale-105 transition-transform duration-300">
            <img src="/assets/game4.webp" alt="Game Card" className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4" />
            <FaCoins className="text-4xl sm:text-5xl text-white mb-4 mx-auto" />
            <p className="text-base sm:text-lg font-bold text-white mb-2">Collect Coins</p>
            <p className="text-xs sm:text-sm text-gray-300">Gather coins and increase your earnings.</p>
          </div>

          {/* Game Card 5 */}
          <div className="bg-gradient-to-b from-red-600 to-red-800 p-4 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[250px] md:min-w-[300px] text-center transform hover:scale-105 transition-transform duration-300">
            <img src="/assets/game5.webp" alt="Game Card" className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4" />
            <FaStar className="text-4xl sm:text-5xl text-white mb-4 mx-auto" />
            <p className="text-base sm:text-lg font-bold text-white mb-2">Achieve Stars</p>
            <p className="text-xs sm:text-sm text-gray-300">Complete challenges to earn stars.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSlider;
