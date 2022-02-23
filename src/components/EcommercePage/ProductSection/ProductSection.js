import React from "react";
import "./ProductSection.css";

function ProductSection() {
  return (
    <div>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="products-section-heading mb-3">Our Products</h1>
            </div>

            <div className="col-12 col-md-6">
              <div className="products-card headphones-bg-container d-flex flex-column justify-content-end mb-3">
                <h1 className="products-card-title">Smart Headphones</h1>
                <p className="products-card-description">
                  Headphones with Deep Bass, sound,touch...
                </p>
                <div>
                  <button
                    type="button"
                    className="products-card-button"
                    data-toggle="modal"
                    data-target="#smartHeadphonesModel"
                  >
                    View Details
                  </button>
                  <div
                    className="modal fade"
                    id="smartHeadphonesModel"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog mt-5">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title products-card-modal-title"
                            id="examcard-modal-pleModalLabel"
                          >
                            Sony WH-1000XM4 Noise Cancelling Headphones
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p className="products-card-modal-description">
                            Get Best Smart Headphones Prices Online in India.
                            Select from the best range of Headphones from most
                            popular brands...
                          </p>
                          <ul className="products-card-modal-list">
                            <li className="products-card-modal-list-item">
                              <span className="products-card-modal-list-item-category">
                                Voice assistant:
                              </span>{" "}
                              Alexa, Google Assistant & Siri
                            </li>
                            <li className="products-card-modal-list-item">
                              <span className="products-card-modal-list-item-category">
                                Smart listening:
                              </span>{" "}
                              Ambient sound with the best noise cancellation
                            </li>
                            <li className="products-card-modal-list-item">
                              <span className="products-card-modal-list-item-category">
                                Long battery life:
                              </span>{" "}
                              A single charge provides 30 hours of playtime
                            </li>
                            <li className="products-card-modal-list-item">
                              <span className="products-card-modal-list-item-category">
                                Quick charging:
                              </span>{" "}
                              Charge for 10 min for 5 hours play back
                            </li>
                            <li className="products-card-modal-list-item">
                              <span className="products-card-modal-list-item-category">
                                Touch controls:
                              </span>{" "}
                              Change the track with your fingertip
                            </li>
                          </ul>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            data-dismiss="modal"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="products-card laptop-bg-container d-flex flex-column justify-content-end mb-3">
                <h1 className="products-card-title">Laptops</h1>
                <p className="products-card-description">
                  Explore vast selection of Laptops...
                </p>
                <div>
                  <button
                    type="button"
                    className="products-card-button"
                    data-toggle="modal"
                    data-target="#laptopsModal"
                  >
                    View Details
                  </button>
                  <div
                    className="modal fade"
                    id="laptopsModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog mt-5">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title products-card-modal-title"
                            id="exampleModalLabel"
                          >
                            Inspiron 14 5490 core i5 Laptop
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p className="products-description">
                            Get Best Laptop Prices Online in India. Select from
                            the best range of Laptops from most popular
                            brands...
                          </p>
                          <ul className="products-card-modal-list">
                            <li className="products-card-modal-list-item">
                              <span className="products-card-modal-list-item-category">
                                Performance:
                              </span>{" "}
                              Core i5 3rd Gen, 2.6 Ghz, 4 GB RAM
                            </li>
                            <li className="products-card-modal-list-item">
                              <span className="products-card-modal-list-item-category">
                                Storage:
                              </span>{" "}
                              500 GB HDD, SATA, 7200 RPM
                            </li>
                            <li className="products-card-modal-list-item">
                              <span className="products-card-modal-list-item-category">
                                Battery:
                              </span>{" "}
                              Li-Ion, 6 Cell
                            </li>
                            <li className="products-card-modal-list-item">
                              <span className="products-card-modal-list-item-category">
                                Design:
                              </span>{" "}
                              14.0 Inches, 1366 X 768 , 2.07 Kg, 34 Mm Thick
                            </li>
                          </ul>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            data-dismiss="modal"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 d-flex flex-row justify-content-end">
              <a className="products-section-link" href="">
                See All Offers
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right-short"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
