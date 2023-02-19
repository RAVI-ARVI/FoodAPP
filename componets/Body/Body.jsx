import React from "react";
import Card from "./Card";
import "./styles.css";
import { Data } from "./ConstData";
function Body() {
  return (
    <div className="bodycontainer">
      <div className="cardContainer">
        {Data.map((item, index) => (
          <Card {...item.data} />
        ))}
      </div>
    </div>
  );
}

export default Body;
