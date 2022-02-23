import React from "react";
import "./FooterSection.css";

function FooterSection() {
  return (
    <div>
      <div className="ecommerce-footer-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center text-md-left">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png"
                  className="ecommerce-logo"
                  alt=""
                />
                <div className="d-flex flex-row justify-content-center mt-3 mb-3">
                  <div className="ecommerce-footer-section-icon-container">
                    <i className="fab fa-google icon"></i>
                  </div>
                  <div className="ecommerce-footer-section-icon-container">
                    <i className="fab fa-twitter icon"></i>
                  </div>
                  <div className="ecommerce-footer-section-icon-container">
                    <i className="fab fa-instagram icon"></i>
                  </div>
                  <div className="ecommerce-footer-section-icon-container">
                    <i className="fa fa-linkedin-square icon"></i>
                  </div>
                </div>
                <p className="ecommerce-footer-section-address">
                  Saran, Bihar, India-841207
                </p>
              </div>
            </div>

            <div className="col-6 col-lg-3 mt-3">
              <h1 className="ecommerce-footer-section-heading mb-3">
                Get to know us
              </h1>
              <ul className="ecommerce-footer-section-list">
                <li className="ecommerce-footer-section-list-item">About us</li>
                <li className="ecommerce-footer-section-list-item">Career</li>
                <li className="ecommerce-footer-section-list-item">
                  Press Releases
                </li>
                <li className="ecommerce-footer-section-list-item">
                  Gift a smile
                </li>
              </ul>
            </div>

            <div className="col-6 col-lg-3 mt-3">
              <h1 className="ecommerce-footer-section-heading mb-3">
                Contact with Us
              </h1>
              <ul className="ecommerce-footer-section-list">
                <li className="ecommerce-footer-section-list-item">Facebook</li>
                <li className="ecommerce-footer-section-list-item">Twitter</li>
                <li className="ecommerce-footer-section-list-item">
                  Instagram
                </li>
              </ul>
            </div>

            <div className="col-6 col-lg-3 mt-3">
              <h1 className="ecommerce-footer-section-heading mb-3">
                Let Us Help You
              </h1>
              <ul className="ecommerce-footer-section-list">
                <li className="ecommerce-footer-section-list-item">
                  100% Purchase Protection
                </li>
                <li className="ecommerce-footer-section-list-item">
                  Your Account
                </li>
                <li className="ecommerce-footer-section-list-item">
                  Return Centre
                </li>
                <li className="ecommerce-footer-section-list-item">Help</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <i className="fa fa-copyright icon" aria-hidden="true"></i>
            <span className="ecommerce-footer-section-copyright">
              by me@alokkr.o7-Created with Bootstrap.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
