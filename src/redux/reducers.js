import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
  },
  reducers: {
    compareUsers: (state, action) => {
      const item = action.payload;
      const isItemExists = state.cartItems.find((i) => i.id === item.id);
      if (isItemExists) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) {
            i.quantity++;
          }
        });
      } else {
        state.cartItems.push(item);
      }
    },
  },
});
export const { addToCart, removeFromCart, deleteFromCart, calculatePrice } =
  cartSlice.actions;
export default cartSlice.reducer;
