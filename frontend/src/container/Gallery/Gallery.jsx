import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [
  // images.gallery01,
  // images.gallery02,
  // images.gallery03,
  // images.gallery04,
  images.gal1,
  images.gal2,
  images.gal3,
  images.gal4,
  images.gal5,
  images.gal6,
  images.gal7,
  images.gal8,
  images.gal9,
  images.gal10,
  // images.gal11,
  images.gal12,
  images.gal13,
  images.gal14,
  images.gal15,
  images.gal16,
  images.gal17,
  images.gal18,
  images.gal19
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
        Check out our Instagram for mouth-watering photos, behind-the-scenes action, 
        and the latest menu updates. Dive into the vibe, discover our specials, 
        and see why everyone’s raving. Follow us and get inspired for your next meal!
        </p>
        <button 
          type="button" 
          className="custom__button"
          onClick={() => window.open('https://www.instagram.com/wokandfireuk?igsh=OGdka2s3dWV0dTNm', '_blank')}
        >
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("Right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
