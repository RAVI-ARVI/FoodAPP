import React from "react";
import { useRouteError } from "react-router-dom";
function PageNotFound() {
  const error = useRouteError();
  console.log(error, "this is ");
  return (
    <div>
      <h1>PAge not found</h1>
    </div>
  );
}

export default PageNotFound;
