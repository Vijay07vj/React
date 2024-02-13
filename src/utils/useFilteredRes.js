import React from 'react';
import { useState,useEffect } from 'react';
import { APP_URL } from './constants';

const useFilteredRes = () => {
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    useEffect(() => {
      fetchData();
    });
  
    const fetchData = async () => {
      const data = await fetch(APP_URL);
      const json = await data.json();
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    };

  return filteredRestaurant;
  
}

// export default useFilteredRes;