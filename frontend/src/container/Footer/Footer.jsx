import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      {/* <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Our Locations</h1>
        <ul>
        <li><p className="p__opensans">326 Vauxhall Bridge Rd, London SW1V 1AA</p></li>
        <p className="p__opensans">33 Haymarket, London SW1Y 4HA</p>
        <p className="p__opensans">19 Camden High St, London NW1 7JE in Camden Town</p>
        </ul>
      </div> */}

      <div className="app__footer-links_locations">

        <h1 className="app__footer-headtext">Our Locations</h1>
        <ol className="p__opensans" style={{listStyleType: 'decimal', paddingLeft: '1rem'}}>
          <li><p className="p__opensans">326 Vauxhall Bridge Rd, London SW1V 1AA</p></li>
          <li><p className="p__opensans">33 Haymarket, London SW1Y 4HA</p></li>
          <li><p className="p__opensans">19 Camden High St, London NW1 7JE in Camden Town</p></li>
        </ol>
      </div>

      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer_logo" /> */}
        <h1 className="app__footer-headtext">Wok & Fire</h1>
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <ol className="p__opensans" style={{listStyleType: 'none', paddingLeft: '1rem'}}>
          <li className="location-item">
            <p className="location-name">Vauxhall Bridge Rd</p>
            <ul className="location-hours">
              <li>Monday-Friday: 11:00 am - 01:00 am</li>
              <li>Sunday: 11:00 am - 11:00 pm</li>
            </ul>
          </li>
          <li className="location-item">
            <p className="location-name">Haymarket</p>
            <ul className="location-hours">
              <li>Sunday-Thursday: 11:00 am - 11:00 pm</li>
              <li>Friday-Saturday: 11:00 am - 02:00 am</li>
            </ul>
          </li>
          
        </ol>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2025 Wok & Fire. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
