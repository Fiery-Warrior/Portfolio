import React, { useState, useEffect, useRef } from "react";
import "./ed.css";
import Typed from "react-typed";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Theorem from "./Theorem";


const Isa = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isTypedComplete, setIsTypedComplete] = useState(false);
  const typedRef = useRef(null);
  const contentRef = useRef(null);
  const [showBorder, setShowBorder] = useState(false);


  


  const handleTypedComplete = () => {
    setIsTypedComplete(true);
    setShowBorder(true); // Set showBorder to true after typing completion
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      marginLeft: '-100px',
    },
  }));

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the component is visible
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the component is visible, start the typing effect
          setIsTypedComplete(false); // Reset the typing effect
          observer.unobserve(entry.target);
        }
      });
    }, options);
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
  
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
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
    marginBottom: "10px", // Adds margin-bottom to create space
  };

  const matrix = [
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0]
  ];

  return (
    <section id="education" style={sectionStyle} className="education-section">
      <div className="ed-container">
        {/* <div className="ed-header">{headerText}</div> */}
        <div className="ed-header" ref={contentRef}>      
        <h1 style={{color: "#252525"}}>How to use the {" "}
        {!isTypedComplete ? (
            <Typed
              strings={["Bipartite Matrix Calculator"]}
              typeSpeed={120}
              backSpeed={140}
              loop={false}
              style={{
                color: "grey",
                borderBottom: "3px solid #149ddd",
              }}
              onComplete={handleTypedComplete}
            />
          ) : (
            <span style={{ color: "grey", borderBottom: "3px solid #149ddd",}}>Bipartite Matrix Calculator:</span>
          )}
          {showBorder && ( // Conditionally render the border underline
          <span style={{ borderBottom: "3px solid #149ddd" }} />
        )}</h1></div>
        <div className="content">
          <section className="ed-awards">
            <div style={awardStyle}>
            </div>
            {/* <Awards /> */}
          </section>
          <div className="ed-bachelors">
            <Typography gutterBottom variant="h5" component="div" sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '30px', '@media (max-width: 550px)': { fontSize: '13px', gap: '5px' } }}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <em>{"Type Number of Rows in the Matrix: "}<b>4</b>{" and press "}</em><kbd>Enter</kbd>
                </React.Fragment>
              }
              placement="right" // Set the placement to right
              arrow // Enable arrow for the tooltip
            >
        <span>‣ Enter <span style={{borderBottom: '3px solid #25a93aa1'}}>Number of Rows</span></span>

        {/* <span>
        ‣ Enter{" "}
        {!isTypedComplete ? (
          <span style={{ borderBottom: '3px solid transparent' }}>
            Number of Rows
          </span>
        ) : (
          <span style={{ borderBottom: showBorder ? '3px solid rgb(20, 157, 221)' : 'none' }}>
            Number of Rows
          </span>
        )}
      </span> */}





      </HtmlTooltip>
              {/* <span>‣ Enter Number of Columns</span> */}
        <HtmlTooltip
              title={
                <React.Fragment>
                  <em>{"Type Number of Columns in the Matrix: "}<b>5</b>{" and press "}</em><kbd>Enter</kbd>
                </React.Fragment>
              }
              placement="right" // Set the placement to right
              arrow // Enable arrow for the tooltip
            >
        <span>‣ Enter <span style={{borderBottom: '3px solid #25a93aa1'}}>Number of Columns</span></span>

      </HtmlTooltip>
              {/* <span>‣ Enter <span style={{borderBottom: '3px solid rgb(20, 157, 221)'}}>Number of Columns</span></span> */}

              <HtmlTooltip
              title={
                <React.Fragment>
                  <em>{"Type Each 0 or 1 for the Bipartite Matrix: "}
                  <b><table>
                    {matrix.map((row, i) => (
                      <tr key={i}>
                        {row.map((num, j) => (
                          <td key={j}>{num}</td>
                        ))}
                      </tr>
                    ))}
                    </table></b>{" and press "}</em><kbd>Enter</kbd><em>{" after each row"}</em>
                </React.Fragment>
              }
              placement="right" // Set the placement to right
              arrow // Enable arrow for the tooltip
            >
        <span>‣ Enter <span style={{borderBottom: '3px solid #25a93aa1'}}>Rows and Columns</span></span>
      </HtmlTooltip>
              {/* <span>‣ Enter <span style={{borderBottom: '3px solid rgb(20, 157, 221)'}}>Rows and Columns</span></span> */}
              <span>‣ View Calculated:
                  <Typography gutterBottom variant="p" component="div" sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', padding: '15px',fontSize: '20px', gap: '10px', '@media (max-width: 550px)': { fontSize: '8px', gap: '3px' } }}>
                    <span>‣ Max Matchings</span>
                    <span>‣ Min Coverings</span>
                    <span>‣ Updated ISA Matrix</span>
                </Typography>
              </span>
            </Typography>
          </div>
          <section className="languages">
            <div>
              <video width="620" height="440" controls>
                <source src="/newCalc.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="theorem-rule">
                <Theorem/>
              </div>
            </div>
 
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jZiZs8cZAKU?si=n-XcMhcay-rvQ-dK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </section>
        </div>
      </div>
    </section>
  );
};

export default Isa;






