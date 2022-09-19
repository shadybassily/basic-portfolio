import React, { Component } from "react";
import "./skills.css";
export default class SkillsProgress extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          name: "HTML",
          progress: 50,
        },
        {
          name: "CSS",
          progress: 60,
        },
        {
          name: "Bootstrap",
          progress: 55,
        },
        {
          name: "JavaScript",
          progress: 75,
        },
        {
          name: "React JS",
          progress: 45,
        }
      ],
    };
  }

  render() {
    return (
      <div className="col-sm-12 col-lg-7 my-3">
        {this.state.skills.map((skill,index) => {
          return (
            <div className="progress-bar my-2" key={index}>
              <div className="skill col-sm-2 fs-6 ">{skill.name}</div>
              <div
                className="skill-progress col-8"
                style={{ backgroundSize: `${skill.progress}%` }}
              ></div>
            </div>
          );
        })}
      </div>
    );
  }
}
