import React from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
const Modal = ({closeNav}) => {
  return (
    <div className="modal-bg">
      {/* mobile menu */}

      <ul className="mobile">
        <close className="closeBtn" onClick={() => closeNav(false)}>
          {!closeNav ? <FaBars/> : <FaTimes/>}
        </close>

        <li className="mob-li">Home</li>
        <li className="mob-li">About</li>
        <li className="mob-li">Projects</li>
        <li className="mob-li">Contact</li>
      </ul>
    </div>
  );
}

export default Modal