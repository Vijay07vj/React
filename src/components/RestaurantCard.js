import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  // console.log(resData);
  return (
    <div
      data-testid="resCard"
      className="p-[5px] w-[275px] m-[5px] bg-gray-200 rounded-xl object-cover transition-transform transform hover:scale-110"
    >
      <img
        className="rounded-xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold pt-4 pb-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4 className="text-sm">ETD: {sla?.slaString}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

//Higher Order Component.
//input - RestaurantCard ===> RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label
          data-testid="promoLabel"
          className="text-gray-800 font-bold mx-4 pt-4"
        >
          {header} {subHeader} 👇
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
