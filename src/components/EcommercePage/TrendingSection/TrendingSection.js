import React from "react";
import "./TrendingSection.css";

function TrendingSection() {
  return (
    <div>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="trending-blogs-section-heading mb-3">
                Trending Blogs
              </h1>
            </div>

            <div className="col-12 col-md-6">
              <div className="shadow mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-trending-blogs-1-img.png"
                  className="w-100"
                  alt=""
                />
                <div className="p-3">
                  <h1 className="trending-blogs-card-sub-title">
                    Fountain Pens
                  </h1>
                  <h1 className="trending-blogs-card-title">
                    Guide to Fountain Pen Nibs
                  </h1>
                  <p className="trending-blogs-card-description">
                    If you’re having trouble with a fountain pen whether it’s
                    scratchy, too dry, or too wet...
                  </p>
                  <a className="trending-blogs-card-link" href="">
                    READ MORE
                    <svg
                      width="16px"
                      height="16px"
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
            
            <div className="col-12 col-md-6">
              <div className="shadow mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-trending-blogs-2-img.png"
                  className="w-100"
                  alt=""
                />
                <div className="p-3">
                  <h1 className="trending-blogs-card-sub-title">
                    Productivity
                  </h1>
                  <h1 className="trending-blogs-card-title">
                    How to Craft a Better Todo List
                  </h1>
                  <p className="trending-blogs-card-description">
                    A well-crafted Todo list acts as a guiding light for your
                    day. It helps you overcome...
                  </p>
                  <a className="trending-blogs-card-link" href="">
                    READ MORE
                    <svg
                      width="16px"
                      height="16px"
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
      </div>
    </div>
  );
}

export default TrendingSection;
