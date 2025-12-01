import NavBar from "@/components/NavBar";
import React from "react";
import HeroSection from "./Hero";
import FeaturesSection from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Footer from "@/components/Footer";
import CTA from "./CTA";

const HomeWrapper = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default HomeWrapper;
