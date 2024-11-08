import React from "react";

const Banner = () => {
  return (
    <div className="relative py-10 w-11/12 lg:w-9/12 mx-auto text-[#bcdff4]">
      

      <div className="hero">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-8">
          {/* Banner Image */}
          <img
            src="/assets/banner.png"
            alt="Banner"
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-xl shadow-lg"
          />

          {/* Banner Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl tracking-wider uppercase text-yellow-400 font-bold font-heading-aldrich w-full lg:w-5/6">
              Discover Gaming, Earning, and Trading
            </h1>
            <p className="text-2xl md:text-4xl font-bold uppercase font-heading-aldrich">
              All In a Single App
            </p>

            {/* Launch App Button */}
            <button className="bg-yellow-400 hover:bg-[#f7f9bc] duration-500 px-8 py-3 text-lg md:text-xl text-gray-900 uppercase font-bold rounded-3xl shadow-md hover:shadow-xl">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

/* Custom CSS (Add this to your global CSS file or inside a <style> tag if using inline styles) */
