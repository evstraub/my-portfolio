import '../App.css'
import '../reset.css'
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa'
import { useState } from 'react'
import Modal from './Modal'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

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
        {nav && <Modal closeNav={setNav} />}
      </div>

      
      <div className="soc-icons">
        <ul>
          <li className="soc-li">
            <a href="/">
              LinkedIn<FaLinkedin size={30} />
            </a>
          </li>
          <li className="soc-li">
            <a href="/">
             Github <FaGithub size={30} />
            </a>
          </li>
          <li className="soc-li">
            <a href="/">
             resume <BsFillPersonLinesFill size={30}  />
            </a>
          </li>
          <li className="soc-li">
            <a href="/">
             Contact <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar