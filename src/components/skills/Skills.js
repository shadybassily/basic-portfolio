import React, { Component } from "react";
import SkillsProgress from "./SkillsProgress";
import "./skills.css";
export default class Skills extends Component {
  render() {
    return (
      <div className="bg-dark text-light py-5">
        <div className="text-center container">
          <h2 className="py-2">Skills</h2>
          <div className="py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            veritatis perspiciatis earum maxime sapiente, nihil rerum asperiores
            unde sunt impedit tenetur ducimus tempore exercitationem illo.
            Dignissimos, commodi harum. Deleniti, cumque.
          </div>
        </div>

        <div className="d-flex flex-wrap  container justify-content-lg-evenly ">
          <div className=" text-center col-sm-12 col-lg-4 mx-auto">
            <h6 className="col-sm-3 col-md-2 col-lg-5 mx-auto my-3 py-2 border-bottom">
                My Focus
            </h6>
            <ul>
                <li>Responsive Images</li>
                <li>Unique Design</li>
                <li>Functionality</li>
                <li>User Experience</li>
            </ul>
          </div>

          <SkillsProgress />
        </div>
      </div>
    );
  }
}
