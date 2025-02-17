import { configureStore } from "@reduxjs/toolkit";
import ProfileSlice from "./Slices/ProfileSlice";

const store = configureStore({
  reducer: {
    Profile: ProfileSlice,
  },
});

export default store;
