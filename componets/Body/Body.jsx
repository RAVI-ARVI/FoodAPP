import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./shimmer";
import "./styles.css";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import ParentClass from "./Parent";
import { get_swiggy } from "./ConstData";
import useIsonline from "../../Utils/useIsonline";
import Offline from "../Pages/Offline";
const onfilter = (serch, restaurantData) => {
  const filterd = restaurantData?.filter((item) =>
    item?.data?.name?.toLowerCase().includes(serch.toLowerCase())
  );

  return filterd;
};
function Body() {
  const [search, setSearch] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  useEffect(() => {
    // const time = setInterval(() => {
    //   console.log("this is use effect");
    // }, 1000);
    // return () => {
    //   clearInterval(time);
    //   console.log("this is useeffect return");
    // };
    fetchRestarentData();
  }, []);
  async function fetchRestarentData() {
    const data = await fetch(get_swiggy);

    const json = await data.json();

    setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    setFilterdata(json?.data?.cards[2]?.data?.data?.cards);
  }
  const online = useIsonline();
  console.log(online);
  if (!online) {
    return <h1>Your offline</h1>;
  }
  return (
    <div className="bodycontainer">
      <div className="searchcontainer">
        <input
          name="search"
          placeholder="serch resurarent"
          value={search}
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="searchbtn"
          onClick={() => {
            const fdata = onfilter(search, restaurantData);
            setFilterdata(fdata);
          }}
        >
          search
        </button>
      </div>
      <div children="cardBox">
        {/* <ParentClass /> */}

        <div className="cardContainer">
          {filterdata.length === 0 ? (
            <Shimmer />
          ) : (
            filterdata?.map((item, index) => <Card data={item?.data} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
