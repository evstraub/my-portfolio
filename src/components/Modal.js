import React from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import { Link } from "react-scroll";


const Modal = ({closeNav,handleClick}) => {
  return (
    <div className="modal-bg">
      {/* mobile menu */}

      <ul className="mobile">
        <div className="closeBtn" onClick={() => closeNav(false)}>
          {!closeNav ? <FaBars /> : <FaTimes />}
        </div>

        <li className="mob-li">
          <Link
            onClick={() => closeNav(false)}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="mob-li">
          <Link
            onClick={() => closeNav(false)}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="mob-li">
          <Link
            onClick={() => closeNav(false)}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="mob-li">
          <Link
            onClick={() => closeNav(false)}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Modal