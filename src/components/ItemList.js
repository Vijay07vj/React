import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = (props) => {
  const { item } = props;
  // console.log(item);
  const dispatch = useDispatch();
  const handleAddItem = (i) => {
    //dispatch an action
    dispatch(addItem(i));
  };
  return (
    <div>
      {item.map((i) => (
        <div data-testid="foodItems"
          key={i?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold text-gray-800">
                {i?.card?.info?.name}
              </span>
              <br></br>
              <span>
                ₹
                {i?.card?.info?.price / 100 ||
                  i?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm pt-[5px]">{i?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="relative font-bold">
              <button
                className=" w-20 p-[8px] text-xs bg-white shadow-lg rounded-lg text-green-600 tranfrom hover:shadow-slate-500"
                onClick={() => {
                  handleAddItem(i)
                }}
              >
                ADD +
              </button>
            </div>

            <img
              className="w-auto rounded-lg "
              src={CDN_URL + i?.card?.info?.imageId}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
