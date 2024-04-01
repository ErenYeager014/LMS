import { CustomError } from "../Error/Error";
import { NextFunction, Response } from "express";
type params = {
  cb: () => Promise<any>;
  next: NextFunction;
};
export const AsyncWarpper = async ({ cb, next }: params) => {
  try {
    await cb();
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};
