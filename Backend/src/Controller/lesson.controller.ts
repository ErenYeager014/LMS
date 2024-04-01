import { NextFunction, Request, Response } from "express";
import { AsyncWarpper } from "../Helper/AsyncWrapper";
import { customValidator } from "../validator/customvalidator";
import { lessonValidator } from "../validator/lessonValidator";
import { CustomError } from "../Error/Error";
import { Lesson } from "../models/lesson.model";

export const postLesson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("post lesson passed");
  const cb = async () => {
    if (
      !(
        req.file &&
        customValidator(lessonValidator, req.body, next) &&
        req.params.id
      )
    ) {
      throw new CustomError(400, "You Enter the wrong Fields");
    }
    const lesson = new Lesson({
      ...req.body,
      file: req.file.path,
      course: req.params.id,
    });
    const data = await lesson.save();
    if (data._id) {
      req.lessonId = data._id;
      return next();
    }
  };
  await AsyncWarpper({ cb, next });
};

export const getAllLesson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!req.params.id) {
      throw new CustomError(400, "Enter the correct course id");
    }
    const lesson = await Lesson.find({
      course: req.params.id,
    });
    if (!lesson) {
      throw new CustomError(404, "Nothing lesson has been there");
    }
    return res.status(200).json(lesson);
  };
  await AsyncWarpper({ cb, next });
};
