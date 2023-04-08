import React from 'react'
import '../App.css'

const About = () => {
  return (
    <div name="about" className="about">
      <div className="about-cont">
        <h3 className="about-title">About</h3>

        <div className="pdiv">
          <p>
            When I was younger I was obsessed with <span className="lego">LEGO</span>. Everyday after school I would go
            into my basement where I would sit down by my little table and work
            on my little city. I loved to build without the instructions to see
            what wacky components would be added to the city next. 
            <p>
              As I got
              older I grew out of <span className="lego">LEGO</span>, but I slowly
              found love for coding. I started my self taught coding journey in
              2022, focusing on the front end with help from The Odin Project.
              I've come a long way since my start of this journey..
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About