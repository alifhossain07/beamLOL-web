import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import SliderSection from './SliderSection/SliderSection';
import GameSlider from './GameSlider/GameSlider';
import Collaborator from './Collaborator/Collaborator';
import Roadmap from './Roadmap/Roadmap';
import MiniAppSection from './MiniAppSection/MiniAppSection';
import PremiumSection from './PremiumSection/PremiumSection';
import Marquee from 'react-fast-marquee';

const Home = () => {
    return (
        <div className=' text-[#bcdff4]'>
        <div className="bg-gradient-to-r from-gray-900 to-black py-3 shadow-lg">
      <Marquee speed={120} gradient={true} gradientColor={[20, 20, 20]} gradientWidth={100}>
        <span className="mx-8 text-xl font-heading-aldrich font-bold text-yellow-300">
          🌟 Get Premium Now! 💎 Permanent eligibility for Grand Giveaway events with USDT and luxury item prizes
        </span>
        <span className="mx-8 font-heading-aldrich text-xl font-bold text-yellow-300">
          ⚡️ Upgrade Today! ✅ Enjoy transaction prioritization in the airdrop claim queue
        </span>
        <span className="mx-8 font-heading-aldrich text-xl font-bold text-yellow-300">
          🎁 Limited Offer! Receive a one-time bonus of 100,000,000 coins and 1,000 spins
        </span>
        <span className="mx-8 font-heading-aldrich text-xl font-bold text-yellow-300">
          🏅 Unlock Premium Features! 🌟 Get exclusive profile designs and stand out from the crowd
        </span>
      </Marquee>
    </div>
            <Banner></Banner>

           
            
            <About></About>
            <div className=''>
            <SliderSection></SliderSection>
            </div>
            <GameSlider></GameSlider>
            <Collaborator></Collaborator>
            <Roadmap></Roadmap>
            <MiniAppSection></MiniAppSection>
            <PremiumSection></PremiumSection>
            
        </div>
    );
};

export default Home;