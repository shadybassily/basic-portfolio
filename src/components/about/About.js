import React from "react";
import './about.css'
export default function About() {
  return (
    <div className="container about-container my-5">
      <h2 className="about col-sm-12 col-md-4 col-lg-3 fs-1 py-3">About me</h2>
      <div className="col-sm-12 col-md-8 py-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
        veritatis perspiciatis earum maxime sapiente, nihil rerum asperiores
        unde sunt impedit tenetur ducimus tempore exercitationem illo.
        Dignissimos, commodi harum. Deleniti, cumque.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <a href="#" className="py-2 px-3 my-4">Download Resume</a>
      </div>
    </div>
  );
}
