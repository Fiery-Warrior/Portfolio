import React, { useState, useEffect } from "react";
import "./ed.css";
import Bachelors from "./Bachelors";
import Awards from "./Awards";

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

  let headerText = "Education";
  if (screenWidth < 499) {
    headerText = "Education";
  }

  const sectionStyle = {
    color: "#000000",
    backgroundColor: "rgb(216 219 223)",
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
    <section id="education" style={sectionStyle}>
      <div className="ed-container">
        <div className="ed-header">{headerText}</div>
        <div className="content">
          <section className="ed-awards">
            <div style={awardStyle}>
            </div>
            <Awards />
          </section>
          <div className="ed-bachelors">
            <Bachelors />
          </div>
          {/* <section className="languages">
            <Langs />
          </section> */}
        </div>
      </div>
    </section>
  );
};

export default Ed;
