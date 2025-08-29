import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Im Laura</span>, frontend developer!
      </h1>
      <p>I have expereince in multiuple areas and Im awesome</p>
      <div className="her-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
