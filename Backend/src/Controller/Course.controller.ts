import { CustomError } from "../Error/Error";
import { AsyncWarpper } from "../Helper/AsyncWrapper";
import { Request, Response, NextFunction } from "express";
import { course } from "../models/course.model";
import { customValidator } from "../validator/customvalidator";
import { coursevalidation } from "../validator/courseValidator";
import { readFileSync } from "fs";
import path from "path";
import mongoose from "mongoose";
// api for create course
export const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (
      req.file &&
      customValidator(coursevalidation, req.body, next) &&
      req.auth?.id
    ) {
      const Course = new course({
        ...req.body,
        instructor: req.auth?.id,
        thumbnail: {
          data: readFileSync(
            path.join(__dirname, "../uploads/") + req.file.filename
          ),
          contentType: "image/png",
        },
      });
      const result = await Course.save();
      return res.status(200).json({ data: result });
    } else {
      throw new CustomError(400, "Enter the file");
    }
  };
  await AsyncWarpper({ cb, next });
};

//api for get all the course
export const getAllcourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    const data = await course.find().populate("instructor", "username");
    if (data) {
      return res.status(200).json(data);
    }
  };
  await AsyncWarpper({ cb, next });
};

// api for get a specific course
export const getCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    const id = req.params.id;
    // console.log("called");
    if (id) {
      const data = await course
        .findById(id)
        .populate(
          "assessment",
          "title description expireDate duration completed"
        );
      if (!data) {
        throw new CustomError(404, "Not found the course");
      }
      return res.status(200).json(data);
    }
    throw new CustomError(400, "Enter the Id of the course");
  };
  await AsyncWarpper({ cb, next });
};

export const updateCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const cb = async () => {
    if (
      !(id && req.file && customValidator(coursevalidation, req.body, next))
    ) {
      throw new CustomError(400, "Enter the valid fields");
    }
    const Course = await course.findByIdAndUpdate(
      id,
      {
        ...req.body,
        instructor: req.auth?.id,
        thumbnail: {
          data: readFileSync(
            path.join(__dirname, "../uploads/") + req.file.filename
          ),
          contentType: "image/png",
        },
      },
      { new: true }
    );
    return res.status(200).json(Course);
  };
  await AsyncWarpper({ cb, next });
};

export const deleteCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    const id = req.params.id;
    if (!id) {
      throw new CustomError(400, "Enter the valid id");
    }
    await course.findByIdAndDelete(id);
    return res.status(200).json({
      message: "your data has been deleted",
    });
  };
  await AsyncWarpper({ cb, next });
};

// enroll strudents
export const enrollCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    const { courseId } = req.body;
    if (!courseId) {
      throw new CustomError(400, "Enter the valid Course id");
    }
    const Course = await course.findById(courseId);
    if (!Course) {
      throw new CustomError(404, "Course Not found");
    }
    if (req.auth?.id) {
      const objectId = new mongoose.Types.ObjectId(req.auth?.id);
      if (Course.students.includes(objectId)) {
        throw new CustomError(400, "Your are already student");
      }
      Course.students.push(objectId);
      const result = await Course.save();
      if (result) {
        req.courseId = result._id;
        next();
      }
    } else {
      throw new CustomError(401, "Your are unauthorized");
    }
  };
  await AsyncWarpper({ cb, next });
};

export const mycourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!req.auth?.role) {
      throw new CustomError(401, "Unauthorized");
    }
    let courses: any = null;
    if (req.auth.role === "student") {
      courses = await course
        .find({
          students: req.auth?.id,
        })
        .populate("instructor", "username");
      // courses = res.filter((course) =>
      //   course.students.includes(new mongoose.Types.ObjectId(req.auth?.id))
      // );
      // console.log(courses);
    } else {
      courses = await course.find({
        instructor: req.auth?.id,
      });
    }
    return res.status(200).json({
      data: courses,
    });
  };
  await AsyncWarpper({ cb, next });
};
