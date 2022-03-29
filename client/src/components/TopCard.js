import React from "react";
import "./TopCard.css";
const TopCard = ({
  image_original_url = "https://lh3.googleusercontent.com/GHfpF_0WRmTl0bgiu1N1tJ-SnfIgitItnMbK-BG52EgdI7oVCmD5c3LUBu8gl1cZ0wbX6rLmpFVZUpe7FISyMKG4POK8da8GJllvgqI",
  name = "COCACla",
  id = "32",
  address = "3lk2j4lk2jlkjlkj",
}) => {
  return (
    <div className="main">
      <div className="main-content">
        <div className="main-highlight">
          <img src={image_original_url} alt="top" />
        </div>
        <div className="details">
          <div className="main-details">
            <span className="main-title">{name}</span>
            <span className="main-id">#{id}</span>
          </div>
          <div className="owner-details">
            <div className="owner-image-container">
              {/* <img src="" alt="" className="owner-image" /> */}
              <div className="owner-circle" />
              <span className="owner-address">{address}</span>
            </div>
            <div className="social"></div>
            <div className="social"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
