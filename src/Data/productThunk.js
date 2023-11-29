import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProductsThunk = createAsyncThunk(
  'productSlice/getAllProductsThunk',
  async function () {
    try {
      const response = await fetch('https://api.storerestapi.com/products');

      const data = await response.json();
      return data;
    } catch (error) {}
  }
);
