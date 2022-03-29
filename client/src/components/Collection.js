import React, { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard";
import weth from "../assets/weth.png";
import "./Collection.css";

const Collection = ({ data }) => {
  const [col, setCol] = useState([]);

  useEffect(() => {
    if (data) {
      setCol(data);
    }
  }, [data]);

  return (
    <div className="col-container">
      {!col && <span>Loading...</span>}
      {col.map(({ id, image_url, traits, name }) => (
        <CollectionCard
          key={id}
          weth={weth}
          id={id}
          name={name}
          image={image_url}
          traitsValue={traits?.[0]}
        />
      ))}
    </div>
  );
};

export default Collection;
