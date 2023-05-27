import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (section) => {
    let position = 0;

    if (section === 'about') {
      position = window.innerHeight * 0.1;
    } else if (section === 'experience') {
      position = window.innerHeight * 0.35;
    } else if (section === 'contact') {
      position = window.innerHeight * 0.75;
    }

    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });

    setIsOpen(false);
  };

  return (
    <div>
      <div className={`menu ${isOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="options">
          <div className="option" onClick={() => handleOptionClick('about')}>
            About
          </div>
          <div className="option" onClick={() => handleOptionClick('experience')}>
            Experience
          </div>
          <div className="option" onClick={() => handleOptionClick('contact')}>
            Contact
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
