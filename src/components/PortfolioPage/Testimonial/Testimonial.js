import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div>
      <div className="testimonials-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="testimonials-section-sub-heading mb-3">
                Testimonials
              </h1>
              <h1 className="testimonials-section-heading mb-3">
                Our Members Says
              </h1>
            </div>
            <div className="col-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testimonials-card text-center">
                      <img
                        src=""
                        className="testimonials-card-image"
                        alt="..."
                      />
                      <p className="testimonials-card-description">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit nostra, sagittis himenaeos ultrices fringilla dapibus mus a blandit malesuada, aliquet et fames laoreet sem risus sociis.
                      </p>
                      <p className="testimonials-card-person-name">
                        - Lorem Ipsum dolor sit 
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonials-card text-center">
                      <img
                        src=""
                        className="testimonials-card-image"
                        alt="..."
                      />
                      <p className="testimonials-card-description">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit nostra, sagittis himenaeos ultrices fringilla dapibus mus a blandit malesuada, aliquet et fames laoreet sem risus sociis.
                      </p>
                      <p className="testimonials-card-person-name">
                        - Lorem ipsum dolor sit
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonials-card text-center">
                      <img
                        src=""
                        className="testimonials-card-image"
                        alt="..."
                      />
                      <p className="testimonials-card-description">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit nostra, sagittis himenaeos ultrices fringilla dapibus mus a blandit malesuada, aliquet et fames laoreet sem risus sociis.
                      </p>
                      <p className="testimonials-card-person-name">
                        - Lorem ipsum dolor sit
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-right">
                  <a
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
