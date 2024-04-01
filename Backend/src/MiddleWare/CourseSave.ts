import { NextFunction, Response, Request } from "express";
import { AsyncWarpper } from "../Helper/AsyncWrapper";
import { CustomError } from "../Error/Error";
import { course } from "../models/course.model";
import { User } from "../models/user.model";
import mongoose from "mongoose";

export const CoursePush = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!(req.params.id && req.lessonId)) {
      console.log(req.params.id, req.lessonId);
      throw new CustomError(400, "Id is not found");
    }
    const Course = await course.findById(req.params.id);
    Course?.lessons.push(req.lessonId);
    const data = await Course?.save();
    if (data) {
      res.status(201).json("Data has been created");
    }
  };
  await AsyncWarpper({ cb, next });
};

export const courseAdd = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!req.auth?.id) {
      throw new CustomError(401, "Ünauthorized");
    }
    if (!req.courseId) {
      throw new CustomError(400, "Couse id not found");
    }
    const result = await User.findById(req.auth?.id);
    if (
      result?.enrolledCourses.includes(
        new mongoose.Types.ObjectId(req.courseId)
      )
    ) {
      throw new CustomError(400, "You're already Enlooed this Course");
    }
    result?.enrolledCourses.push(req.courseId);
    await result?.save();
    return res.status(200).json("You are enrolled this course");
  };
  await AsyncWarpper({ cb, next });
};
