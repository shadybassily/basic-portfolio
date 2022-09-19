import React from "react";

export default function Card(props) {
  return (
    <div className="card mx-auto col-sm-5 col-lg-3 text-center" >
      <div className="card-body">
     <strong> {props.project}</strong>
        <p className="card-text">
          {props.details}
        </p>
      </div>
    </div>
  );
}
