import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const existing = state.items.find(i => i.name === action.payload.name);
      if (existing) { existing.quantity += 1; }
      else { state.items.push({ ...action.payload, quantity: 1 }); }
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.name !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.items.find(i => i.name === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.name === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
