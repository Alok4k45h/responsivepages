import React from "react";
import "./ProjectSection.css";

function ProjectSection() {
  return (
    <div>
      <div className="projects-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="projects-section-sub-heading mb-3">Portfolio</h1>
              <h1 className="projects-section-heading">Projects I have done</h1>
            </div>
            <div className="col-12 col-md-6">
              <div className="projects-card mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-1-img.png"
                  className="projects-card-image"
                />
                <div className="p-3">
                  <h1 className="projects-card-sub-title mb-3">Web design</h1>
                  <h1 className="projects-card-title">Lorem Ipsum</h1>
                  <p className="projects-card-description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    nostra, sagittis himenaeos ultrices fringilla dapibus mus a
                    blandit malesuada, aliquet et fames laoreet sem risus
                    sociis...
                  </p>
                  <a className="projects-card-link" href="">
                    Read More
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="#cced00"
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
              <div className="projects-card mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-2-img.png"
                  className="projects-card-image"
                />
                <div className="p-3">
                  <h1 className="projects-card-sub-title mb-3">Web design</h1>
                  <h1 className="projects-card-title">Lorem Ipsum</h1>
                  <p className="projects-card-description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    nostra, sagittis himenaeos ultrices fringilla dapibus mus a
                    blandit malesuada, aliquet et fames laoreet sem risus
                    sociis...
                  </p>
                  <a className="projects-card-link" href="">
                    Read More
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="#cced00"
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

export default ProjectSection;
