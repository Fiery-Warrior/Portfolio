import React from "react";
import "./experience.css";
import ActionAreaCard from "./Moriarty";
import Career from "./Career";

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
          <Career />
          <br/>
          <div className="image">
            <ActionAreaCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
