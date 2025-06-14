import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src="https://res.cloudinary.com/dgtomvt9x/image/upload/v1749768081/G_mt6bto.png" alt="g letter" />
      {/* <img src={images.G} alt="g letter" /> */}
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p className="p__opensans" style={{ margin: "2rem 0", textTransform: "none" }}>
        At Wok and Fire, we fuse tradition with innovation, crafting unforgettable Pan Asian fusion dishes that unite flavor and culture. 
        Every meal tells a story of fresh ingredients and timeless techniques.
        </p>
        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src="https://res.cloudinary.com/dgtomvt9x/image/upload/v1749767944/knife_enfa5q.png" alt="about_knife" />
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{ margin: "2rem 0", textTransform: "none" }}>
        From humble beginnings, we have grown by staying true to our passion for culinary excellence. Our journey is fueled by a 
        commitment to bringing people together through food that’s both flavorful and unforgettable.
        </p>
        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
