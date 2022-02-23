import React from "react";

import Bannersection from "../components/BannerSection/Bannersection";
import ContactUsSection from "../components/EcommercePage/ContactUsSection/ContactUsSection";
import ExploreSection from "../components/EcommercePage/ExploreSection/ExploreSection";
import FooterSection from "../components/EcommercePage/FooterSection/FooterSection";
import OfferSection from "../components/EcommercePage/OfferSection/OfferSection";
import ProductSection from "../components/EcommercePage/ProductSection/ProductSection";
import ServicesSection from "../components/EcommercePage/ServicesSection/ServicesSection";
import TrendingSection from "../components/EcommercePage/TrendingSection/TrendingSection";
import Navbars from "../components/Navbars/Navbars";

function Ecommerce() {
  const bannerData = {
    imageLink:
      "https://www.ecommercetimes.com/wp-content/uploads/sites/5/2021/12/xl-2018-ecommerce-trends-1.jpg",
    bannerHeading: "E-commerce-Let's Get Virtual",
    bannerCaption: "Get anything with Ease",
    btnText: "View",
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
      <ServicesSection />
      <ProductSection />
      <OfferSection />
      <TrendingSection />
      <ExploreSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
}

export default Ecommerce;
