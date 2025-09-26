import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import resume from "../../assets/Laura_Zapata_resume.pdf";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'M LAURA</span>, a frontend developer!
      </h1>
      <p>I have expereince in multiuple areas and Im awesome</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          <span className="transition"></span>
          <span className="gradient"></span>
          <span className="label">My Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
