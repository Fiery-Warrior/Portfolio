import React from "react";
import "./about.css";
import ImgMediaCard from "./image";

const About = () => {
  return (
      <div className="container-a">
        <div className="description">
    <section id="about" style={{color: "#000000" }}>

          {/* <h1>Who am I?</h1> */}
          <h1 style={{ textAlign: "left" }}>Who am I?</h1>
          <p style={{ textAlign: "left" }}>
            Hello! I'm Keagan Bogart, a Senior Cyber Security Student at Dallas Baptist University majoring in Cybersecurity, graduating December 2023.
            <br />
            <br />
            Currently, I'm working as a Teaching Assistant for the Cyber Security and Computer Science department, where I lead labs, grade assignments, tutor students, and manage other TAs.
            <br />
            <br />
            These past two years I've had the opportunity to work as a Full Stack Software Engineer at USAA. I was a Full Stack Software Engineer for the first internship and I am returning for a second internship as a Cloud Engineer.
          </p>
    </section>
        </div>
        


        <div className="image">
          <ImgMediaCard />
        </div>
      </div>
  );
};

export default About;
