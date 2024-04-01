import { NextFunction } from "express";
import { CustomError } from "../Error/Error";

export const customValidator = (
  validator: ({}: any) => boolean,
  data: any,
  next: NextFunction
) => {
  try {
    const validate = validator(data);
    if (!validate) {
      throw new CustomError(400, "Enter the correct Field");
    }
    return validate;
  } catch (err) {
    next(err);
  }
};
