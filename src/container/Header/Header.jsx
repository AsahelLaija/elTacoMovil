import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the best flavour" />
      <h1 className="app__header-h1">The Authentic Mexican Cuisine</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Bringing our home cooking to the streets, come have a taste and tell us what you think!</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.trompo} alt="trompo.jpg" />
    </div>
  </div>
);

export default Header
