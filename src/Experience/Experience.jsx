import React, { useState, useEffect } from "react";
import "./experience.css";
import ActionAreaCard from "./Moriarty";
import Career from "./USAAimage";
import TA from "./TA";
import Langs from "./Langs";

const Experience = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let headerText = "Recent Experience";
  if (screenWidth < 499) {
    headerText = "Experience";
  }

  return (
    <section
      id="experience"
      style={{
        color: "#000000",
        backgroundColor: "#edf0f2",
        height: "100vh",
        width: "170vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        
      }}
    >
      <div className="container">
        <div className="header">{headerText}</div>
        <div className="content">
          <section className="careers">
            <Career />
            <br />
            <TA />
            <br />
          </section>
          <div className="mor">
            <ActionAreaCard />
          </div>
          <section className="languages">
            <Langs />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Experience;
