import React from "react";
import "./about.css";
import ImgMediaCard from "./image";

const About = () => {
  return (
    <section id="about" style={{color: "#000000" }}>
      <div className="container">
        <div className="description">
          <h1>Who am I?</h1>
          <p>
            Hello! I'm Keagan Bogart, a Senior Cyber Security Student at DBU.
            <br />
            <br />
            Currently, I'm working as a Teaching Assistant for the Cyber Security and Computer Science department, where I lead labs, grade assignments, tutor students, and manage other TAs.
            <br />
            <br />
            These past two years I've had the opportunity to work as a Full Stack Software Engineer at USAA. I am returning for a second internship where I will also be working as a Cloud Developer.
          </p>
        </div>
        <div className="image">
          <ImgMediaCard />
        </div>
      </div>
    </section>
  );
};

export default About;
