import React from "react";

function Shimmer() {
  return (
    <div className="cardContainer">
      {Array(20)
        .fill("")
        .map((item, i) => (
          <div className="shimmer" key={i}></div>
        ))}
    </div>
  );
}

export default Shimmer;
