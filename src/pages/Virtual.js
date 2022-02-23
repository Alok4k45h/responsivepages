import React from "react";
import Navbars from "../components/Navbars/Navbars";
import Bannersection from "../components/BannerSection/Bannersection";
import ContactImg from "../components/VirtualPage/ContactImg/ContactImg";
import ContactUs from "../components/VirtualPage/ContactUs/ContactUs";
import Features from "../components/VirtualPage/Features/Features";
import Kit from "../components/VirtualPage/Kit/Kit";
import OpticsController from "../components/VirtualPage/OpticsController/OpticsController";
import Products from "../components/VirtualPage/Products/Products";
import Trending from "../components/VirtualPage/Trending/Trending";

function Virtual() {
  const bannerData = {
    imageLink:
      "https://t3.ftcdn.net/jpg/01/72/11/58/360_F_172115817_tlQkVaXvDXYCXmu2sE7jBcYJAVbpxwXg.jpg",
    bannerHeading: "Simulating The Real World.",
    bannerCaption: "Virtually Anything is Possible",
    btnText: "Explore",
    btnOutlineText: "Get Started",
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
      <Features />
      <Trending />
      <OpticsController />
      <Kit />
      <Products />
      <ContactImg />
      <ContactUs />
    </div>
  );
}

export default Virtual;
