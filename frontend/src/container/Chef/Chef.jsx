import React from "react";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg chef__container">
    <div className="chef__image">
      <img src="https://res.cloudinary.com/dgtomvt9x/image/upload/v1749768047/gal15_dstgcx.jpg" alt="chef" />
    </div>
    <div className="chef__info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="chef__content">
        <div className="chef__quote">
          <p className="p__opensans">
            Our passion is to craft memorable flavors that bring people together.
          </p>
        </div>
        <p className="p__opensans" style={{ textTransform: "none" }}>
          Each dish combines tradition with innovation, using the freshest ingredients to create a truly unique dining experience. Welcome, and enjoy!
        </p>
      </div>
      {/* Uncomment if signature is needed
      <div className="chef__signature">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
      */}
    </div>
  </div>
);

export default Chef;