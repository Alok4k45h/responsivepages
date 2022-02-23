import React from "react";
import "./OfferSection.css";

function OfferSection() {
  return (
    <div>
      <div className="pt-5 pb-5">
        <div className="container bg-container d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-12 col-md-2 order-1 order-md-2">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-offers-special-img.png"
                className="w-100"
                alt=""
              />
            </div>

            <div className="col-12 col-md-6 order-2 order-md-3 mb-2">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-offers-appliances-img.png"
                className="w-100"
                alt=""
              />
            </div>

            <div className="col-12 col-md-4 order-3 order-md-1 d-flex flex-column justify-content-center">
              <h1 className="offers-section-heading mb-2">
                BEST NEW YEAR SPECIAL OFFERS
              </h1>
              <p className="offers-section-description mb-2">
                Best time to buy. Save upto{" "}
                <span className="offer-in-percent">70% cash</span>
              </p>
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-offers-credit-card-img.png"
                className="offers-section-discount-image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
