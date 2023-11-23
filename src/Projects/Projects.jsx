import React, { useState, useEffect } from "react";
import "./projects.css";
// import Bachelors from "./Bachelors";
// import Awards from "./Awards";
import Langs from "./Langs";

const Ed = () => {
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

  let headerText = "Project Experience";
  if (screenWidth < 499) {
    headerText = "Projects";
  }

  const sectionStyle = {
    color: "#000000",
    backgroundColor: "#e4e7eb",
    width: "170vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    height: "130vh",
    paddingLeft: "20%", /**Moves not just the heade 'Recent Experience' but also the cards */
    marginTop: '0',
  };



  const awardStyle = {
    marginBottom: "10px", // Add margin-bottom to create space
  };

  return (
    <section id="projects" style={sectionStyle} className="education-section">
      <div className="ed-container">
        <div className="ed-header">{headerText}</div>
        <div className="content">
          {/* <section className="ed-awards">
            <div style={awardStyle}>
            </div>
            <Awards />
          </section> */}

          {/* <div className="ed-bachelors">
            <Bachelors />
          </div> */}

          <section className="languages">
            <Langs />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Ed;
