import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  // const [showItems, setShowItems] = useState(false);
  const { data, showItems, setShowIndex } = props;
  //   console.log(props);
  const handleClick = () => {
    // console.log("button clicked");
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 m-auto my-[5px]  bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg text-gray-700">
            {data?.title}({data.itemCards.length})
          </span>
          <span className="text-gray-600">▼</span>
        </div>
        {showItems && <ItemList item={data?.itemCards} />}
      </div>
      {/* Accordian */}
    </div>
  );
};
export default RestaurantCategory;
