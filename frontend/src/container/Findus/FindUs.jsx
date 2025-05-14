import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
        Vauxhall Bridge Rd, Haymarket, Camden High St
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        {/* <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p> */}
        <ol className="p__opensans" style={{listStyleType: 'none', paddingLeft: '1rem'}}>
          <li className="location-item">
            <p className="location-name">Vauxhall Bridge Rd</p>
            <ul className="location-hours">
              <li>Monday-Friday: 11:00 AM - 01:00 AM</li>
              <li>Sunday: 11:00 AM - 11:00 PM</li>
            </ul>
          </li>
          <li className="location-item">
            <p className="location-name">Haymarket</p>
            <ul className="location-hours">
              <li>Sunday-Thursday: 11:00 AM - 11:00 PM</li>
              <li>Friday-Saturday: 11:00 AM - 02:00 AM</li>
            </ul>
          </li>
          
        </ol> 
      </div>
      {/* <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button> */}
    </div>
    <div className="app__wrapper_img">
      <img src={images.gal12} alt="findus" />
    </div>
  </div>
);

export default FindUs;
