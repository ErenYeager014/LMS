import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../Axios/Axios";

export const autologin = createAsyncThunk(
  "authentication/autologin",
  async () => {
    try {
      const res = await Axios.get("/autologin");
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      console.log(err);
    }
  }
);
