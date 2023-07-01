import React from "react";
import "./about.css";
import Typed from "react-typed";

const About = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "20%",
        height: "100vh",
        width: "80vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/me8.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ position: "absolute", top: "70%", left: "60%", transform: "translateX(-50%)" }}>
        <h1 style={{ textAlign: "center", color: "#fff", fontSize: "40px" }}>Keagan Bogart</h1>
        <h3 style={{ textAlign: "center", color: "#fff", marginBottom: "1rem" }}>
          I'm a {" "}
          <Typed
            strings={[
              "Full Stack Developer",
              "Cloud Engineer",
              "Creator",
              "Dreamer",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
            style={{ color: "#fff", borderBottom: "3px solid #149ddd",}}
          />
        </h3>
        <section
          sx={{
            maxWidth: 345,
            minWidth: 440,
            "@media (max-width: 768px)": {
              maxWidth: 300,
              minWidth: "auto",
            },
            "@media (max-width: 480px)": {
              maxWidth: 250,
            },
          }}
        >

        </section>
      </div>
    </div>
  );
};

export default About;
