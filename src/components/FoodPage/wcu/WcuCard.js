import React from "react";

function WcuCard(props) {
  return (
    <div className="col-12 col-md-4">
      <div className="wcu-card p-3 mb-3">
        <img src={props.imgLink} className="wcu-card-image" alt="" />
        <h1 className="wcu-card-title mt-3">{props.WcuTitle}</h1>
        <p className="wcu-card-description">{props.WcuDescription}</p>
      </div>
    </div>
  );
}

export default WcuCard;
