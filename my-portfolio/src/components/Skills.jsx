import React from 'react'
import "../App.css";

const Skills = () => {
  return (
    <div className="skills">
      <h4 className="skills-title">skills</h4>
<div className="skill-outer">
    
          <div className="shrink1">
              <div className="skill-cont">
                <img
                  className="html-icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                  alt="html5"
                />
              </div>
              <div className="skill-cont">
                <img
                  className="html-icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                  alt="css3"
                />
              </div>
              <div className="skill-cont">
                <img
                  className="js-icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JS"
                />
              </div>
          </div>
          <div className="shrink2">
              <div className="skill-cont">
                <img
                  className="html-icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="react"
                />
              </div>
              <div className="skill-cont">
                <img
                  className="html-icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="node"
                />
              </div>
              <div className="skill-cont">
                <img
                  className="html-icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                  alt="mongodb"
                />
              </div>
          </div>
</div>
    </div>
  );
}

export default Skills