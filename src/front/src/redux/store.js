import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { productsReducer } from './productsSlice';
import { cartReducer } from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
  },
});

export default store;
