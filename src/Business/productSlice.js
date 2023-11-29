import { createSlice } from '@reduxjs/toolkit';
import { getAllProductsThunk } from '../Data/productThunk';
const initialState = {
  productList: [],
  loading: false,
  error: null,
};
const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProductsThunk.pending]: (state = initialState, action) => {
      state.productList = [];
      state.loading = true;
      state.error = null;
    },
    [getAllProductsThunk.fulfilled]: (state = initialState, action) => {
      console.log(action);
      state.productList = action.payload.data;
      state.loading = false;
      state.error = null;
    },
  },
});

export default productSlice.reducer;
