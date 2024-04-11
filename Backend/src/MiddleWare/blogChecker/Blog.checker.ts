import { NextFunction, Request, Response } from "express";
import { AsyncWarpper } from "../../Helper/AsyncWrapper";
import { CustomError } from "../../Error/Error";
import { Blog } from "../../models/blog.model";
import mongoose from "mongoose";

export const BlogChecker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (req.auth?.role === "admin") {
      next();
    }
    if (!req.params.id) {
      throw new CustomError(400, "Enter the valid id");
    }
    const blog = await Blog.findById(req.params.id);
    console.log(blog, "check blog")
    if (!blog) {
      throw new CustomError(404, "Blog not found");
    }
    if (!req.auth?.id) {
      throw new CustomError(401, "You are unAuthorized");
    }
    if (String(blog.user) === req.auth?.id) {
      next();
    } else {
      throw new CustomError(403, "You not allowed to manipulate the blog");
    }
  };
  await AsyncWarpper({ cb, next });
};
