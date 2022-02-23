import React from "react";
import "./ServiceSection.css";

function ServiceSection() {
  return (
    <div>
      <div className="services-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="services-section-sub-heading mb-3">Services</h1>
              <h1 className="services-section-heading mb-3">What I do</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="shadow services-card mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-web-design-img.png"
                  className="services-card-image"
                />
                <h1 className="services-card-title mt-2">Static Websites</h1>
                <p className="services-card-description">
                  A Static Website contains Web pages with fixed content. Each
                  page is developed using HTML and CSS and displays the same
                  information to every visitor.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="services-card mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-web-development-img.png"
                  className="services-card-image"
                />
                <h1 className="services-card-title mt-2">
                  Responsive Web design
                </h1>
                <p className="services-card-description">
                  Responsive Web design is the approach that suggests that
                  design and development should respond to the user’s behaviour
                  and environment based on screen size, platform and
                  orientation.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="shadow services-card mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-customize-img.png"
                  className="services-card-image"
                />
                <h1 className="services-card-title mt-2">
                  Customisable Layouts
                </h1>
                <p className="services-card-description">
                  Customisable sites are templates with set layouts. You may be
                  able to change photos and colors, but your site will look
                  similar to many other sites due to the template. The same goes
                  for...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
