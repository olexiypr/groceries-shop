import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { products: [], cartCounter: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.cartCounter += action.payload.quantity;
      if (itemIndex === -1) {
        state.products.push(action.payload);
      } else {
        state.products[itemIndex].quantity += action.payload.quantity;
      }
    },
    removeItemFromCart(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id,
      );
      state.cartCounter -= action.payload.quantity;
    },
    setCartItemQuantity(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.products[itemIndex].quantity = action.payload.quantity;
      state.cartCounter = state.products.reduce(
        (acc, cur) => (acc += cur.quantity),
        0,
      );
    },
    clearCart(state) {
      state.products = [];
      state.cartCounter = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  setCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
