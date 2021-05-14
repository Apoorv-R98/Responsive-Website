import React from "react";
import "./Services.css";
import "../Utility.css";
import boxImg1 from "../img/1.png";
import boxImg2 from "../img/2.png";
import boxImg3 from "../img/3.png";
import Box from "./Box";

function Services() {
  return (
    <div>
      <section className="services-container">
        <h1 className="h-primary center">
          Our Services
          <div id="services">
            <Box
              boxImg={boxImg1}
              title="Food Catering"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ea cupiditate laborum nostrum, ad corporis facilis
                officia repellat temporibus consequuntur aperiam reprehenderit
                vitae minima qui distinctio natus harum explicabo repellendus
                expedita sequi porro beatae."
            />
            <Box
              boxImg={boxImg2}
              title="Bulk Ordering"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ea cupiditate laborum nostrum, ad corporis facilis
                officia repellat temporibus consequuntur aperiam reprehenderit
                vitae minima qui distinctio natus harum explicabo repellendus
                expedita sequi porro beatae."
            />
            <Box
              boxImg={boxImg3}
              title="Food Ordering"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ea cupiditate laborum nostrum, ad corporis facilis
                officia repellat temporibus consequuntur aperiam reprehenderit
                vitae minima qui distinctio natus harum explicabo repellendus
                expedita sequi porro beatae."
            />
          </div>
        </h1>
      </section>
    </div>
  );
}

export default Services;
