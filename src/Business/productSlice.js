import { createSlice } from "@reduxjs/toolkit";

import { getAllProductsThunk, getAllCategoryThunk } from "../Data/productThunk";

const initialState = {
  productList: [],
  loading: {
    products: false,
    category: false,
  },
  error: null,
  pagination: {
    limit: 0,
    skip: 0,
    total: 0,
  },
  categories: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: {
    //Products
    [getAllProductsThunk.pending]: (state = initialState, _) => {
      state.loading.products = true;
      state.error = null;
    },
    [getAllProductsThunk.fulfilled]: (state = initialState, action) => {
      state.productList = action.payload.products;
      state.pagination = {
        limit: action.payload.limit,
        skip: action.payload.skip,
        total: action.payload.total,
      };
      state.loading.products = false;
      state.error = null;
    },

    //Category
    [getAllCategoryThunk.pending]: (state = initialState, _) => {
      state.loading.category = true;
      state.error = null;
    },
    [getAllCategoryThunk.fulfilled]: (state = initialState, action) => {
      state.categories = action.payload;
      state.loading.category = false;
      state.error = null;
    },
  },
});

export default productSlice.reducer;
