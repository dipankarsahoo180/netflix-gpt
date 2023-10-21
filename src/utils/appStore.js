import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore({
   reducer: {
      userReducer: userSlice,
      movies: moviesReducer,
   },
});

export default appStore;
