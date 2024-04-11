import { CustomError } from "../Error/Error";
import { NextFunction, Request, Response } from "express";
import { AsyncWarpper } from "../Helper/AsyncWrapper";
import { course } from "../models/course.model";
import { User } from "../models/user.model";

export const dashboard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!req.auth?.role) {
      throw new CustomError(401, "authorized");
    }
    if (req.auth?.role === "student") {
      const courses = await course.find();
      const user = await User.find({
        role: "instructor",
      });
      const yourCourse = await course.find({
        students: req.auth.id,
      });
      return res.status(200).json({
        course: courses.length,
        users: user.length,
        mycourse: yourCourse.length,
      });
    } else if (req.auth.role === "instructor") {
      const courses = await course.find();
      const user = await User.find({
        role: "instructor",
      });
      const yourCourse = await course.find({
        instructor: req.auth?.id,
      });
      return res.status(200).json({
        course: courses.length,
        users: user.length,
        mycourse: yourCourse.length,
      });
    } else {
      const courses = await course.find();
      const user = await User.find();
      const yourCourse = await course.find({
        instructor: req.auth?.id,
      });
      return res.status(200).json({
        course: courses.length,
        users: user.length,
        mycourse: yourCourse.length,
        UserList: user.reduce(
          (acc, current) => ({ ...acc, [current.role]: acc[current.role] + 1 }),
          { admin: 0, instructor: 0, student: 0 }
        ),
      });
    }
  };
  await AsyncWarpper({ cb, next });
};
