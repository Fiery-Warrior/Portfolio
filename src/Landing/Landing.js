import React from "react";
import "./landing.css";
import Typed from "react-typed";

const Landing = () => {

  const isSmallScreen = window.innerWidth < 758;

  return (
    <section className="home"
      id="home"
      style={{
        position: "absolute",
        top: 0,
        left: "20%",
        '@media (max-width: 440px)': {left: "35%"},
        height: "100vh",
        width: "79vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/me8.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="image-text"
        style={{
          position: "absolute",
          top: "82%",
          left: "65%",
          transform: "translateX(-50%)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#fff", fontSize: "37px" }}></h1>
        <h3
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "0.5rem",
            fontSize: isSmallScreen ? "25px" : "35px",
          }}
        >
          I'm a{" "}
          <Typed
            strings={["Full Stack Dev.", "Cloud Engineer", "Creator", "Student"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            style={{ color: "#fff", borderBottom: "3px solid #149ddd" }}
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
        ></section>
      </div>
    </section>
  );
};

export default Landing;
