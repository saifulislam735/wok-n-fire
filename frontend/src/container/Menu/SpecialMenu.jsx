import React from "react";

import { SubHeading, MenuItem } from "../../components";

import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits You Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Most Popular</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src="https://res.cloudinary.com/dgtomvt9x/image/upload/v1749767998/gal11_j7yijo.jpg" alt="menu img" />
        {/* <img src={images.gal11} alt="menu img" /> */}
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Sweet Bargain</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              title={cocktails.title}
              price={cocktails.price}
              tags={cocktails.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      {/* <button type="button" className="custom__button">
        View More
      </button> */}
    </div>
  </div>
);

export default SpecialMenu;
