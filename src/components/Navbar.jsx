import '../App.css'
import '../reset.css'
import {FaBars } from 'react-icons/fa'
import { useState } from 'react'
import Modal from './Modal'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from "react-scroll";
import DarkMode from './Darkmode'



const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="nav">
      {/* menu */}
      <div className="menu-wrapper">
        <ul className="menu">
        <DarkMode/>

          <li>
            <Link to="home" smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              PROJECTS
            </Link>
          </li>
          <li>
            
            <Link to="contact" smooth={true} duration={500}>
              CONTACT
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