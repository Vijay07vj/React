import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { APP_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  //whenever state variable update , react triggers a reconciliation cycle(rerenders the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(APP_URL);
    const json = await data.json();
    // console.log(json);
    //optional chaining;
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional Rendering:
  /*if(list.length===0){
    return <Shimmer />;
  }*/
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return (
      <h1>
        Looks Like You're Offline!!! , Please Check your Internet Connection.
      </h1>
    );

  return list.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-gray-200 hover:bg-gray-400 m-2 rounded-lg"
            onClick={() => {
              const filteredRestaurant = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-1 bg-gray-200 hover:bg-gray-400 hover:scale-110 rounded-lg"
          onClick={() => {
            const filteredList = list.filter((x) => x.info.avgRating > 4.2);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="flex flex-wrap ml-[10px] space-x-3 space-y-3 overflow-visible">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
