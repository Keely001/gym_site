import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const mobile = window.innerWidth<=768? true: false;
  const [menuOpened, setMenu] = useState(false)
  return (
    <div className='header' id='home'>

    <img src={logo} alt="logos" className='logo'/>
    {menuOpened === false && mobile ===true? (
      <div className='header-mobile-bar'
      onClick={() => setMenu(true)}
      >
        <img src= {Bars} style={{width: '1.5rem', height: '1.5rem'}} alt=''/>
      </div>
    ): (
      <ul className='header-menu'>
        <li>
          <Link
          onClick={() => setMenu(false)}
          to="home"
          spy= {true}
          smooth={true}
          >
            Home
          </Link>
        </li>
        <li><Link
          onClick={() => setMenu(false)}
          to="programs"
          spy= {true}
          smooth={true}
          >
            Programs
          </Link></li>
        <li onClick={() => setMenu(false)}>Why use</li>
        <li>
        <Link
          onClick={() => setMenu(false)}
          to="plans"
          spy= {true}
          smooth={true}
          >
            Plans
          </Link>
        </li>
        <li>
        <Link
          onClick={() => setMenu(false)}
          to="testimonials"
          spy= {true}
          smooth={true}
          >
            Testimonials
          </Link>
        </li>
    </ul>
    )}
  
    </div>
  )
}

export default Header