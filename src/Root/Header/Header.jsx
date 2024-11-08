import React from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="navbar py-6 font-heading-aldrich text-[#87CEFA] shadow-2xl">
      <div className="w-10/12 mx-auto flex justify-between ">
        <div className="flex gap-4 items-center">
    <img className="w-[70px]" src="/assets/balance.gif" alt="" />
            <h1 className="text-3xl font-bold">BeamLOL </h1>
        </div>
        <div className="flex text-lg font-semibold uppercase items-center gap-10"> 
            <Link to='/'>About Us</Link>
            <Link to='/'>Roadmap</Link>
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
  );
};

export default Header;
