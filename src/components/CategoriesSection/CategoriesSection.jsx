import React from "react";
import "./CategoriesSection.css";
import RacingThumbnail from "../../assets/category-images/racing-thumbnail.png";
import OpenWorldThumbnail from "../../assets/category-images/open-world-thumbnail.png";
import ShooterThumbnail from "../../assets/category-images/shooter-thumbnail.png";
import { Link, useNavigate } from "react-router-dom";
import { useListing } from "../../context/listingContext";

const CategoriesSection = () => {
  const { listingDispatch } = useListing();
  const thumbnailImgArr = [
    { id: 1, name: "RACING", src: RacingThumbnail },
    { id: 2, name: "OPEN-WORLD", src: OpenWorldThumbnail },
    { id: 3, name: "SHOOTER", src: ShooterThumbnail },
  ];
  const navigate = useNavigate();

  const categoryClickHandler = (categoryName) => {
    listingDispatch({
      type: "UPDATE_SINGLE_CATEGORY",
      payload: { categoryName: categoryName.toUpperCase() },
    });
    return navigate("/games/all");
  };

  return (
    <div className="categories-container">
      <h1 className="text-center">CATEGORIES</h1>
      <div className="category-img-parent-container">
        {thumbnailImgArr.map((thumbnail) => (
          <div
            className="category-img-container"
            key={thumbnail.id}
            onClick={() => categoryClickHandler(thumbnail.name)}
          >
            <Link to={"/"}>
              <img src={thumbnail.src} alt="" className="category-img" />
              <p className="category-name">{thumbnail.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
