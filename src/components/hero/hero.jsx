import React from 'react'
import './hero.css'
import Header from '../Header/Header'
const Hero = () => {
  return (
    <div className = "hero">
        <div className = 'left-side'>
            <Header/>
            <div className='best-ad'>
                <div></div>
                <span>the best fitness club in town</span>
            </div>
            <div className='hero-text'>
            <div>
                <span>Shape</span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>
            </div>
        </div>
        <div className='right-side'>
            
        </div>
    </div>
  )
}

export default Hero;