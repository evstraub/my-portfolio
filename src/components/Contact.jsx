import React from 'react'
import "../App.css";

const Contact = () => {
  return (
    <div>
      <h6 className="contact-title">CONTACT ME</h6>
      <form   name='contact' method='POST' action="https://getform.io/f/96304d5d-31c3-4bb1-bc5d-f3c05dd0d188">
        
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
    </div>
  );
}

export default Contact