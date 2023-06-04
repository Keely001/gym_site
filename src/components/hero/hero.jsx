import React from 'react';
import './hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
const Hero = () => {
  return (
    <div className = "hero">
        <div className = 'left-side'>
            <Header/>
            <div className='best-ad'>
                <div> </div>
                <span>the best fitness club in town</span>
            </div>
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>where you become a bazeng without a bazeng. dd;vfkdfm 
                    vlddmf vsdl;ldlldsl;m ;lsdml sdl; lsd
                    </span>
                </div> 
            </div>
            <div className='figures'>
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>Members</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>
            <div className='hero-buttons'>
                <button className= 'btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className='right-side'>
            <button className='btn'>Join now!</button>

            <div className='heart-rate'>
                <img src= {Heart} alt='heart'/>
                <span>Heart Rate </span> <span>115 bpm</span>
            </div>

            <div>
                <img src= {hero_image} alt=''  className='hero-image'/>
                <img src = {hero_image_back} className='hero-image-back' />
            </div>
            <div className='calories'>
                <img src= {Calories} alt="" />
                <div>
                    <span>Calories Burned</span><span>220 kcal</span>           
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;