import React from "react";
import "./Products.css";

function Products() {
  return (
    <div>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="products-section-heading pb-2">Products</h1>
            </div>

            <div className="col-12 col-md-6">
              <div className="product-card vr-headset-bg-container d-flex flex-column justify-content-end p-3 mb-3">
                <h1 className="product-card-title">VR Headset</h1>
                <p className="product-card-price">Rs 75,000</p>
                <button className="buy-now-button">Buy Now</button>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="product-card touch-controller-bg-container d-flex flex-column justify-content-end p-3 mb-3">
                <h1 className="product-card-title">
                  VR Headset and Two Touch Controllers
                </h1>
                <p className="product-card-price">Rs 90,000</p>
                <button className="buy-now-button">Buy Now</button>
              </div>
            </div>
            
            <div className="col-12 d-flex flex-row justify-content-end">
              <button className="view-all-button">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
