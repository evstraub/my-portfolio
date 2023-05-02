import '../App.css'
import '../reset.css'
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa'
import { useState } from 'react'
import Modal from './Modal'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from "react-scroll";


const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="nav">
      {/* menu */}
      <div className="menu-wrapper">
        <ul className="menu">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="hamburger">
        <FaBars />
        {nav && <Modal closeNav={setNav} />}
      </div>

      {/* <div className="soc-icons">
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
      </div> */}
    </div>
  );
}

export default Navbar