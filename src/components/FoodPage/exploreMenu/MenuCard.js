import React from "react";

function MenuCard(props) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="shadow menu-item-card p-3 mb-3">
        <img src={props.imgLink} className="menu-item-image w-100" alt="" />
        <h1 className="menu-card-title">{props.MenuTitle}</h1>
        <a href="" className="menu-item-link">
          View All
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right-short"
            fill="#d0b200"
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
  );
}

export default MenuCard;
