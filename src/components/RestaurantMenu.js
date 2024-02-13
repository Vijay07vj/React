// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
  // const [resInfo,setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // console.log(params)

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

  let itemCards;
  if (resInfo.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
    for (let card of resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards) {
      if (card?.card?.card?.itemCards) {
        itemCards = card.card.card.itemCards;
        break;
      }
    }
  }
  
  // console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {(item.card.info.price / 100).toFixed()}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
