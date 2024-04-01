import { Request, Response, NextFunction } from "express";
import { AsyncWarpper } from "../../Helper/AsyncWrapper";
import { CustomError } from "../../Error/Error";
import { course } from "../../models/course.model";

export const CourseChecker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.auth?.role === "admin") {
    return next();
  }
  const cb = async () => {
    if (req.auth?.role === "student") {
      throw new CustomError(403, "You are forbidden to this page");
    }
    const id: string | any = req.params.id;
    if (id) {
      const Course = await course
        .findById(id)
        .populate("instructor", "_id username");
      if (Course?.instructor._id == req.auth?.id) {
        return next();
      }
      throw new CustomError(403, "Your not allowed to perform this operation");
    }
    throw new CustomError(400, "Enter the valid id");
  };
  await AsyncWarpper({ cb, next });
};
