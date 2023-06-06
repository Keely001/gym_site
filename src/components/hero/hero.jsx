import React from 'react';
import './hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {
    const transition = {type:'spring',duration:3};
    const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className = "hero">
        <div className='blur hero-blur'></div>
        <div className = 'left-side'>
            <Header/>
            <div className='best-ad'>
                <motion.div
                initial= {{left: mobile ? '165px': '238px'}}
                whileInView={{left:'8px'}}
                transition={transition}
                ></motion.div>
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
                    <span>
                        <NumberCounter end={140} start={100} delay= '4' preFix="+"/>
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={978} start={800} delay= '4' preFix="+"/>
                    </span>
                    <span>
                        900+ satisfied
                    </span>
                </div>
                <div>
                    <span><NumberCounter end={50} start={0} delay= '4' preFix="+"/></span>
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

            <motion.div 
            initial= {{right: "-1rem"}}
            whileInView={{right: "4rem"}}
            transition={transition}
            className='heart-rate'>
                <img src= {Heart} alt='heart'/>
                <span>Heart Rate </span> <span>115 bpm</span>
            </motion.div>

            <div>
                <img src= {hero_image} alt=''  className='hero-image' />
                <motion.img 
                initial= {{right: "11rem"}}
                whileInView={{right: "20rem"}}
                transition={transition}
                src = {hero_image_back} className='hero-image-back'  alt= ""/>
            </div>
            <motion.div 
            initial= {{right: "37rem"}}
            whileInView={{right: "28rem"}}
            transition={transition}
            className='calories' 
            >
                <img src= {Calories} alt="" />
                <div>
                    <span>Calories Burned</span><span>220 kcal</span>           
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero;