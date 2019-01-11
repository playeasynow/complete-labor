import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand" to="/complete-labor">
        Complete Labor Services
      </Link>
      <div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to="/complete-labor"
                className={
                  window.location.pathname === "/complete-labor" || window.location.pathname === "/complete-labor-about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
            </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/complete-labor-work"
                className={window.location.pathname === "/complete-labor-work" ? "nav-link active" : "nav-link"}
              >
                Previous Work
            </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/complete-labor-faq"
                className={window.location.pathname === "/complete-labor-faq" ? "nav-link active" : "nav-link"}
              >
                FAQ
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
