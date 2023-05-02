import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import '../App.css'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className="home">
      {/* container */}
      <div className="container">
       
        <div>
          <button className="lookBtn">
          <Link to="projects" smooth={true} duration={500}>
              PROJECTS
            </Link>
            <span>
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home