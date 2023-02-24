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
            const fdata = onfilter(search);
            setRestaurantData(fdata);
          }}
        >
          search
        </button>
      </div>
      <div children="cardBox">
        <div className="cardContainer">
          {restaurantData?.map((item, index) => (
            <Card {...item.data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
