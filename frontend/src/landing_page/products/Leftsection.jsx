import React from "react";
import PropTypes from "prop-types";

function Leftsection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="container mt-5">
      <div className="row align-items-center">
       
        <div className="col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        
        <div className="col-md-6 p-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>

        
          <div className="mt-3">
            <a href={tryDemo} className="me-4 text-decoration-none">
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

        
          <div className="mt-4">
            <a href={googlePlay} className="me-3">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Prop Type Validation
Leftsection.propTypes = {
  imageURL: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  tryDemo: PropTypes.string.isRequired,
  learnMore: PropTypes.string.isRequired,
  googlePlay: PropTypes.string.isRequired,
  appStore: PropTypes.string.isRequired,
};

export default Leftsection;
