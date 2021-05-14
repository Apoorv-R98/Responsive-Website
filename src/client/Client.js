import React from "react";
import "./Client.css";
import "../Utility.css";
import ClientItem from "./ClientItem";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import logo4 from "../img/logo4.png";

function Client() {
  return (
    <div>
      <section id="client-section">
        <h1 className="h-primary center">Our Clients</h1>
        <div id="clients">
          <ClientItem logo={logo1} />
          <ClientItem logo={logo2} />
          <ClientItem logo={logo3} />
          <ClientItem logo={logo4} />
        </div>
      </section>
    </div>
  );
}

export default Client;
