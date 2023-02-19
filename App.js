import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./componets/Body/Body";
import Header from "./componets/Header";
function AppLayOut() {
  return (
    <>
      <Header />
      <Body />
      {/* <h3>foooter</h3> */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
