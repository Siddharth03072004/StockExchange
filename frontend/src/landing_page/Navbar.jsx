import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            alt="Zerodha Logo"
            className="img-fluid"
            style={{ width: "140px" }} // Adjust size if needed
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-lg-4 gap-2">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/dashboard">
                DashBoard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
