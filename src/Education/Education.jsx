import React, { useState, useEffect } from "react";
import "./education.css";
import Bachelors from './Bachelors';
const Education = () => {
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

  const bachelorsectionStyle = {
    color: "black",
    backgroundColor: "#e3e3e3",
    width: "170vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    height: "130vh",
    paddingLeft: "30%",
  };



  const bachelorStyle = {
    marginBottom: "10px", 
  };




  return (
    <section id="education" style={bachelorsectionStyle}>
      <div className="container">
      <div className="header-container" >
          <div className="header-b">{headerText}</div>
        </div>
          <section className="careers">
            <div style={bachelorStyle}>
              <Bachelors />
            </div>
          </section>
        </div>
    </section>
  );
};

export default Education;
