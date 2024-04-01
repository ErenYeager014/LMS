import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { autologin } from "./AsyncThunk";
export type initialstate = {
  username: string;
  email: string;
  role: string;
  id: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  iserror: boolean;
};
const initialState: initialstate = {
  username: "sakilesh J",
  email: "sakileshjayakumar@gmail.com",
  id: "2",
  role: "admin",
  isAuthenticated: true,
  isLoading: false,
  iserror: false,
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(autologin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(autologin.rejected, (state) => {
      state.iserror = true;
      state.isLoading = false;
    });
    builder.addCase(autologin.fulfilled, (state, action) => {
      const new_data = {
        ...action.payload,
        iserror: false,
        isLoading: false,
      };
      state = new_data;
    });
  },
});

export default auth.reducer;
export const { login, logout } = auth.actions;
