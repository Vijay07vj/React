import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { APP_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [list, setList] = useState([]);
  // console.log(list);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const { loggedInUser, setUserName } = useContext(UserContext);

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
        <label className="ml-20 ">UserName : </label>
        <input
          className="border border-black rounded-lg p-[4px] "
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>

      <div className="flex flex-wrap ml-[10px] space-x-3 space-y-3 overflow-visible">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {/* if the restaurant has aggregate discount info then add a discount label to it.   */}
            {res.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
