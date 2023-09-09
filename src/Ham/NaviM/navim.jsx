// import React, { useState } from "react";
// import Image from "react-bootstrap/Image";
// import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
// import { RiMailFill } from "react-icons/ri";
// import { AiFillHome } from "react-icons/ai";
// import { BsPersonFill } from "react-icons/bs";
// import { IoIosPaper } from "react-icons/io";
// import { GiTeacher, GiRotaryPhone } from "react-icons/gi";
// import "./navim.css";

// const NavbarSectionM = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div>
//       {/* Hamburger menu icon */}
//       <div
//         className="hamburger-menu-icon"
//         onClick={toggleMenu}
//         style={{
//           position: "fixed",
//           top: "20px",
//           right: "20px",
//           zIndex: "100",
//           cursor: "pointer",
//           color: "green",  // Make hamburger bar green
//           fontSize: "24px",
//         }}
//       >
//         &#9776;
//       </div>

//       {/* Side menu */}
//       {showMenu && (
//         <div
//           className="black-rectangle-m"
//           style={{
//             width: "20%",
//             height: "100%",
//             backgroundColor: "#040B14",
//             position: "fixed",
//             left: "0",
//             top: "0",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             transition: "transform 0.3s ease",  // Add smooth slide-out transition
//             transform: "translateX(0%)",  // Start from hidden position
//           }}
//         >
//           <div
//             className="chair-m"
//             style={{
//               width: "50%",
//               height: "18%",
//               borderRadius: "50%",
//               overflow: "hidden",
//               border: "6px solid #2c2f3f",
//               marginTop: "15%",
//             }}
//           >
//             <a
//               href="https://www.linkedin.com/in/keagan-bogart-786951209"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 src="/chair2.jpg"
//                 alt="Profile Image"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </a>
//           </div>

//           <h2
//             className="name-m"
//             style={{
//               marginTop: "10px",
//               marginBottom: "0",
//               color: "#ccc",
//               fontSize: "110%",
//               paddingBottom: "5%",
//             }}
//           >
//             Keagan Bogart
//           </h2>

//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               marginTop: "10px",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 marginBottom: "10px",
//               }}
//             >
//               <a
//                 href="https://www.linkedin.com/in/keagan-bogart-786951209"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   color: "#ccc",
//                   margin: "0 10px",
//                   transition: "color 0.3s ease",
//                   textDecoration: "none", // Remove underline
//                 }}
//                 className="icon-link-m"
//               >
//                 <FaLinkedin size={30} />
//               </a>
//               <a
//                 href="https://github.com/Fiery-Warrior"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   color: "#ccc",
//                   margin: "0 10px",
//                   transition: "color 0.3s ease",
//                   textDecoration: "none", // Remove underline
//                 }}
//                 className="icon-link-m"
//               >
//                 <FaGithubSquare size={30} />
//               </a>
//               <a
//                 href="mailto:keagan.j.bogart@gmail.com"
//                 style={{
//                   color: "#ccc",
//                   margin: "0 10px",
//                   transition: "color 0.3s ease",
//                   textDecoration: "none", // Remove underline
//                 }}
//                 className="icon-link-m"
//               >
//                 <RiMailFill size={30} />
//               </a>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 marginBottom: "10px",
//               }}
//             >
//               <a
//                 href="#home"
//                 style={{
//                   color: "#ccc",
//                   margin: "5px 0",
//                   transition: "color 0.3s ease",
//                   paddingTop: "20%",
//                   textDecoration: "none", // Remove underline
//                   fontSize: "18px",
//                 }}
//                 className="section-link-m"
//               >
//                 <AiFillHome /> Home
//               </a>

//               <a
//                 href="#about"
//                 style={{
//                   color: "#ccc",
//                   margin: "5px 0",
//                   transition: "color 0.3s ease",
//                   paddingTop: "10%",
//                   textDecoration: "none", // Remove underline
//                   fontSize: "18px",
//                 }}
//                 className="section-link"
//               >
//                 <BsPersonFill /> About
//               </a>

//               <a
//                 href="#experience"
//                 style={{
//                   color: "#ccc",
//                   margin: "5px 0",
//                   transition: "color 0.3s ease",
//                   paddingTop: "10%",
//                   textDecoration: "none", // Remove underline
//                   fontSize: "18px",
//                 }}
//                 className="section-link"
//               >
//                 <GiTeacher /> Experience
//               </a>

//               <a
//                 href="https://drive.google.com/file/d/1_dPJU4Snvlp7gi9mNe0kWtDGeRKrnCmr/view?usp=drive_link"
//                 target="_blank"
//                 style={{
//                   color: "#ccc",
//                   margin: "5px 0",
//                   transition: "color 0.3s ease",
//                   paddingTop: "10%",
//                   textDecoration: "none", // Removes underline
//                   fontSize: "18px",
//                 }}
//                 className="section-link"
//               >
//                 <IoIosPaper /> Resume
//               </a>

//               <a
//                 href="mailto:keagan.j.bogart@gmail.com"
//                 style={{
//                   color: "#ccc",
//                   margin: "5px 0",
//                   transition: "color 0.3s ease",
//                   paddingTop: "10%",
//                   textDecoration: "none", // Removes underline
//                   fontSize: "18px",
//                 }}
//                 className="section-link"
//               >
//                 <GiRotaryPhone /> Contact
//               </a>
//             </div>

