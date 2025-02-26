import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-3 mt-4 mb-4 text-center">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
      </div>
      <div className="row g-4">
        {sections.map((section, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="p-4 border rounded shadow-sm h-100">
              <h4>
                <i
                  className={section.icon + " fs-5 me-2"}
                  aria-hidden="true"
                ></i>
                {section.title}
              </h4>
              {section.links.map((link, i) => (
                <div key={i}>
                  <a
                    href=""
                    style={{ textDecoration: "none", lineHeight: "2.5" }}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Account Opening",
    icon: "fa fa-plus-circle",
    links: [
      "Getting started",
      "Online",
      "Offline",
      "Charges",
      "Company, Partnership and HUF",
      "Non Resident Indian (NRI)",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa fa-user-circle",
    links: [
      "Login credentials",
      "Your Profile",
      "Account modification and segment addition",
      "CMR & DP ID",
      "Nomination",
      "Transfer and conversion of shares",
    ],
  },
  {
    title: "Trading and Markets",
    icon: "fa fa-bar-chart",
    links: [
      "Trading FAQs",
      "Kite",
      "Margins",
      "Product and order types",
      "Corporate actions",
      "Kite features",
    ],
  },
  {
    title: "Funds",
    icon: "fa fa-credit-card-alt",
    links: [
      "Fund withdrawal",
      "Adding funds",
      "Adding bank accounts",
      "eMandates",
    ],
  },
  {
    title: "Console",
    icon: "fa fa-circle-o-notch",
    links: [
      "IPO",
      "Portfolio",
      "Funds statement",
      "Profile",
      "Reports",
      "Referral program",
    ],
  },
  {
    title: "Coin",
    icon: "fa fa-circle-thin",
    links: [
      "Understanding mutual funds and Coin",
      "Coin app",
      "Coin web",
      "Transactions and reports",
      "National Pension Scheme (NPS)",
    ],
  },
];

export default CreateTicket;
