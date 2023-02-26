import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "../Body/shimmer";
import "./styles.css";
import MenuCard from "./MenuCard";
function RestarentDetailes() {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  async function fetchRestarentDetailes() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.4369259&lng=78.4894015&menuId=" +
        id
    );
    const json = await data.json();
    setRestaurantData(json?.data);
  }
  console.log(restaurantData, "tjis");
  useEffect(() => {
    fetchRestarentDetailes();
  }, []);

  return !restaurantData ? (
    <Shimmer />
  ) : (
    <div>
      <div className="content">
        <div className="layout">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              restaurantData?.cloudinaryImageId
            }
            className="img"
          />
          <div className="detailes">
            {" "}
            <h2>{restaurantData?.name}</h2>
            <h3>{restaurantData?.cuisines.join(", ")}</h3>
            <h4>
              {restaurantData?.locality} {restaurantData?.area}
            </h4>
            <div className="ratingcard">
              <h4>{restaurantData?.avgRating}</h4>
              <h4>{restaurantData?.sla?.slaString}</h4>
              <h4>{restaurantData?.costForTwoMsg}</h4>
            </div>
          </div>
          <div className="offer">
            {restaurantData?.aggregatedDiscountInfo?.descriptionList.map(
              (item, i) => (
                <h4 key={i}>{item?.meta}</h4>
              )
            )}
          </div>
        </div>
      </div>

      <h2>menu</h2>
      <div className="cardContainer">
        {Object.values(restaurantData?.menu?.items).map((item) => (
          <MenuCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default RestarentDetailes;
