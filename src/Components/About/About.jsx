import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.png";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experiences frontend developer with over 60 years of
              experience in every field
            </p>
            <p>My passion is fashion, fun, sexiness, and happiness</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>React</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Node.js</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievements">
              <h1>10+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievements">
              <h1>90+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievements">
              <h1>15+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
