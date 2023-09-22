import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/*
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>
    */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Best tacos</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"></p>

    {/*
        <button type="button" className="custom__button">Know More</button>
    */}

      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.logo} alt="logo" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">in the town</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"></p>
    {/* 
        <button type="button" className="custom__button">Know More</button>
    */}
      </div>
    </div>
  </div>
);

export default AboutUs;
