import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Education = () => {
  return (
    <div id='education' className="education">
      <div className="education-title">
        <h1>Qualification</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="education-section"></div>
      <div className="education-hr">
       <div className="one"></div>
       <div className="two"></div>
      </div>
       <div className="education-section-middle">
       <div className="education-left">
        <h3>Master of Computer Application (MCA)</h3>
        <p>Vellore Institute of Technology Bhopal</p>
        <p className="date">2022 - 2024</p>
      </div>
      
      <div className="education-right">
        <h3>Bachelor of Science (CS)</h3>
        <p>Barkatullah University Bhopal</p>
        <p className="date">2017 - 2020</p>
      </div>
      </div>
      </div>
  );
};

export default Education;
