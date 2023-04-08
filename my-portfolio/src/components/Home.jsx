import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import '../App.css'
const Home = () => {
  return (
    <div name="home" className="home">
      {/* container */}
      <div className="container">
        <p className="hi-im">Hi, I'm</p>
        <h1 className="Ethan">Ethan Straub</h1>
        <p className="buildthings">I like to build things.</p>
        <div>
          <button className="lookBtn">
            View Projects{" "}
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