import React from "react";
import "./OpticsController.css";

function OpticsController() {
  return (
    <div>
      <div className="pt-3 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 order-1 order-md-2">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-optics-img.png"
                className="optics-and-controllers-section-image"
                alt=""
              />
            </div>

            <div className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center mb-5">
              <h1 className="optics-and-controllers-section-heading">
                Improved Optics
              </h1>
              <p className="optics-and-controllers-section-description">
                A virtual reality headset is a head-mounted device that provides
                virtual reality for the wearer.
              </p>
              <button className="custom-button">Read More</button>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-controllers-img.png"
                className="optics-and-controllers-section-image"
                alt=""
              />
            </div>

            <div className="col-12 col-md-6 d-flex flex-column justify-content-center mb-5">
              <h1 className="optics-and-controllers-section-heading">
                Two Touch Controllers
              </h1>
              <p className="optics-and-controllers-section-description">
                Your Oculus Touch controllers are a pair of tracked controllers
                that give you a hand.
              </p>
              <button className="custom-button">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpticsController;
