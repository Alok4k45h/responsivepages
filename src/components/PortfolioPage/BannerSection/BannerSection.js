import React from "react";
import "./BannerSection.css";

function BannerSection() {
  return (
    <div>
      <div className="banner-section-bg-container d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 order-1 order-md-2">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-banner-img.png"
                className="banner-section-image"
                alt=""
              />
            </div>
            
            <div className="col-12 col-md-7 order-2 order-md-1 d-flex flex-column justify-content-center">
              <h1 className="banner-section-heading mb-3">
                Hey, I am <span className="person-name">Alok</span>
              </h1>
              <p className="banner-section-description mb-3">
                I'm MERN Stack Developer 
              </p>
              <button className="custom-button">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
