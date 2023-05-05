import React from 'react'
import '../App.css'
import ethan from "../imgs/HAZER_9.JPEG"
import {AiFillGithub, AiFillLinkedin,AiFillMail, AiFillFilePdf} from 'react-icons/ai'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-scroll';
const About = () => {
  return (
   <>
   
   <div name="about" className="about" >
 <AnimationOnScroll animateIn="animate__fadeIn">
 <h3 className="about-title" >ABOUT</h3></AnimationOnScroll>
 <AnimationOnScroll animateIn='animate__fadeIn'>
 <div className='fadeAbt' data-aos="fade-up" >
   <div className="innerDivAbt">
    <p>Hey! I'm Ethan, I'm a front end developer currently based near Ann Arbor Michigan. </p>
      <p>For the past year I have been learning and creating interactive and user friendly applications and sites.   </p>
      <p style={{ display: "flex", justifyContent: "center"}}>
            <a href="https://github.com/evstraub"><button><AiFillGithub style={{width: 'auto', height: "50px"}}/> </button></a>
            <a href="https://www.linkedin.com/in/ethan-straub-11a248247/"><button><AiFillLinkedin style={{width: 'auto', height: "50px"}}/></button></a>
            <Link to="contact" smooth={true} duration={500}><button><AiFillMail style={{width: 'auto', height: "50px"}}/></button></Link>
            <button><AiFillFilePdf style={{width: 'auto', height: "50px"}}/></button>
          </p>
   </div>
   <img src={ethan}style={{width:'auto', height:"25rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}alt='blog'></img>
 </div>
 </AnimationOnScroll>
</div>
    </>
  );
}

export default About