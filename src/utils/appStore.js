import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //overall reducer - reducer is a combination of small reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
