import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

//craeting a global store
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
