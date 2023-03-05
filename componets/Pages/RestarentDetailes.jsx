import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "../Body/shimmer";
import MenuCard from "./MenuCard";
import useGetRestarents from "../../Utils/useGetRestarents";
function RestarentDetailes() {
  const { id } = useParams();

  const restaurantData = useGetRestarents(id);
  console.log(restaurantData, "resdata");
  return !restaurantData ? (
    <Shimmer />
  ) : (
    <div>
      <div className="bg-slate-900 p-12">
        <div className="flex justify-between ">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              restaurantData?.cloudinaryImageId
            }
            className="h-32"
          />
          <div className="text-white">
            {" "}
            <h2>{restaurantData?.name}</h2>
            <h3>{restaurantData?.cuisines.join(", ")}</h3>
            <h4>
              {restaurantData?.locality} {restaurantData?.area}
            </h4>
            <div className="flex gap-6 mt-3">
              <h4>{restaurantData?.avgRating}</h4>
              <h4>{restaurantData?.sla?.slaString}</h4>
              <h4>{restaurantData?.costForTwoMsg}</h4>
            </div>
          </div>
          <div className="text-white">
            {restaurantData?.aggregatedDiscountInfo?.descriptionList.map(
              (item, i) => (
                <h4 key={i}>{item?.meta}</h4>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-5 w-3/4 m-auto ">
        {Object.values(restaurantData?.menu?.items).map((item) => (
          <MenuCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default RestarentDetailes;
