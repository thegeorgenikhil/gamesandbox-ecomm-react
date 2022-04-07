import React, { useEffect } from "react";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import Footer from "../components/Footer/Footer";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import Navbar from "../components/Navbar/Navbar";
import { useListing } from "../context/listingContext";

const Home = () => {
  const {
    listingState: { products },
  } = useListing();
  return (
    <div>
      <Navbar />
      {products
          .filter((product) => product.bannerImgURL !== undefined)
          .map((product) => (
            <HomeCarousel product={product} key={product._id} />
          ))}
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Home;
