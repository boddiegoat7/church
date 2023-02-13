import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/church" className="navbar-logo" onClick={closeMobileMenu}>
            The Divine Church
            <i class="fab fa-typo3" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/church" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/prayer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Prayer
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/minestry"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Minestry
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact-us"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact Us</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
