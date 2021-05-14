import React from "react";
import "./Contact.css";
import "./Utility.css";

function Contact() {
  return (
    <div>
      <section id="contact">
        <h1 className="h-primary center">Contact US</h1>
        <div id="contact-box">
          <form action="">
            <div className="form-group">
              <label for="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="form-group">
              <label for="name">Email: </label>
              <input
                type="email"
                name="name"
                id="name"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="form-group">
              <label for="name">Phone: </label>
              <input
                type="phone"
                name="name"
                id="name"
                placeholder="Enter Your Phone Number"
              />
            </div>

            <div className="form-group">
              <label for="message">Message: </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                row="10"
              ></textarea>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
