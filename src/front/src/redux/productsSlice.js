import { createSlice } from '@reduxjs/toolkit';
import ProductService from '../services/ProductService';

const initialProductsState = { productsList: [] };

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    addProducts(state, action) {
      state.productsList = [];
      state.productsList.push(...action.payload);
    },
  },
});

const { addProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;

export const getAllProducts = (filters) => async (dispatch) => {
  try {
    const response = await ProductService.getAll(filters);
    dispatch(addProducts(response.data.products));
    return { products: response.data.products, total: response.data.count };
  } catch (e) {
    console.log(e);
  }
};
