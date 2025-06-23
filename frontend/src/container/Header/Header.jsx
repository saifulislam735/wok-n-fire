import React, { useState, useRef } from "react";
import { SubHeading } from "../../components";
import "./Header.css";

const videoSources = [
  "https://res.cloudinary.com/dgtomvt9x/video/upload/v1749766861/video1_id9heu.mp4",
  "https://res.cloudinary.com/dgtomvt9x/video/upload/v1749766883/video2_sqozev.mov",
  "https://res.cloudinary.com/dgtomvt9x/video/upload/v1749766849/video3_meztu2.mp4"
];
// const videoSources = [
//   "/media/video1.mp4",
//   "/media/video2.mov",
//   "/media/video3.mp4"
// ];

const Header = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const vidRef = useRef(null);

  const handleVideoEnd = () => {
    if (currentVideoIndex < videoSources.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };

  return (
    <div className="app__header section__padding" id="home">
      {/* Left Side - Text Content */}
      <div className="app__wrapper_info">
        <SubHeading title="Chase the Flavor of Innovation" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0", textTransform: "none" }}>
          Elevate your culinary experience with dishes that redefine tradition. Crafted with the freshest ingredients,
          each bite is a testament to our passion for flavor. Discover the art of fine dining, where taste meets creativity.
        </p>
        <a href="#menu">
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </a>
      </div>

      {/* Right Side - Video Player (No Play/Pause Button) */}
      <div className="app__video">
        <video
          ref={vidRef}
          src={videoSources[currentVideoIndex]}
          type="video/mp4"
          loop={false}
          controls={false}
          muted
          autoPlay
          onEnded={handleVideoEnd}
        />
      </div>
    </div>
  );
};

export default Header;
