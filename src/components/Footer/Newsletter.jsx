import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="" />
      <h1 className="headtext__cormorant">Catering services</h1>
      <p className="p__opensans">You can call or send a message</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <input type="message" placeholder="type your message" />
      <button type="button" className="custom__button">send</button>
    </div>
  </div>
);

export default Newsletter;