//             {/* Footer */}
//             <div
//               className="nav-icons-m"
//               style={{
//                 position: "absolute",
//                 bottom: "0",
//                 paddingBottom: "8%",
//                 color: "#ccc",
//                 textAlign: "center",
//                 fontSize: "14px",
//                 marginBottom: "10px",
//               }}
//             >
//               {/* Created by Keagan Bogart */}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Rest of the code */}
//       {/* ... */}
//     </div>
//   );
// };

// export default NavbarSectionM;

import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
import Image from 'react-bootstrap/Image';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { IoIosPaper } from 'react-icons/io';
import { GiTeacher, GiRotaryPhone } from 'react-icons/gi';
import './navim.css';

const NavbarSectionM = () => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelOpen(!sidePanelOpen);
  };

  const handleAboutClick = () => {
    window.scrollBy(0, 50);
    closeNav();
  };

  const handleExperienceClick = () => {
    window.scrollBy(0, 200);
    closeNav();
  };

  const handleContactClick = () => {
    window.scrollBy(0, 300);
    closeNav();
  };

  const closeNav = () => {
    setSidePanelOpen(false);
  };

  return (
    <div>
      <div
        id="mySidepanel"
        style={{
          width: sidePanelOpen ? '145px' : '0',
          position: 'fixed',
          zIndex: 1,
          top: 0,
          left: 0,
          backgroundColor: 'rgb(4, 11, 20)',
          overflowX: 'hidden',
          transition: '0.5s',
          paddingTop: '60px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          height: '100vh',

        }}
      >
        {sidePanelOpen && (
          <button
            className="closebtn"
            onClick={closeNav}
            style={{
              position: 'absolute',
              top: '5px',
              right: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <RiCloseLine size={54} color="#3b6461" />
          </button>
        )}

        <div className="chair"
          style={{
            width: "50%",
            height: "18%",
            borderRadius: "50%",
            overflow: "hidden",
            border: "6px solid #2c2f3f",
            marginTop: "15%",
          }}
        >
          <a href="https://www.linkedin.com/in/keagan-bogart-786951209" target="_blank">
            <Image
              src="/chair2.avif"
              alt="Profile Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </a>
        </div>

        <h2 className="name" style={{ marginTop: "10px", marginLeft: "15%", marginBottom: "0", color: "#ccc", fontSize: "110%", paddingBottom: "5%" }}>
          Keagan Bogart
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "10px",
            marginLeft: "12%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <a
              href="https://www.linkedin.com/in/keagan-bogart-786951209"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ccc",
                margin: "0 10px",
                transition: "color 0.3s ease",
                textDecoration: "none", // Remove underline
              }}
              className="icon-link"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/Fiery-Warrior"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ccc",
                margin: "0 10px",
                transition: "color 0.3s ease",
                textDecoration: "none", // Remove underline
              }}
              className="icon-link"
            >
              <FaGithubSquare size={30} />
            </a>
            <a
              href="mailto:keagan.j.bogart@gmail.com"
              style={{
                color: "#ccc",
                margin: "0 10px",
                transition: "color 0.3s ease",
                textDecoration: "none", // Remove underline
              }}
              className="icon-link"
            >
              <RiMailFill size={30} />
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <a
              href="#home"
              style={{
                color: "#ccc",
                margin: "5px 0",
                transition: "color 0.3s ease",
                paddingTop: "20%",
                textDecoration: "none", // Remove underline
                fontSize: "18px",
              }}
              className="section-link"
            >
              <AiFillHome /> Home
            </a>

            <a
              href="#about"
              style={{
                color: "#ccc",
                margin: "5px 0",
                transition: "color 0.3s ease",
                paddingTop: "10%",
                textDecoration: "none", // Remove underline
                fontSize: "18px",
              }}
              className="section-link"
            >
              <BsPersonFill /> About
            </a>

            <a
              href="#experience"
              style={{
                color: "#ccc",
                margin: "5px 0",
                transition: "color 0.3s ease",
                paddingTop: "10%",
                textDecoration: "none", // Remove underline
                fontSize: "18px",
              }}
              className="section-link"
            >
              <GiTeacher /> Experience
            </a>

            <a
              href="https://drive.google.com/file/d/1_dPJU4Snvlp7gi9mNe0kWtDGeRKrnCmr/view?usp=drive_link"
              target="_blank"
              style={{
                color: "#ccc",
                margin: "5px 0",
                transition: "color 0.3s ease",
                paddingTop: "10%",
                textDecoration: "none", // Removes underline
                fontSize: "18px",
              }}
              className="section-link"
            >
              <IoIosPaper /> Resume
            </a>

            <a
              href="mailto:keagan.j.bogart@gmail.com"
              style={{
                color: "#ccc",
                margin: "5px 0",
                transition: "color 0.3s ease",
                paddingTop: "10%",
                textDecoration: "none", // Removes underline
                fontSize: "18px",
              }}
              className="section-link"
            >
              <GiRotaryPhone /> Contact
</a>
          </div>

          {/* Footer */}
          <div
            className="nav-icons"
            style={{
              position: "absolute",
              bottom: "0",
              paddingBottom: "8%",
              color: "#ccc",
              textAlign: "center",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            {/* Created by Keagan Bogart */}
          </div>
        </div>
      </div>

      <button
        className="openbtn"
        onClick={toggleSidePanel}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 100,
          cursor: 'pointer',
          color: 'green',
          fontSize: '0px',
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        }}
      >
        {sidePanelOpen ? (
          <RiCloseLine size={54} color="transparent" />
        ) : (
          <RiMenu2Line size={54} color="#3b6461" />
        )}
      </button>
    </div>
  );
};

export default NavbarSectionM;
