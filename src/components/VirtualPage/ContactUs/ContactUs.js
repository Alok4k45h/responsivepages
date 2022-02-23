import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div>
      <div className="vr-footer-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="text-center text-md-left">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-logo-img.png"
                  className="vr-logo"
                  alt=""
                />
                <div className="d-flex flex-row justify-content-center mt-3 mb-3">
                  <div className="vr-footer-section-icon-container">
                    <i className="fab fa-google icon"></i>
                  </div>
                  <div className="vr-footer-section-icon-container">
                    <i className="fab fa-twitter icon"></i>
                  </div>
                  <div className="vr-footer-section-icon-container">
                    <i className="fab fa-instagram icon"></i>
                  </div>
                  <div className="vr-footer-section-icon-container">
                    <i className="fa fa-linkedin-square icon"></i>
                  </div>
                </div>
                <p className="vr-footer-section-text">
                  Saran, Bihar, India-841207
                </p>
              </div>
            </div>

            <div className="col-6 col-md-4 mt-3">
              <h1 className="vr-footer-section-heading pb-2">Contact Us</h1>
              <ul className="vr-footer-section-list">
                <li className="mb-3">
                  <i className="fa fa-envelope icon mr-2"></i>
                  <span className="vr-footer-section-text">vr@gmail.com</span>
                </li>
                <li className="mb-3">
                  <i className="fas fa-phone-alt icon mr-2"></i>
                  <span className="vr-footer-section-text">1234506789</span>
                </li>
                <li className="mb-3">
                  <i className="fab fa-skype icon mr-2"></i>
                  <span className="vr-footer-section-text">Alok</span>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 mt-3">
              <h1 className="vr-footer-section-heading pb-2">
                Let Us Help You
              </h1>
              <ul className="vr-footer-section-list">
                <li className="vr-footer-section-text">
                  100% Purchase Protection
                </li>
                <li className="vr-footer-section-text">Your Account</li>
                <li className="vr-footer-section-text">Return Centre</li>
                <li className="vr-footer-section-text">Help</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <i className="fa fa-copyright icon" aria-hidden="true"></i>
            <span className="vr-footer-section-copyright">
              by me@alokkr.o7-Created with Bootstrap.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
