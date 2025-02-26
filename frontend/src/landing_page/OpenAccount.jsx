import React from "react";
import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <div className="container text-center mt-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mt-3 fw">Go to DashBoard</h1>
          <p className="fs-5 text-muted">
            Get hands on experiance on how to buy and sell stocks. Interactive
            graphs for holdings and Orders placed
          </p>
          <Link to="/dashboard" className="btn btn-primary btn-lg px-4 mt-3">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
