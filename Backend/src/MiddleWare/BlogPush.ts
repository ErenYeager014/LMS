import { Request, Response, NextFunction } from "express";
import { AsyncWarpper } from "../Helper/AsyncWrapper";
import { CustomError } from "../Error/Error";
import { Blog } from "../models/blog.model";
export const addreply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!(req.params.id && req.replyID)) {
      throw new CustomError(400, "id not found");
    }
    const blog = await Blog.findById(req.params.id);
    if (blog?.replay.includes(req.replyID)) {
      throw new CustomError(400, "reply is already their");
    }
    blog?.replay.push(req.replyID);
    const result = await blog?.save();
    return res.status(201).json({
      data: result,
    });
  };
  await AsyncWarpper({ cb, next });
};
