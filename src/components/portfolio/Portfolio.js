import React, { Component } from "react";
import Card from "./Card";
import "./portfolio.css";
export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: "project 1",
          details: "project details",
        },
        {
          name: "project 2",
          details: "project details",
        },
        {
          name: "project 3",
          details: "project details",
        },
        {
          name: "project 4",
          details: "project details",
        },
        {
          name: "project 5",
          details: "project details",
        },
        {
          name: "project 6",
          details: "project details",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container pb-5">
        <h2 className="pt-5 p-3">Portfolio</h2>
        <div className="cards-container p-3">
          {this.state.projects.map((project, index) => {
            return (
              <Card
                project={project.name}
                details={project.details}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
