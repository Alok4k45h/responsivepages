import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div>
      <div className="about-me-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 order-1 order-md-2 d-flex flex-column justify-content-center">
              <h1 className="about-me-section-sub-heading mb-3">Facts</h1>
              <h1 className="about-me-section-heading mb-3">About me</h1>
              <img src="" className="about-me-section-image mb-3" alt="" />
              <p className="about-me-section-description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit luctus
                egestas bibendum dignissim placerat cras, sapien mollis eleifend
                nulla in magna facilisi suspendisse malesuada lacinia arcu
                purus. Mus potenti nisl ad purus elementum hendrerit rutrum,
                augue fermentum varius mollis metus per, leo ultricies aliquam
                bibendum risus nulla. Placerat aptent torquent elementum porta
                vulputate sem ultricies cum mollis id, accumsan diam mi lacinia
                cubilia pharetra volutpat sociosqu fermentum. Odio eu lacinia
                dapibus massa aptent quam mi sociosqu gravida netus, ligula
                integer ultricies mattis orci congue enim eleifend consequat
                class arcu, per vulputate vivamus sagittis pellentesque neque
                tellus risus id. Turpis pulvinar eros in imperdiet at inceptos
                quisque et, mus bibendum tellus pretium litora taciti euismod
                semper, convallis sem duis aliquet odio ultrices facilisis.
                Magna curabitur conubia tempor pulvinar lectus condimentum urna
                nostra dis nullam tellus dapibus risus posuere, dictum natoque
                libero sociis laoreet sem maecenas per turpis eros fermentum
                potenti. Nulla vehicula varius ultricies lacus porta vestibulum,
                vulputate interdum sodales gravida dignissim etiam, erat
                placerat fringilla eget mollis.
              </p>
            </div>

            <div className="col-12 col-md-6 order-2 order-md-1 d-none d-md-block">
              <img src="" className="about-me-section-image" alt=""/>
            </div>
          </div>
        </div>
      </div>

      
      <div className="skills-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="skills-section-sub-heading mb-3">Skills :</h1>
            </div>
            <div className="col-6 col-md-3">
              <div className="shadow skills-card text-center mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png"
                  className="skills-card-image"
                  alt=""
                />
                <h1 className="skills-card-title">HTML</h1>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="shadow skills-card text-center mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png"
                  className="skills-card-image"
                  alt=""
                />
                <h1 className="skills-card-title">CSS</h1>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="shadow skills-card text-center mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png"
                  className="skills-card-image"
                  alt=""
                />
                <h1 className="skills-card-title">Bootstrap</h1>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="shadow skills-card text-center mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png"
                  className="skills-card-image"
                  alt=""
                />
                <h1 className="skills-card-title">JS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
