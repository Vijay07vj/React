import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  //slice - these reducers are the combination of the small reducer function
  reducers: {
    //action
    addItem: (state, action) => {
      //REDUX TOOLKIT
      //reducer function.
      //Mutating the state over here
      //We have to mutate thwe state
      // We dont have to return anything, uses IMMER behind the scenes
      state.items.push(action.payload);
    },
    //action
    removeItem: (state) => {
      //reducer function.
      state.items.pop();
    },
    //action
    clearCart: (state) => {
      //reducer function.
      state.items.length = 0; //state =[];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
