import React from "react";
import "./FooterSection.css";

function FooterSection() {
  return (
    <div>
      <div className="footer-section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mb-3">
              <div className="d-flex flex-row">
                <img src="" className="footer-section-image" alt="" />
                <div className="ml-3">
                  <h1 className="footer-section-sub-heading">Alok Kumar</h1>
                  <p className="footer-section-text">Mern-Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <h1 className="footer-section-sub-heading">Phone No.</h1>
              <div>
                <i className="fas fa-phone-alt icon"></i>
                <span className="footer-section-text ml-2">0123456789</span>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <h1 className="footer-section-sub-heading">E-mail</h1>
              <div>
                <i className="fas fa-envelope icon"></i>
                <span className="footer-section-text ml-2">123@gmail.com</span>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <h1 className="footer-section-sub-heading">Address</h1>
              <div>
                <i className="fas fa-map-marked-alt icon"></i>
                <span className="footer-section-text ml-2">
                  Saran, Bihar, India-841207
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section-copyright-container">
          <i className="fa fa-copyright icon" aria-hidden="true"></i>
          <span className="footer-section-text">
            by me@alokkr.o7 Created with Bootstrap.
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
