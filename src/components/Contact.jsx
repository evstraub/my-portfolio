import React from 'react'
import "../App.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Contact = () => {
  return (
    <div>
      
      {/* <AnimationOnScroll animateIn='animate__fadeIn'>
 </AnimationOnScroll> */}
<AnimationOnScroll animateIn='animate__fadeIn'>

      <form   name='contact' method='POST' action="https://getform.io/f/96304d5d-31c3-4bb1-bc5d-f3c05dd0d188">
      <h6 className="contact-title"> GET IN TOUCH</h6>
        <div className="contact">
          <div className="contact-form">
            <div className="inner-form">
              <input
                className="namesubmit"
                type="text"
                placeholder="Name"
                name="name"
              ></input>
              <input
                className="emailsubmit"
                type="email"
                placeholder="Email"
                name="email"
              ></input>
              <textarea
                className="textarea"
                name="Message"
                rows="10"
                placeholder="message"
              ></textarea>
              <button className="sendBtn"> Send</button>
            </div>
          </div>
        </div>
      </form>
      </AnimationOnScroll>
    </div>
  );
}

export default Contact