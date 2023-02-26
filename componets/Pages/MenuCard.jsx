import React from "react";

function MenuCard({ cloudinaryImageId, category, name, price }) {
  return (
    <div className="menucard">
      <h3 className="name">{name}</h3>
      <h2>{category}</h2>
      <h5>{price / 100}</h5>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        className="menuimg"
      />
    </div>
  );
}

export default MenuCard;
