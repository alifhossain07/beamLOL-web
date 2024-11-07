import React from 'react';

const Banner = () => {
    return (
        <div className='py-10 text-[#bcdff4]'>
            <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/public/assets/banner.png"
      className="max-w-sm  " />
    <div className='space-y-10'>
      <h1 className="text-5xl tracking-wider uppercase font-bold font-heading-aldrich w-5/6">Discover Gaming, Earning, and Trading</h1>
      <p className='text-4xl font-bold uppercase font-heading-aldrich'>All In a Single App</p>
      
      <button className="bg-[#f8ff1e] px-10 py-3 text-xl text-gray-900 font-bold rounded-3xl">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner; 