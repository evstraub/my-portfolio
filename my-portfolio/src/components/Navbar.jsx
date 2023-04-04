import '../App.css'
import '../reset.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import Modal from './Modal'


const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="nav">
      {/* menu */}
      <div className="menu-wrapper">
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="hamburger">
        <FaBars />
        { nav && <Modal closeNav={setNav}/>}
      </div>

     
      {/* social icons */}
      <div className="soc-icons"></div>
    </div>
  );
}

export default Navbar