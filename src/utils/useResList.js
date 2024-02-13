import { useState, useEffect } from "react";
import { APP_URL } from "./constants";

const useResList = () => {
  const [list, setList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(APP_URL);
    const json = await data.json();
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return list;
};
// export default useResList;
