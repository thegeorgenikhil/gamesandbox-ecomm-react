import React from "react";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import Footer from "../components/Footer/Footer";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Home;
