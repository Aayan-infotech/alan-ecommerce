import { configureStore } from '@reduxjs/toolkit';
import spotlightReducer from './slices/spotlightSlice'; 

const store = configureStore({
  reducer: {
    spotlight: spotlightReducer,
  },
});

export default store;
