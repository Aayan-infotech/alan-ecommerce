// src/components/redux/slices/addToCartSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addtocartproduct = createAsyncThunk(
  "cart/addtocartproduct",
  async ({ userId, productDetails }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://your-api-url.com/api/cart/add-cart",
        {
          user_id: userId,
          totalPrice: productDetails.totalPrice,
          product_price: productDetails.product_price,
          name: productDetails.name,
          sku: productDetails.sku,
          images: productDetails.images,
          selectedOptions: productDetails.selectedOptions,
          customDimensions: productDetails.customDimensions,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add product to the cart"
      );
    }
  }
);

// Define the slice
const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addtocartproduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addtocartproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems.push(action.payload);
      })
      .addCase(addtocartproduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default addToCartSlice.reducer;
