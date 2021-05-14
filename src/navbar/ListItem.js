import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <div>
      <li className="item">
        <a href="www.google.com">{props.text}</a>
      </li>
    </div>
  );
}

export default ListItem;
