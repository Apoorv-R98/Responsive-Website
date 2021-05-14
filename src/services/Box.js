import React from "react";
import "../Utility.css";
import "./Box.css";

function Box(props) {
  return (
    <div className="box">
      <img src={props.boxImg} alt="" />
      <h2 className="h-secondary">{props.title}</h2>
      <p className="center">{props.text}</p>
    </div>
  );
}

export default Box;
