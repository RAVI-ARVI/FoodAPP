import React, { useState } from "react";
import Card from "./Card";
import "./styles.css";
import { Data } from "./ConstData";
console.log(Data, "datadfs");
const onfilter = (serch) => {
  const filterd = Data.filter((item) =>
    item.data.name.toLowerCase().includes(serch.toLowerCase())
  );
  console.log(filterd, "fdstadfsd");
  return filterd;
};
function Body() {
  const [search, setSearch] = useState("tst");
  const [restaurantData, setRestaurantData] = useState(Data);
  return (
    <div className="bodycontainer">
      <input
        name="search"
        placeholder="serch resurarent"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => {
          const fdata = onfilter(search);
          setRestaurantData(fdata);
        }}
      >
        search
      </button>
      <div className="cardContainer">
        {restaurantData?.map((item, index) => (
          <Card {...item.data} />
        ))}
      </div>
    </div>
  );
}

export default Body;
