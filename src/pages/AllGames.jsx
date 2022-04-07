import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ListingCard from "../components/ListingCard/ListingCard";
import { getAllProducts } from "../services/products";
import { useListing } from "../context/listingContext";
import { maxPriceReducer } from "../helpers/maxPriceReducer";
import { applyPriceFilter } from "../helpers/filterHelpers/priceFilter";
import { applyRatingFilter } from "../helpers/filterHelpers/ratingFilter";
import { useAuth } from "../context/authContext";

const AllGames = () => {
  const [sliderMaxValue, setSliderMaxValue] = useState();
  const { listingState, listingDispatch } = useListing();
  const { auth } = useAuth();

  const { products, categoryList, price, rating } = listingState;
  const { token } = auth;
  const priceFilteredList = applyPriceFilter(products, price);
  const rateFilteredList = applyRatingFilter(priceFilteredList, rating);

  const categoryFilterChangeHandler = (e) => {
    listingDispatch({
      type: "LISTING_CATEGORY_FILTER",
      payload: { categoryName: e.target.name, isChecked: e.target.checked },
    });
  };

  const sliderChangeHandler = (e) => {
    listingDispatch({
      type: "UPDATE_LISTING_PRICE",
      payload: { price: e.target.value },
    });
  };

  const ratingChangeHandler = (e) => {
    listingDispatch({
      type: "UPDATE_LISTING_RATING",
      payload: { rating: Number(e.target.value) },
    });
  };

  useEffect(async () => {
    const res = await getAllProducts();
    const data = await res.data;
    const maxPrice = data.products.reduce(maxPriceReducer, 0);
    setSliderMaxValue(maxPrice);
    listingDispatch({
      type: "PRODUCT_LIST_SET",
      payload: { products: data.products, price: Number(maxPrice) },
    });
  }, []);

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
              <select
                id="price-sort"
                className="sort-options"
                onChange={(e) =>
                  listingDispatch({
                    type: "LISTING_SORT",
                    payload: { products: products, sortType: e.target.value },
                  })
                }
              >
                <option value="price-low-to-high" className="sort-option">
                  Price Low to High
                </option>
                <option value="price-high-to-low" className="sort-option">
                  Price High to Low
                </option>
              </select>
            </div>
            <div className="listing-section">
              {rateFilteredList &&
                rateFilteredList.map((product) => {
                  return categoryList.length > 0 ? (
                    categoryList.includes(
                      product.categoryName.toUpperCase()
                    ) && (
                      <ListingCard
                        key={product.id}
                        productItem={product}
                        authToken={token}
                      />
                    )
                  ) : (
                    <ListingCard
                      key={product.id}
                      productItem={product}
                      authToken={token}
                    />
                  );
                })}
            </div>
          </main>
          <aside className="listing-aside">
            <div className="filter-container">
              <div className="flex justify-between items-center">
                <h3>Filters</h3>
                <p
                  className="filter-clear-btn"
                  onClick={() =>
                    listingDispatch({
                      type: "CLEAR_ALL_FILTERS",
                      payload: { maxPrice: sliderMaxValue },
                    })
                  }
                >
                  CLEAR
                </p>
              </div>
              <div className="divider-sm"></div>

              <div className="slider-content">
                <label htmlFor="slider">₹{price}</label>
                <div className="slider-container">
                  <input
                    type="range"
                    name="slider"
                    min="0"
                    max={sliderMaxValue}
                    id="slider"
                    value={price}
                    onChange={sliderChangeHandler}
                  />
                </div>
              </div>
              <div className="divider-sm"></div>

              <div className="filter-group">
                <p className="filter-heading">CATEGORY</p>
                <div className="filter-input-container">
                  <div className="filter-input-group">
                    <input
                      type="checkbox"
                      name="racing"
                      id="racing"
                      checked={listingState.categoryList.includes("RACING")}
                      onChange={categoryFilterChangeHandler}
                    />
                    <label htmlFor="racing">Racing</label>
                  </div>
                  <div className="filter-input-group">
                    <input
                      type="checkbox"
                      name="shooting"
                      id="shooting"
                      checked={listingState.categoryList.includes("SHOOTING")}
                      onChange={categoryFilterChangeHandler}
                    />
                    <label htmlFor="shooting">Shooting</label>
                  </div>
                  <div className="filter-input-group">
                    <input
                      type="checkbox"
                      name="open-world"
                      id="open-world"
                      checked={listingState.categoryList.includes("OPEN-WORLD")}
                      onChange={categoryFilterChangeHandler}
                    />
                    <label htmlFor="open-world">Open-World</label>
                  </div>
                </div>
              </div>

              <div className="filter-group">
                <p className="filter-heading">RATINGS</p>
                <div className="filter-rating-container">
                  <div className="rating-input-group">
                    <input
                      type="radio"
                      name="rating"
                      id="rating-4"
                      value={4}
                      checked={listingState.rating === 4}
                      onChange={ratingChangeHandler}
                    />
                    <label htmlFor="rating-4">4 and above</label>
                  </div>
                  <div className="rating-input-group">
                    <input
                      type="radio"
                      name="rating"
                      id="rating-3"
                      value={3}
                      checked={listingState.rating === 3}
                      onChange={ratingChangeHandler}
                    />
                    <label htmlFor="rating-3">3 and above</label>
                  </div>
                  <div className="rating-input-group">
                    <input
                      type="radio"
                      name="rating"
                      id="rating-2"
                      value={2}
                      checked={listingState.rating === 2}
                      onChange={ratingChangeHandler}
                    />
                    <label htmlFor="rating-2">2 and above</label>
                  </div>
                  <div className="rating-input-group">
                    <input
                      type="radio"
                      name="rating"
                      id="rating-1"
                      value={1}
                      checked={listingState.rating === 1}
                      onChange={ratingChangeHandler}
                    />
                    <label htmlFor="rating-1" checked>
                      1 and above
                    </label>
                  </div>
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
