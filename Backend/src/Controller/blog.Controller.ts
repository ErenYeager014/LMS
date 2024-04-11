import { Request, Response, NextFunction, response } from "express";
import { customValidator } from "../validator/customvalidator";
import { blogvalidator } from "../validator/blog.validator";
import { AsyncWarpper } from "../Helper/AsyncWrapper";
import { CustomError } from "../Error/Error";
import { Blog } from "../models/blog.model";
export const PostBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!customValidator(blogvalidator, req.body, next)) {
      throw new CustomError(400, "Enter the valid data");
    }
    if (!req.auth?.id) {
      throw new CustomError(401, "You are unauthorized");
    }
    const blog = new Blog({
      ...req.body,
      user: req.auth?.id,
    });
    const saved = await blog.save();
    return res.status(201).json({
      data: saved,
    });
  };
  await AsyncWarpper({ cb, next });
};

export const getAllblogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    const result = await Blog.find().populate("user", "_id username");
    return res.status(200).json({
      data: result,
    });
  };
  await AsyncWarpper({ cb, next });
};

export const updateBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!req.params.id) {
      throw new CustomError(400, "Enter the valid id");
    }
    if (!req.auth?.id) {
      throw new CustomError(401, "Unauthorized");
    }
    const data = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        user: req.auth?.id,
      },
      { new: true }
    );
    return res.status(201).json({
      data,
    });
  };
  await AsyncWarpper({ cb, next });
};

export async function deleteBlog(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const cb = async () => {
    if (!req.params.id) {
      throw new CustomError(400, "Enter the valid id");
    }
    if (!req.auth?.id) {
      throw new CustomError(401, "Unauthorized");
    }
    const result = await Blog.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json({ data: result });
    }
  };
  await AsyncWarpper({ cb, next });
}
