import React, { Component } from "react";
import Card from "./Card";
import "./portfolio.css";
export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: "Todo-App",
          details: "A simple todo app that create, delete & edit tasks",
        },
        {
          name: "Calculator",
          details: "A calculator that accomplish basic operations",
        },
        {
          name: "Todo-App",
          details: "A simple todo app that create, delete & edit tasks",
        },
        {
          name: "Calculator",
          details: "A calculator that accomplish basic operations",
        },
        {
          name: "Todo-App",
          details: "A simple todo app that create, delete & edit tasks",
        },
        {
          name: "Calculator",
          details: "A calculator that accomplish basic operations",
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
