import React, { Component } from "react";
import heroImage from "../../images/hero2.jpg";
import "./hero.css";
export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      name: "Shady bassily",
      title: "Web Developer & designer",
    };
  }

  render() {
    return (
      <div className="position-relative">
        <img src={heroImage} className="img-fluid col-12" alt="..."></img>
        <div className="info position-absolute top-50 start-0 translate-middle-y d-flex flex-column p-4 col-lg-5 col-md-6 col-sm-7">
          <p className="my-name fs-1">{this.state.name}</p>
          <p className="title fs-6">{this.state.title}</p>
          <a href="mailto:shadybassily@yahoo.com">
            Contact me
          </a>
        </div>
      </div>
    );
  }
}
