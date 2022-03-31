import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { AiFillStar } from "react-icons/ai";
import ListingCard from "../components/ListingCard/ListingCard";
const AllGames = () => {
  return (
    <div>
      <Navbar />
      <div className="container-lg">
        <div className="game-category-heading">
          <h1>ALL GAMES</h1>
          <div className="divider-sm"></div>
        </div>
        <div className="listing-container">
          <main className="listing-main">
            <div className="sort-container">
              <label htmlFor="price-sort" className="sort-label">
                Sort By:
              </label>
              <select id="price-sort" className="sort-options">
                <option value="price-low-to-high" className="sort-option">
                  Price Low to High
                </option>
                <option value="price-high-to-low" className="sort-option">
                  Price High to Low
                </option>
              </select>
            </div>
            <div className="listing-section">
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
              <ListingCard />
            </div>
          </main>
          <aside className="listing-aside">
            <div className="filter-container">
              <h3>Filters</h3>
              <div className="divider-sm"></div>

              <div className="filter-group">
                <p className="filter-heading">CATEGORY</p>
                <div className="filter-input-container">
                  <div className="filter-input-group">
                    <input type="checkbox" name="racing" />
                    <label htmlFor="racing">Racing</label>
                  </div>
                  <div className="filter-input-group">
                    <input type="checkbox" name="shooter" />
                    <label htmlFor="shooter">Shooter</label>
                  </div>
                  <div className="filter-input-group">
                    <input type="checkbox" name="open-world" />
                    <label htmlFor="open-world">Open-World</label>
                  </div>
                </div>
              </div>

              <div className="filter-group">
                <p className="filter-heading">RATINGS</p>
                <div className="filter-rating-container">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllGames;
