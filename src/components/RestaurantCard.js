import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="p-[5px] w-[275px] m-[5px] bg-gray-200 rounded-xl object-cover transition-transform transform hover:scale-110">
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
    </div>
  );
};

export default RestaurantCard;
