import React from 'react';
import'./contact.css';
import Header from '../Component/header';


const Contact = () => {
  return (
    <div>
       <Header/> 
       <div className="contact">
        <h2>contact</h2>
        <div className="inputform">
          <input type="text" required />
          <label>Enter your name</label>
        </div>
        <div className="inputform">
          <input type="text" required />
          <label>Enter your phone</label>
        </div>
        <div className="inputform">
          <input type="text" required />
          <label>Enter your email</label>
        </div>
        <input type="submit" defaultValue="send" className="send" />
      </div>     
    </div>
  );
}

export default Contact;
