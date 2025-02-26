import React from "react";
import PropTypes from "prop-types";

function Rightsection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <section className="container mt-5">
      <div className="row align-items-center">
        
        <div className="col-md-6 p-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mt-3">
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>


        <div className="col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

// Prop Type Validation
Rightsection.propTypes = {
  imageURL: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  learnMore: PropTypes.string.isRequired,
};

export default Rightsection;
