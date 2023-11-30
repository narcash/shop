import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = {
  all_products: "https://dummyjson.com/products",
};

export const getAllProductsThunk = createAsyncThunk(
  "productSlice/getAllProductsThunk",
  async function (limit) {
    try {
      const response = await fetch(BASE_URL.all_products + "?limit=" + limit);

      const data = await response.json();

      return data;
    } catch (error) {}
  }
);

export const getAllCategoryThunk = createAsyncThunk(
  "productSlice/getAllCategoryThunk",
  async function () {
    try {
      const response = await fetch(BASE_URL.all_products + "/categories");

      const data = await response.json();

      return data;
    } catch (error) {}
  }
);
