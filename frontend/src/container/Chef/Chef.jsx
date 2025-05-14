import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      {/* <img src={images.chef} alt="chef" /> */}
      <img src={images.gal15} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          {/* <img src={images.quote} alt="quote" /> */}
          <p className="p__opensans">
          Our passion is to craft memorable flavors that bring people together.
          </p>
        </div>
        <p className="p__opensans" style={{ margin: "2rem 0", textTransform: "none" }}>
        Each dish combines tradition with innovation, using the freshest ingredients to create a truly unique dining experience. Welcome, and enjoy!
        </p>
      </div>

      {/* <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div> */}
    </div>
  </div>
);

export default Chef;
