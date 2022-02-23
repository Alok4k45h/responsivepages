import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="pt-5">
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="vr-features-section-heading">Features</h1>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 mb-3 text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/easy-connect-img.png"
                  className="vr-features-card-image"
                  alt=""
                />
                <h1 className="vr-features-card-title mt-3">Easy to connect</h1>
                <p className="vr-features-card-description">
                  Instead of viewing a screen in front of them, users are
                  immersed and able to interact with 3D worlds.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 mb-3 text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-capability-img.png"
                  className="vr-features-card-image"
                  alt=""
                />
                <h1 className="vr-features-card-title mt-3">VR Capability</h1>
                <p className="vr-features-card-description">
                  Virtual reality (VR) can create an environment similar to or
                  completely different from the real world.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 mb-3 text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/video-games-img.png"
                  className="vr-features-card-image"
                  alt=""
                />
                <h1 className="vr-features-card-title mt-3">Video games</h1>
                <p className="vr-features-card-description">
                  Ability to recognize hand motion, evolving interactions and
                  gameplay in VR.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 mb-3 text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/interaction-img.png"
                  className="vr-features-card-image"
                  alt=""
                />
                <h1 className="vr-features-card-title mt-3">Interaction</h1>
                <p className="vr-features-card-description">
                  Interaction refers to the{" "}
                  <span className="interaction">natural interaction</span>{" "}
                  between the user and the virtual scene.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 mb-3 text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/easy-play-img.png"
                  className="vr-features-card-image"
                  alt=""
                />
                <h1 className="vr-features-card-title mt-3">Easy to play</h1>
                <p className="vr-features-card-description">
                  In 360-degree video, the locations of viewers are fixed,
                  viewers are limited to the angles captured by the cameras.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 mb-3 text-center">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/experience-img.png"
                  className="vr-features-card-image"
                  alt=""
                />
                <h1 className="vr-features-card-title mt-3">
                  Awesome Experience
                </h1>
                <p className="vr-features-card-description">
                  Virtual reality (VR) is a simulated experience that can be
                  similar to or completely different from the real world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
