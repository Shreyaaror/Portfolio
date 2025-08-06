import React from "react";
 import { FaFileAlt } from "react-icons/fa"; 
import PageHeaderContent from "../../components/pageheadercontent";
import "./style.scss";
import {
  educationData,
  experienceData,
  certificationsData,
  skillsData
} from "./resume";

export default function Resume() {
  return (
    <section id="resume" className="resume">
       

<PageHeaderContent
  headerText="My Resume"
  icon={<FaFileAlt size={40} />}
/>

      {/* <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      /> */}

      <div className="resume__top">
        <div className="resume__column">
          <div className="resume__block">
            <h3>Education</h3>
            {educationData.map((edu, i) => (
              <div className="resume__item" key={i}>
                <h4>{edu.degree}</h4>
                <p>{edu.institute}</p>
                <p>{edu.duration}</p>
                <p>{edu.cgpa}</p>
              </div>
            ))}
          </div>

          <div className="resume__block">
            <h3>Certifications</h3>
            <ul>
              {certificationsData.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="resume__column">
          <div className="resume__block">
            <h3>Experience</h3>
            {experienceData.map((exp, i) => (
              <div className="resume__item" key={i}>
                <h4>{exp.role}</h4>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
                <ul>
                  {exp.tasks.map((task, t) => (
                    <li key={t}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="resume__block">
            <h3>Technical Skills</h3>
            <ul>
              {skillsData.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="resume__download">
        <a href="/Shreya_Resume.pdf" download className="resume__download-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}
