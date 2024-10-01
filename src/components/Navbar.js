import React from "react";
import style from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar({ isDarkMode, toggleDarkMode }) { // Accept props
  return (
    <header
      id="header"
      className={`fixed-top  ${style.headertransparent} ${style.header1}`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className={style.logo}>
          <h1>
            <img src="image.png" alt="nav" />
          </h1>
          <a href="index.html">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>
        </div>

        <nav id="navbar" className={style.navbar}>
          <ul>
            {/* <li>
              <a className={`nav-link scrollto ${style.active}`} href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/contact">
                Contact
              </a>
            </li> */}
            <li>
              <button
                style={{
                  width: "72px",
                  height: "75px",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: isDarkMode ? "white" : "black",
                  fontSize: "35px",
                }}
                onClick={toggleDarkMode}
                className="dark-mode-toggle"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
