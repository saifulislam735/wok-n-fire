import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <section className="app__specialMenu section__padding" id="menu" aria-labelledby="special-menu-title">
    <header className="app__specialMenu-title">
      <SubHeading title="Menu That Fits Your Palate" />
      <h1 className="headtext__cormorant" id="special-menu-title">Today's Special</h1>
    </header>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu__wine">
        <h2 className="app__specialMenu-menu__heading">Most Popular</h2>
        <ul className="app__specialMenu-menu__items">
          {data.wines.map((wine, index) => (
            <li key={`${wine.title}-${index}`}>
              <MenuItem title={wine.title} price={wine.price} tags={wine.tags} />
            </li>
          ))}
        </ul>
      </div>

      <figure className="app__specialMenu-menu__img">
        <img
          
          src="https://res.cloudinary.com/dgtomvt9x/image/upload/v1749767998/gal11_j7yijo.jpg"
          alt="Special menu showcase"
          loading="lazy"
        />
      </figure>

      <div className="app__specialMenu-menu__cocktails">
        <h2 className="app__specialMenu-menu__heading">Sweet Bargain</h2>
        <ul className="app__specialMenu-menu__items">
          {data.cocktails.map((cocktail, index) => (
            <li key={`${cocktail.title}-${index}`}>
              <MenuItem title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* <div className="app__specialMenu-button">
      <button
        type="button"
        className="custom__button"
        aria-label="View more menu items"
      >
        View More
      </button>
    </div> */}
  </section>
);

export default SpecialMenu;
