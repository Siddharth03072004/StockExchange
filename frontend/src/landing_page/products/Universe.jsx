import React from "react";

function Universe() {
  return (
    <section className="container mt-5">
      
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

     
      <div className="row text-center mt-4">
        {[
          {
            imgSrc: "media/images/zerodhaFundhouse.png",
            imgAlt: "Zerodha Fund House",
            description:
              "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
            width: "60%",
          },
          {
            imgSrc: "media/images/streakLogo.png",
            imgAlt: "Streak Logo",
            description:
              "Systematic trading platform that allows you to create and backtest strategies without coding.",
            width: "50%",
          },
          {
            imgSrc: "media/images/sensibullLogo.svg",
            imgAlt: "Sensibull Logo",
            description:
              "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
            width: "70%",
          },
          {
            imgSrc: "media/images/smallcaseLogo.png",
            imgAlt: "Smallcase Logo",
            description:
              "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
            width: "50%",
          },
          {
            imgSrc: "media/images/goldenpiLogo.png",
            imgAlt: "GoldenPi Logo",
            description:
              "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
            width: "40%",
          },
          {
            imgSrc: "media/images/dittoLogo.png",
            imgAlt: "Ditto Logo",
            description:
              "Personalized advice on life and health insurance. No spam and no mis-selling.",
            width: "30%",
          },
        ].map((platform, index) => (
          <div key={index} className="col-md-4 col-sm-6 p-3">
            <img
              src={platform.imgSrc}
              alt={platform.imgAlt}
              className="mb-3"
              style={{ width: platform.width }}
            />
            <p className="text-muted">{platform.description}</p>
          </div>
        ))}
      </div>

     
      <div className="text-center mt-4">
        <button className="btn btn-primary fs-5 px-4">Signup Now</button>
      </div>
    </section>
  );
}

export default Universe;
