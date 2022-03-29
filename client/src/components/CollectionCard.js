import React from "react";
import "./CollectionCard.css";

const CollectionCard = ({
  id,
  name,
  traitsValue,
  image,
  weth,
  handleClick,
  ...rest
}) => {
  const { asset_contract } = rest;
  const handleActiveCard = () => {
    handleClick({
      id,
      name,
      traitsValue,
      image,
      weth,
      address: asset_contract.address,
    });
  };

  return (
    <div className="collection-card " onClick={handleActiveCard}>
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
          <div className="price">{traitsValue.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
