import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQunatity(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, increaseQunatity, decreaseQuantity } =
  cartSlice.actions;
