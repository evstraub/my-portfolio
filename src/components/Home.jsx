import React from 'react'
import '../App.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'
const Home = () => {
  return (
    <div name="home" className="home">
      {/* container */}
      <div className="container">
       
        <div style={{display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
        <p className='Ethan'>ETHAN STRAUB</p>
        <div className='webdev'>WEB DEVELOPER</div>
        </div>
        <div className="home-btn">
        <Link to="about" smooth={true} duration={500}>
        <FontAwesomeIcon icon={faChevronDown} fade size='2xl' style={{color: "#ef233c", padding: '15px'} }  />
            </Link>
       
      </div>
      </div>
    
    </div>
  );
}

export default Home