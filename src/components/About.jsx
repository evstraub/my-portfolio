import React from 'react'
import '../App.css'
import ethan from "../imgs/HAZER_9.JPEG"
import {AiFillGithub, AiFillLinkedin,AiFillMail, AiFillFilePdf} from 'react-icons/ai'
const About = () => {
  return (
   <>
   
   <div name="about" className="about">
 <h3 className="about-title">ABOUT</h3>
 <div style={{ width:'75rem', height:"50vh", display:'flex', alignItems: "center", justifyContent: "center"}}>
   <div className="innerDivAbt">
    <p>Hey! I'm Ethan, I'm a front end developer currently based near Ann Arbor Michigan. </p>
      <p>For the past year I have been learning and creating interactive and user friendly applications and sites.   </p>
      <p>
            <button><AiFillGithub style={{width: 'auto', height: "50px"}}/> </button>
            <button><AiFillLinkedin style={{width: 'auto', height: "50px"}}/></button>
            <button><AiFillMail style={{width: 'auto', height: "50px"}}/></button>
            <button><AiFillFilePdf style={{width: 'auto', height: "50px"}}/></button>
          </p>
   </div>
   <img src={ethan}style={{width:'auto', height:"25rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}alt='blog'></img>
 </div>

</div>
    </>
  );
}

export default About