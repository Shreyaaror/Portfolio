import React from "react";
import { skillsData } from "./utils";
import { Line } from "rc-progress";
import PageHeaderContent from "../../components/pageheadercontent";
import { FaCode } from "react-icons/fa";
import "./style.scss";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<FaCode size={40} />}
      />
      <div className="skills__grid">
        {skillsData.map((category, index) => (
          <div className="skills__column" key={index}>
            <h3 className="skills__category">{category.label}</h3>
            {category.data.map((skill, idx) => (
              <div className="skills__item" key={idx}>
                <div className="skills__label">
                  <span>{skill.skillName}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <Line
                  percent={skill.percentage}
                  strokeWidth={6}
                  trailWidth={4}
                  strokeColor="var(--yellow-theme-main-color)"
                  trailColor="#333"
                  strokeLinecap="round"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

