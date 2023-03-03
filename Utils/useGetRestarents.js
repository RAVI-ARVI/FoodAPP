import React, { useEffect, useState } from "react";
import { get_swiggy } from "../componets/Body/ConstData";

function useGetRestarents(id) {
  console.log(id);
  const [restarents, setRestarents] = useState(null);

  useEffect(() => {
    fetchRestarentDetailes();
  }, []);
  async function fetchRestarentDetailes() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.4369259&lng=78.4894015&menuId=" +
        id
    );

    const json = await data.json();

    setRestarents(json?.data);
  }
  return restarents;
}

export default useGetRestarents;
