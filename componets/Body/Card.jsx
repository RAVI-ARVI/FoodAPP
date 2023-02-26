import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
function Card({ data }) {
  const {
    name,
    locality,
    cloudinaryImageId,
    cuisines,
    deliveryTime,
    avgRating,
    costForTwoString,
    id,
  } = data;
  return (
    <Link to={"/restaurant/" + id} className="link">
      <div className="cardbox">
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
          <h4 className="text">{cuisines?.join(", ")}</h4>
          <div className="cardFlex">
            <h5 className="rating">{avgRating} </h5>
            {/* <h4>{locality}</h4> */}
            <h5 className="lite">{costForTwoString}</h5>

            <h5 className="lite"> {deliveryTime} Mins</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
