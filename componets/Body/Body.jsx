import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./styles.css";

const onfilter = (serch, restaurantData) => {
  const filterd = restaurantData?.filter((item) =>
    item?.data?.name?.toLowerCase().includes(serch.toLowerCase())
  );

  return filterd;
};
function Body() {
  const [search, setSearch] = useState("");
  const [restaurantData, setRestaurantData] = useState(Data);
  const [filterdata, setFilterdata] = useState([]);

  async function fetchRestarentData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4369259&lng=78.4894015&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    setFilterdata(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => fetchRestarentData(), []);
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
        <div className="cardContainer">
          {filterdata?.map((item, index) => (
            <Card data={item?.data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
