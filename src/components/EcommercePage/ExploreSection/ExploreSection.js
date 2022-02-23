import React from "react";
import "./ExploreSection.css";

function ExploreSection() {
  return (
    <div>
      <div className="explore-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="explore-section-heading mb-3">
                Explore Deals & Offers
              </h1>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="shadow explore-card p-3 mb-3">
                <h1 className="explore-card-title">
                  Up to 80% Off | Electronics & Gadgets
                </h1>
                <div className="d-flex flex-row">
                  <div className="text-center">
                    <div className="explore-card-image-container">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-mamba-watch-img.png"
                        className="explore-card-image"
                        alt=""
                      />
                    </div>
                    <h1 className="explore-card-product-title">Smart Watch</h1>
                  </div>
                  <div className="text-center">
                    <div className="explore-card-image-container">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-camera-img.png"
                        className="explore-card-image"
                        alt=""
                      />
                    </div>
                    <h1 className="explore-card-product-title">Cameras</h1>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="text-center">
                    <div className="explore-card-image-container">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-sport-and-fitness-img.png"
                        className="explore-card-image"
                        alt=""
                      />
                    </div>
                    <h1 className="explore-card-product-title">
                      Sports & Fitness
                    </h1>
                  </div>
                  <div className="text-center">
                    <div className="explore-card-image-container">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-ear-phones-pink-img.png"
                        className="explore-card-image"
                        alt=""
                      />
                    </div>
                    <h1 className="explore-card-product-title">Earphones</h1>
                  </div>
                </div>
                <a className="explore-card-link" href="">
                  See All Deals
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-right-short"
                    fill="#ff9f00"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="shadow explore-card p-3 mb-3">
                <h1 className="explore-card-title">
                  Festive Offers TVs & appliances
                </h1>
                <div className="explore-card-image-container">
                  <img
                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-tv-img.png"
                    className="explore-card-image"
                    alt=""
                  />
                </div>
                <a className="explore-card-link" href="">
                  See All Deals
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-right-short"
                    fill="#ff9f00"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="shadow explore-card p-3 mb-3">
                <h1 className="explore-card-title mt-3">
                  Under Rs 4000 | Friendly Accessories
                </h1>
                <div className="d-flex flex-row">
                  <div className="text-center">
                    <div className="explore-card-image-container">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-tablet-device-img.png"
                        className="explore-card-image"
                        alt=""
                      />
                    </div>
                    <h1 className="explore-card-product-title">Tablet</h1>
                  </div>
                  <div className="text-center">
                    <div className="explore-card-image-container">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-joy-stick-img.png"
                        className="explore-card-image"
                        alt=""
                      />
                    </div>
                    <h1 className="explore-card-product-title">PlayStation</h1>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="text-center">
                    <div className="explore-card-image-container">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-speakers-big-img.png"
                        className="explore-card-image"
                        alt=""
                      />
                    </div>
                    <h1 className="explore-card-product-title">Speakers</h1>
                  </div>
                  <div className="text-center">
                    <div className="explore-card-image-container">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-explore-vr-set-img.png"
                        className="explore-card-image"
                        alt=""
                      />
                    </div>
                    <h1 className="explore-card-product-title">
                      Virtual Reality Set
                    </h1>
                  </div>
                </div>
                <a className="explore-card-link" href="">
                  See All Deals
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-right-short"
                    fill="#ff9f00"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
