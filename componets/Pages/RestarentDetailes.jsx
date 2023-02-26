import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "../Body/shimmer";
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
      <h1>{restaurantData?.name}</h1>
      <h2>menu</h2>
      <ul>
        {Object.values(restaurantData?.menu?.items).map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestarentDetailes;
