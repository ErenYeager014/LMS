import { CustomError } from "../Error/Error";
import mongoose from "mongoose";

export const dbconnection = async (url: string) => {
  try {
    await mongoose.connect(url).then(() => {
      console.log(`Mongoose is connected`);
    });
  } catch (error) {
    console.log(error);
    throw new CustomError(500, "DB is not Connected");
  }
};
