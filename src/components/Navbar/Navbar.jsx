import React from 'react';
import images from '../../constants/images';
import './Navbar.css';

const svgStyle = {
    color: "rgb(255, 255, 255)"
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.tacomovil} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
            {/*
        <li className="p__opensans"><a href="#awards">Awards</a></li>
            */}
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <svg 
            onClick={() => setToggleMenu(true)}
            stroke="currentColor" 
            fill="currentColor" 
            stroke-width="0" 
            viewBox="0 0 512 512" 
            color="#fff" 
            font-size="27" 
            height="1em" 
            width="1em" 
            xmlns="http://www.w3.org/2000/svg" 
            style={ svgStyle }>
            <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
        </svg>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <svg 
                onClick={() => setToggleMenu(false)}
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" font-size="27" class="overlay__close" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></svg>


            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
            {/*
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
            */}
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
