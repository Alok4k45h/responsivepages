import React from "react";
import "./Kit.css";

function Kit() {
  return (
    <div>
      <div className="vr-kit-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="vr-kit-section-heading">Included VR Kit</h1>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 mb-3 text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-kit-1-img.png"
                  className="vr-kit-card-image"
                  alt=""
                />
                <h1 className="vr-kit-card-title mt-3">
                  Two Touch Controllers
                </h1>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 mb-3 text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-kit-2-img.png"
                  className="vr-kit-card-image"
                  alt=""
                />
                <h1 className="vr-kit-card-title mt-3">VR Headset</h1>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 mb-3 text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-kit-3-img.png"
                  className="vr-kit-card-image"
                  alt=""
                />
                <h1 className="vr-kit-card-title mt-3">Charging Cable</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kit;
