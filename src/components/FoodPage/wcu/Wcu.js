import React from "react";
import WcuCard from "./WcuCard";
import WcuData from "./WcuData";

function Wcu() {
  return (
    <div className="wcu-section pt-5 pb-5" id="wcuSection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="wcu-section-heading">Why Choose Us?</h1>
            <p className="wcu-section-description">
              We use both original recipes and classic versions of famous food
              items.
            </p>
          </div>

          {WcuData.map((data) => (
            <WcuCard
              imgLink={data.imgLink}
              WcuTitle={data.WcuTitle}
              WcuDescription={data.WcuDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wcu;
