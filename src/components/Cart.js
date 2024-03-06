import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //so we are selecting the right portin from the store,
  const cartItems = useSelector((store) => store.cart.items);
  /*Never Do This . Trying to Get all the information from the store.
  const store = useSelector((store) => store);
  const cartItems = store.cart.items;*/
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-2 p-2">
      <h1 className="text-2xl font-bold">CART</h1>
      <div className="w-6/12 m-auto border-gray-500">
        <button
          className="m-6 p-2 bg-red-500 rounded-lg text-white hover:scale-110"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
        {cartItems.length === 0 && (
          <h1 className="font-bold text-2xl">
            Your cart is empty!!!<br></br>{" "}
            <span className="font-semibold">
              You can go to home page to view more restaurants and add items😋
            </span>
          </h1>
        )}
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
