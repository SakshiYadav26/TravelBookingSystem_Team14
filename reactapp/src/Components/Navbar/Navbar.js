import React, { useState } from "react";
import "./navbar.css";
import {
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            Travelista
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">Hotels</Link>
            </li>
            <li>
              <Link to="/">Flights</Link>
            </li>
            <li>
              <Link to="/">Cars</Link>
            </li>
          </ul>
        </div>

        {/* 3rd login Register */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">Register</Link>
            </li>
            
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
