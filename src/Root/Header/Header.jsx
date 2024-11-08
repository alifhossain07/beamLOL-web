import React from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaInstagram, FaDiscord, FaTwitter, FaGlobe, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-4 shadow-2xl">
      <div className="w-10/12 hidden mx-auto lg:flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img className="w-[60px] md:w-[70px]" src="/assets/balance.gif" alt="BeamLOL Logo" />
          <h1 className="text-2xl md:text-3xl font-bold text-[#87CEFA]">
            BeamLOL
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center gap-3 md:gap-6 text-lg font-semibold uppercase text-[#87CEFA]">
          <Link to="/" className="hover:text-[#00BFFF] transition-colors duration-300">
            About Us
          </Link>
          <Link to="/" className="hover:text-[#00BFFF] transition-colors duration-300">
            Roadmap
          </Link>

          {/* Social Links */}
          <a
            href="https://beamlol.club"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
          >
            <FaGlobe size={20} />
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
        </nav>
      </div>


      {/* for mobile , this will be the navbar */}

      <div className="lg:hidden">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Top Row: Logo and Navigation Links */}
        <div className="flex mr-5 items-center text-center justify-between">
          {/* Logo and Title */}
          <div className="flex text-center items-center gap-4">
            <img className="w-[60px] md:w-[70px]" src="/assets/balance.gif" alt="BeamLOL Logo" />
            <h1 className="text-2xl md:text-3xl font-bold text-[#87CEFA]">
              BeamLOL
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-3 md:gap-6 text-lg font-semibold uppercase text-[#87CEFA]">
            <Link to="/" className="hover:text-[#00BFFF] transition-colors duration-300">
              About Us
            </Link>
            <Link to="/" className="hover:text-[#00BFFF] transition-colors duration-300">
              Roadmap
            </Link>
          </div>
        </div>

        {/* Navigation Links (Mobile View) */}
        <div className="flex md:hidden justify-end gap-3 text-lg font-semibold uppercase text-[#87CEFA]">
          <Link to="/" className="hover:text-[#00BFFF] transition-colors duration-300">
            About Us
          </Link>
          <Link to="/" className="hover:text-[#00BFFF] transition-colors duration-300">
            Roadmap
          </Link>
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
      </div>
    </header>
  );
};

export default Header;
