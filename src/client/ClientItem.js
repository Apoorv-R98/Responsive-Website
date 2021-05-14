import React from "react";
import "./ClientItem.css";

function ClientItem(props) {
  return (
    <div className="client-item">
      <img src={props.logo} alt="Our Client" />
    </div>
  );
}

export default ClientItem;
