import React from 'react';
import { Footer as FlowbiteFooter } from 'flowbite-react'; // Renamed the imported Footer to FlowbiteFooter
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const CustomFooter = () => {
  return (
    <div><FlowbiteFooter container className='bg-black py-20 shadow-2xl'>
      <div className="navbar py-6 font-heading-aldrich text-[#87CEFA] shadow-2xl">
      <div className="w-10/12 mx-auto flex justify-between ">
        <div className="flex gap-4 items-center">
    <img className="w-[70px]" src="/assets/balance.gif" alt="" />
            <h1 className="text-3xl font-bold">BeamLOL </h1>
        </div>
        <div className="flex text-lg font-semibold uppercase items-center gap-10"> 
            
            {/* Telegram Button */}
            <a href="https://t.me/yourtelegramchannel" target="_blank" rel="noopener noreferrer">
                <button className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                    <FaTelegramPlane size={24} />
                </button>
            </a>

            {/* Instagram Button */}
            <a href="https://instagram.com/yourinstagramhandle" target="_blank" rel="noopener noreferrer">
                <button className="p-3 rounded-full bg-pink-600 text-white hover:bg-pink-700">
                    <FaInstagram size={24} />
                </button>
            </a>
        </div>
      </div>
    </div>
    
    
    </FlowbiteFooter>
    <footer className="footer footer-center bg-[#001F3F] text-yellow-400 uppercase font-heading-aldrich p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Emperal Tech</p>
  </aside>
</footer>
    </div>
    
    
  );
};

export default CustomFooter;
