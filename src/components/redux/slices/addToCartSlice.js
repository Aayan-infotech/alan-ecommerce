// src/components/redux/slices/addToCartSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const addtocartproduct = createAsyncThunk(
  "cart/addtocartproduct",
  async (productDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://44.196.64.110:7878/api/GMCards/sessions",
        productDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data, 'abinash');
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add product to the cart"
      );
    }
  }
);

export const fetchAllProducts = createAsyncThunk(
  "cart/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("alanAuthToken");
      const sessionId = Cookies.get("sessionId");
      const response = await axios.get(
        `http://44.196.64.110:7878/api/GMCards/sessions/${sessionId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // const response = await axios.get(
      //   "http://44.196.64.110:7878/api/order/orders",
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
      return response.data?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "cart/deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const token = Cookies.get("alanAuthToken");
      const response = await axios.delete(
        `http://44.196.64.110:7878/api/GMCards/sessions/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return productId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete product"
      );
    }
  }
);

export const updateUserBillingAddress = createAsyncThunk(
  "cart/updateUserBillingAddress",
  async ({ userId, billingDetails }, { rejectWithValue }) => {
    try {
      const token = Cookies.get("alanAuthToken");
      const response = await axios.put(
        `http://44.196.64.110:7878/api/CustMng/customers/${userId}`,
        billingDetails,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update billing details"
      );
    }
  }
);

// Define the slice
const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    products: [],
    billingDetails: null,
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
        // state.loading = true;
        // fetchAllProducts();
      })
      .addCase(addtocartproduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch all products reducers
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log(action, "action");
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // delete product
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        if (state.products?.entries) {
          state.products.entries = state.products.entries.filter(
            (product) => product._id !== action.payload
          );
        }
      })

      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update billing address
      .addCase(updateUserBillingAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserBillingAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.billingDetails = action.payload;
      })
      .addCase(updateUserBillingAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default addToCartSlice.reducer;
