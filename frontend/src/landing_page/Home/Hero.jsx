import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <img
            src="media/images/homeHero.png"
            alt="Hero image"
            className="img-fluid mb-4"
          />
          <h1 className="fw-bold mt-4">Invest in everything</h1>
          <p className="fs-5 text-muted">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <Link to="/dashboard" className="btn btn-primary btn-lg px-4 mt-3">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
