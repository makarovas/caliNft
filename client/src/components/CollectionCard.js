import React from "react";
import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, image, weth }) => {
  return (
    <div className="collection-card">
      <img src={image} alt="card" className="collection-card-image" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">
            <span>{`#${id}`}</span>
          </div>
        </div>
        <div className="price-container">
          <img src={weth} alt="card" className="weth-image" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
