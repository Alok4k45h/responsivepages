import React from "react";
import "./ServicesSection.css";

function ServicesSection() {
  return (
    <div className="pt-5">
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="services-ecom-section-heading">Our Services</h1>
              <p className="services-ecom-section-description">
                Most online stores offer lower prices. Online shopping makes
                price comparison simpler and quicker. It is very convenient to
                shop from where you are located. It saves you the cost of
                driving to stores, as well as parking fees.
              </p>
            </div>

            <div className="col-12 col-md-4">
              <div className="shadow p-3 text-center mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-delivery-img.png"
                  className="services-ecom-card-image"
                  alt=""
                />
                <h1 className="services-ecom-card-title">
                  Fast and Free Delivery
                </h1>
                <p className="services-ecom-card-description">
                  Fast, free, and convenient delivery choices on millions of
                  items.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="shadow p-3 text-center mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-money-back-img.png"
                  className="services-ecom-card-image"
                  alt=""
                />
                <h1 className="services-card-title">
                  100% Money back guarantee
                </h1>
                <p className="services-card-description">
                  This is probably the most popular guarantee in the world.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="shadow p-3 text-center mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-24-by-7-support-img.png"
                  className="services-ecom-card-image"
                  alt=""
                />
                <h1 className="services-ecom-card-title">
                  Online Support 24/7
                </h1>
                <p className="services-ecom-card-description">
                  Our Online Support will provide you with many useful
                  functions, valuable information, tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
