import React from "react";
import MenuCard from "./MenuCard";
import MenuData from "./MenuData";

function ExploreMenu() {
  return (
    <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="menu-section-heading">Explore Menu</h1>
          </div>

          {MenuData.map((data) => (
            <MenuCard imgLink={data.imgLink} MenuTitle={data.MenuTitle} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreMenu;
