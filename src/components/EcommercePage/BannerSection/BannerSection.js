import React from "react";
import "./BannerSection.css";

function BannerSection() {
  return (
    <div className="Banner-container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide ecommerce-carousel-container"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-1-img.png"
              className="d-none d-md-inline w-100 h-100 ca"
              alt="..."
            />
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-1-sm-img.png"
              className="d-inline d-md-none w-100 h-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-2-img.png"
              className="d-none d-md-inline w-100 h-100"
              alt="..."
            />
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-2-sm-img.png"
              className="d-inline d-md-none w-100 h-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-3-img.png"
              className="d-none d-md-inline w-100 h-100"
              alt="..."
            />
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-carousel-3-sm-img.png"
              className="d-inline d-md-none w-100 h-100"
              alt="..."
            />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default BannerSection;
