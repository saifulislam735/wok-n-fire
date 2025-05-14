import React, { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";

const videoSources = [
  "/media/video4.mp4", // First video from public/media
];

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const vidRef = useRef(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  // Function to switch to the next video when the current one ends
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex < videoSources.length - 1 ? prevIndex + 1 : 0 // Reset to first video after last one
    );
  };

  return (
    <div className="app__video_intro">
      <video
        ref={vidRef}
        src={videoSources[currentVideoIndex]}
        type="video/mp4"
        controls={false}
        muted
        autoPlay
        onEnded={handleVideoEnd} // Automatically move to the next video
      />
      <div className="app__video_intro-overlay flex__center">
        <div className="app__video_intro-overlay_circle flex__center" onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
