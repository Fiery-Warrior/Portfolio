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
        left: "0%",
        '@media (max-width: 440px)': {left: "35%"},
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: "url('/me8.avif')",
        backgroundColor: "#F9F6EE",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="image-text"
        // style={{
        //   position: "absolute",
        //   top: "82%",
        //   left: "65%",
        //   transform: "translateX(-50%)",
        // }}
      >
      <h1 style={{color: "#252525"}}>Welcome to 

      the {" "}
          <Typed
            strings={["Independent Set Algorithm", "Bipartite Matrix Calculator"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            style={{ color: "grey", borderBottom: "3px solid #149ddd" }}
            //, textShadow: "2px 2px 4px #999999"
          />
      </h1>

        <h1 style={{ textAlign: "center", color: "#fff", fontSize: "37px" }}></h1>
        {/* <h3
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "0.5rem",
            fontSize: isSmallScreen ? "25px" : "35px",
          }}
        >
          the {" "}
          <Typed
            strings={["Independent Set Algorithm", "Cloud Engineer", "Creator", "Student"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            style={{ color: "#fff", borderBottom: "3px solid #149ddd" }}
          />
        </h3> */}
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
