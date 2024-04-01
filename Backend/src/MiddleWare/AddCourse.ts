import { Request, Response, NextFunction } from "express";
import { AsyncWarpper } from "../Helper/AsyncWrapper";
import { course } from "../models/course.model";
import { CustomError } from "../Error/Error";
export const Addcourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!(req.params.id && req?.assessmentId)) {
      throw new CustomError(400, "Id not found");
    }
    const Course = await course.findById(req.params.id);
    if (!Course) {
      throw new CustomError(404, "Course not found");
    }
    if (Course.assessment.includes(req?.assessmentId)) {
      throw new CustomError(400, "assessment is already in this course");
    }
    Course.assessment.push(req.assessmentId);
    const result = await Course.save();
    return res.status(201).json({
      data: result,
    });
  };
  await AsyncWarpper({ cb, next });
};
