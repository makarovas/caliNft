import React, { useState, useEffect, useMemo } from "react";
import "./TopCard.css";
const TopCard = (active) => {
  const [data, setData] = useState(active);
  console.log(active);
  useEffect(() => setData(data), [active, data]);
  const { image, name, id, address } = active.active;
  if (!active.active.image) return null;
  return (
    <div className="main">
      <div className="main-content">
        <div className="main-highlight">
          <img src={image} alt="top" />
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
