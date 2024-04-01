import { configureStore } from "@reduxjs/toolkit";
import auth from "./Slice";
export const store = configureStore({
  reducer: auth,
});
