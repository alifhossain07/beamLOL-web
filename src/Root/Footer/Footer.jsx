import React from 'react';
import { Footer as FlowbiteFooter } from 'flowbite-react';
import { FaTelegramPlane, FaInstagram, FaDiscord, FaTwitter, FaGlobe, FaFacebook } from 'react-icons/fa';

const CustomFooter = () => {
  return (
    <div>
      <FlowbiteFooter container className="bg-black py-10 shadow-2xl">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <img className="w-[60px] md:w-[70px]" src="/assets/balance.gif" alt="BeamLOL Logo" />
            <h1 className="text-2xl md:text-3xl font-bold text-[#87CEFA]">
              BeamLOL
            </h1>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-4 md:mt-0">
            <a
              href="https://beamlol.club"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
            >
              <FaGlobe size={20} />
            </a>

            <a
              href="https://t.me/beamlolclub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
            >
              <FaTelegramPlane size={20} />
            </a>

            <a
              href="https://t.me/beamlolclub_chat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
            >
              <FaTelegramPlane size={20} />
            </a>

            <a
              href="https://discord.gg/3Kb8TthSDp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300"
            >
              <FaDiscord size={20} />
            </a>

            <a
              href="https://x.com/beamlolclub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href="https://instagram.com/beamlolclub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://facebook.com/beamlolclub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition-all duration-300"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </FlowbiteFooter>

      {/* Copyright Section */}
      <footer className="footer footer-center bg-[#001F3F] text-yellow-400 uppercase font-heading-aldrich p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by Emperal Tech</p>
        </aside>
      </footer>
    </div>
  );
};

export default CustomFooter;
