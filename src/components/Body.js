import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mocklList"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
const Body = () => {
  const [list, setList] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant]=useState([]);
  const[searchText,setSearchText]=useState("");
  
  //whenever state variable update , react triggers a reconciliation cycle(rerenders the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData= async ()=>{
  const data= await fetch('https://corsproxy.org/?' + encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  ));
  const json =await data.json();
  // console.log(json);
  //optional chaining;
  setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //conditional Rendering:
  /*if(list.length===0){
    return <Shimmer />;
  }*/
  
  return list.length==0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }
          }/>
          <button className="search-btn" onClick={()=>{
            const filteredRestaurant = list.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
          }}>
            Search
            </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter((x) => x.info.avgRating >4.2);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
