import React from "react";

import Bannersection from "../components/BannerSection/Bannersection";
import DileveryPayment from "../components/FoodPage/dileveryPayment/DileveryPayment";
import ExploreMenu from "../components/FoodPage/exploreMenu/ExploreMenu";
import FollowUS from "../components/FoodPage/followUs/FollowUS";
import HealthyFood from "../components/FoodPage/healthyFood/HealthyFood";
import ThankingCustomer from "../components/FoodPage/thankingCustomer/ThankingCustomer";
import Wcu from "../components/FoodPage/wcu/Wcu";
import Footer from "../components/FoodPage/footer/Footer";
import Navbars from "../components/Navbars/Navbars";

import "../components/FoodPage/wcu/Wcu.css";
import "../components/FoodPage/exploreMenu/ExploreMenu.css";
import "../components/FoodPage/healthyFood/HealthyFood.css";
import "../components/FoodPage/dileveryPayment/DileveryPayment.css";
import "../components/FoodPage/thankingCustomer/ThankingCustomer.css";
import "../components/FoodPage/followUs/FollowUS.css";
import "../components/FoodPage/footer/Footer.css";

function Food() {
  const bannerData = {
    imageLink:
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png",
    bannerHeading: "Get Delicious Food Anytime",
    bannerCaption: "Eat Smart & Health",
    btnText: "View Menu",
    btnOutlineText: "Order Now",
  };

  return (
    <div>
      <Navbars />
      <Bannersection
        imageLink={bannerData.imageLink}
        bannerHeading={bannerData.bannerHeading}
        bannerCaption={bannerData.bannerCaption}
        btnText={bannerData.btnText}
        btnOutlineText={bannerData.btnOutlineText}
      />
      <Wcu />
      <ExploreMenu />
      <HealthyFood />
      <DileveryPayment />
      <ThankingCustomer />
      <FollowUS />
      <Footer />
    </div>
  );
}

export default Food;
