import React from "react";
import "./Skill.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skill = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skills-content">
        <div className="skills-content-left">
          <h3>Frontend Developer</h3>
          <ul>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>Bootstrap</p>
            </li>
            <li>
              <p>JavaScript</p>
            </li>
            <li>
              <p>React JS</p>
            </li>
            <li>
              <p>Git</p>
            </li>
          </ul>
        </div>
        <div className="skills-content-right">
          <h3>Backend Developer</h3>
          <ul>
            <li>
              <p>Node JS</p>
            </li>
            <li>
              <p>Express JS</p>
            </li>
            <li>
              <p>Java</p>
            </li>
            <li>
              <p>MySQL</p>
            </li>
            <li>
              <p>SQL</p>
            </li>
            <li>
              <p>MongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
