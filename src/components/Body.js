import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mocklList"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
const Body = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData= async ()=>{
  const data= await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  const json =await data.json();
  console.log(json);
  setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  }
  /*if(list.length===0){
    return <Shimmer />;
  }*/
  
  return list.length==0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter((x) => x.info.avgRating >4.2);
            setList(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {list.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
