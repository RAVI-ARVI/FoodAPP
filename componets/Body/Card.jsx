import React from "react";
import "./styles.css";

function Card({
  name,
  locality,
  cloudinaryImageId,
  cuisines,
  deliveryTime,
  avgRating,
  costForTwoString,
}) {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="foodicon"
        className="img"
      />
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{costForTwoString}</h4>
      <h4 className="text">{cuisines.join(",")}</h4>
      <h4>delevery in {deliveryTime}</h4>
      <h4>{avgRating} starts</h4>
    </div>
  );
}

export default Card;
