import React from "react";
import Navbars from "../components/Navbars/Navbars";
import AboutSection from "../components/PortfolioPage/AboutSection/AboutSection";
import BannerSection from "../components/PortfolioPage/BannerSection/BannerSection";
import FooterSection from "../components/PortfolioPage/FooterSection/FooterSection";
import ProjectSection from "../components/PortfolioPage/ProjectSection/ProjectSection";
import ServiceSection from "../components/PortfolioPage/ServiceSection/ServiceSection";
import Testimonial from "../components/PortfolioPage/Testimonial/Testimonial";
import WorkdoneSection from "../components/PortfolioPage/WorkdoneSection/WorkdoneSection";

function Portfolio() {
  return (
    <div>
      <Navbars />
      <BannerSection />
      <AboutSection />
      <ProjectSection />
      <ServiceSection />
      <WorkdoneSection />
      <Testimonial />
      <FooterSection />
    </div>
  );
}

export default Portfolio;
