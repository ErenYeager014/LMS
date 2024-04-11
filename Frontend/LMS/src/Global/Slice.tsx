import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type initialstate = {
  username: string;
  email: string;
  role: string;
  id: string;
  isAuthenticated: boolean;
};
const initialState: initialstate = {
  username: "",
  email: "",
  id: "",
  role: "",
  isAuthenticated: false,
};
const auth = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    login: (state: initialstate, action: PayloadAction<initialstate>) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    logout: (state: initialstate) => {
      state = initialState;
      return state;
    },
  },
});

export default auth.reducer;
export const { login, logout } = auth.actions;
