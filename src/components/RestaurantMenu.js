// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo,setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);
  const [showIndex, setShowIndex] = useState(null);

  // useEffect (()=>{
  //     fetchMenu();
  // },[])

  // const fetchMenu =async ()=>{
  //     const data=await fetch(RES_URL+resId);
  //     const json = await data.json();
  //     // console.log(json);
  //     setResInfo(json.data);

  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) =>
        x.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl pb-[10px]">{name}</h1>
      <h2 className="font-semibold">{cuisines.join(", ")}</h2>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {(item.card.info.price / 100).toFixed()}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li> 
      </ul>*/}
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            if (showIndex === index) setShowIndex(-1);
            else setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
