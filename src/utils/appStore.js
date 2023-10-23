import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";
import GptSlice from "./GptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
   reducer: {
      userReducer: userSlice,
      movies: moviesReducer,
      gpt: GptSlice,
      config: configSlice,
   },
});

export default appStore;
