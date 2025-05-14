import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Social Media" />
      <h2 className="headtext__cormorant">
        Subscribe To Our Social Media handles
      </h2>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <a
        href="https://facebook.com/p/Wok-and-Fire-100070460065791/"
        target="_blank"
        rel="noopener noreferrer"
        className="app__social-card"
      >
        <img
          src="/media/facebook-logo.svg"
          alt="Facebook Logo"
          className="social-logo"
        />
        <div className="app__social-card-content">
          <h3>Facebook</h3>
        </div>
      </a>
      <a
        href="https://www.instagram.com/wokandfireuk?igsh=OGdka2s3dWV0dTNm"
        target="_blank"
        rel="noopener noreferrer"
        className="app__social-card"
      >
        <img
          src="/media/instagram-logo.svg"
          alt="Instagram Logo"
          className="social-logo"
        />
        <div className="app__social-card-content">
          <h3>Instagram</h3>
        </div>
      </a>
      <a
        href="https://www.tiktok.com/@wokandfirehalal"
        target="_blank"
        rel="noopener noreferrer"
        className="app__social-card"
      >
        <img
          src="/media/tiktok-logo.svg"
          alt="TikTok Logo"
          className="social-logo"
        />
        <div className="app__social-card-content">
          <h3>TikTok</h3>
        </div>
      </a>
    </div>
  </div>

);

export default Newsletter;
