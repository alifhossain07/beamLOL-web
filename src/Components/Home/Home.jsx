import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import SliderSection from './SliderSection/SliderSection';
import GameSlider from './GameSlider/GameSlider';
import Collaborator from './Collaborator/Collaborator';

const Home = () => {
    return (
        <div className=' text-[#bcdff4]'>
            <Banner></Banner>

           
            
            <About></About>
            <div className=''>
            <SliderSection></SliderSection>
            </div>
            <GameSlider></GameSlider>
            <Collaborator></Collaborator>
            
        </div>
    );
};

export default Home;