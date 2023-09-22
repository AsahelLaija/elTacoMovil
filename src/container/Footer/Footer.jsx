import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Location</h1>
        <p className="p__opensans">Purple Wave Parking lot</p>
        <p className="p__opensans">825 Levee Dr., Manhattan, KS</p>
        <p className="p__opensans">785-236-8606</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.tacomovil} alt="footer_logo" />
        <p className="p__opensans">&quot;Mi casa is your casa, mi taco is my taco&quot;</p>
        <img src={images.spoon} className="spoon__img" alt="spoon" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">

        <a href="https://www.facebook.com/profile.php?id=61551206891413">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>

        <a href="https://www.facebook.com/profile.php?id=61551206891413">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
        </a>

        <a href="https://www.facebook.com/profile.php?id=61551206891413">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>

        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">04:00 PM - 10:00 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 tacomovil. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
