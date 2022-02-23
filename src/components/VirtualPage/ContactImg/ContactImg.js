import React from "react";
import "./ContactImg.css";

function ContactImg() {
  return (
    <div>
      <div className="contact-us-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 order-1 order-md-2 d-flex flex-column justify-content-center text-center">
              <h1 className="contact-us-section-heading pb-2">
                Virtually Anything is Possible
              </h1>
              <div className="d-md-none">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-set-img.png"
                  className="contact-us-section-image"
                  alt=""
                />
              </div>
              <div>
                <button className="btn btn-outline-dark">CONTACT US</button>
              </div>
            </div>

            <div className="col-12 col-md-5 order-2 order-md-1 d-none d-md-block ">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-set-img.png"
                className="contact-us-section-image p-5"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactImg;
