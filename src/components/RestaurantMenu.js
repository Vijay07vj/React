import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";

const RestaurantMenu =() =>{
    const [resInfo,setResInfo] = useState(null);

    useEffect (()=>{
        fetchMenu();
    },[])

    const fetchMenu =async ()=>{
        const data=await fetch('https://corsproxy.org/?' + encodeURIComponent(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=234986&catalog_qa=undefined&submitAction=ENTER")
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        
    };
    

    if (resInfo===null) return <Shimmer />;
    
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    
    let itemCards;
if (resInfo.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
  for (let card of resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards) {
    if (card?.card?.card?.itemCards) {
      itemCards = card.card.card.itemCards;
      break;
    }
  }
}
    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h1>{cuisines.join(", ")}</h1>
            <h1>{costForTwoMessage}</h1>
            <ul>
                <li>{itemCards[0].card.info.name}</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;