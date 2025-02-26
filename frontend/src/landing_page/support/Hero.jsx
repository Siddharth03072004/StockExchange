import React from "react";

function Hero() {
  return (
    <section className="support-hero">
      <div className="support-header">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>
      <div className="support-content">
        <div className="support-search">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. How do I activate F&O, why is my order getting rejected"
          />
          <div className="support-links">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>
        <div className="support-featured">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="#">Rights Entitlements listing in January 2025</a>
            </li>
            <li>
              <a href="#">Surveillance measure on scrips - January 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
