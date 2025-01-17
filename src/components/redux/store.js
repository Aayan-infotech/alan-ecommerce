import { configureStore } from "@reduxjs/toolkit";
import spotlightReducer from "./slices/spotlightSlice";
import addToCartReducer from "./slices/addToCartSlice";
import userLoginReducer from "./slices/userLoginSlice";

const store = configureStore({
  reducer: {
    spotlight: spotlightReducer,
    cart: addToCartReducer,
    user_login: userLoginReducer,
  },
});

export default store;
