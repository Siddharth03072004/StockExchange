import React from "react";

function Footer() {
  return (
    <footer className="bg-light mt-5 pt-4">
      <div className="container border-top">
        <div className="row mt-4">
          
          <div className="col-md-3 text-center text-md-start">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              className="img-fluid w-75"
            />
            <p className="mt-2 text-muted">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          
          <div className="col-md-3">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Referral programme
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Zerodha.tech
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Press & media
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Zerodha cares (CSR)
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Support portal
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  List of charges
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Downloads & resources
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Open an account
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Fund transfer
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  60 day challenge
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mt-4 text-muted small">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
