import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress, getPosition } from "../../util";

const initialState = {
  cart: [
    // {
    //   pizzaId: 454874,
    //   name: "Pizza A",
    //   quantity: 2,
    //   unitPrice: 350,
    //   totalPrice: 700,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload); //in RTK we can mutate the state // newItem = action.payload
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload); // action.payload = id
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++; //this will change the quantity in the state because object are stored as reference
      item.totalPrice += item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice -= item.unitPrice;

      if (item.quantity === 0) {
        // for removing the item if the quantity reach zero after decreasing
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getItemTotalQuantity = (state) =>
  state.cart.cart.reduce((accum, item) => (accum += item.quantity), 0);

export const getItemsTotalPrice = (state) =>
  state.cart.cart.reduce((accum, item) => (accum += item.totalPrice), 0);

export const getCart = (state) => state.cart.cart;
export const getItemQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0; //will return quantity if item exist and 0 if it is udefined or null

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
