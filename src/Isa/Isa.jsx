import React, { useState, useEffect } from "react";
import "./ed.css";
import Typed from "react-typed";
// import Bachelors from "./Awards";
// import CollegeImages from "./Images";
// import Code from "./Code";
import Typography from '@mui/material/Typography';
import TypeDisplay from "./Typing/Type.jsx";

const Isa = () => {
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

  let headerText = "Independent Set Algorithm";
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
    height: "200vh",
    paddingLeft: "20%", /**Moves not just the heade 'Recent Experience' but also the cards */
    marginTop: '0',
  };



  const awardStyle = {
    marginBottom: "10px", // Add margin-bottom to create space
  };

  return (
    <section id="education" style={sectionStyle} className="education-section">
      <div className="ed-container">
        {/* <div className="ed-header">{headerText}</div> */}
        <div className="ed-header">      
        <h1 style={{color: "#252525"}}>How to use the {" "}
    <Typed
      strings={["Bipartite Matrix Calculator"]}
      typeSpeed={120}
      backSpeed={140}
      loop
      style={{ color: "grey", borderBottom: "3px solid #149ddd" }}
      //, textShadow: "2px 2px 4px #999999"
    />
</h1></div>
        <div className="content">
          <section className="ed-awards">
            <div style={awardStyle}>
            </div>
            {/* <Awards /> */}
          </section>
          <div className="ed-bachelors">
            <Typography gutterBottom variant="h5" component="div" sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '10px', '@media (max-width: 550px)': { fontSize: '13px', gap: '5px' } }}>
              <span>‣ Enter Number of Rows</span>
              <span>‣ Enter Number of Columns</span>
              <span>‣ Enter Row/Column data (0 or 1)</span>
    
            </Typography>


          </div>

          <div className='row-column-position'>
          <TypeDisplay />

          </div>




          <section className="languages">
            <div>
              <video width="620" height="440" controls>
                <source src="/Speed_Matrix.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
 
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jZiZs8cZAKU?si=n-XcMhcay-rvQ-dK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </section>
        </div>
      </div>
    </section>
  );
};

export default Isa;
