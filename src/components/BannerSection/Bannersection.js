import React from "react";
import "./Bannersection.css";

function Bannersection(props) {
  return (
    <div
      className="banner-sections-bg-container d-flex justify-content-center flex-column"
      style={{ backgroundImage: `url(${props.imageLink})` }}
    >
      <div className="text-center">
        <h1 className="banner-heading mb-3">{props.bannerHeading}</h1>
        <p className="banner-caption mb-4">{props.bannerCaption}</p>
        <button className="custom-buttons">{props.btnText}</button>
        <button className="custom-outline-buttons">
          {props.btnOutlineText}
        </button>
      </div>
    </div>
  );
}

export default Bannersection;
