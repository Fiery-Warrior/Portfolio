import React from "react";
import "./experience.css";
import ActionAreaCard from "./Moriarty";
import Career from "./USAAimage";
import TA from "./TA";
import Langs from "./Langs";

const Experience = () => {
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
      }}
    >
      <div className="container">
        <div className="header">Recent Experience</div>
        <div className="content">
          <section className="careers">
         <Career />
          <br/>
          <TA />
          <br/>
          </section>
          <div className="mor">
            <ActionAreaCard />
          </div>
          <section className="languages">
          <Langs/>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Experience;
