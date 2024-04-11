import { Request, Response, NextFunction } from "express";
import { AsyncWarpper } from "../Helper/AsyncWrapper";
import { customValidator } from "../validator/customvalidator";
import { CustomError } from "../Error/Error";
import { replyModel } from "../models/replay.model";
import { replyvalidator } from "../validator/Reply.validator";
export const PostReply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!(req.params.id && customValidator(replyvalidator, req.body, next))) {
      throw new CustomError(400, "Your data is incorrect");
    }
    if (!req.auth) {
      throw new CustomError(401, "you are unauthorized");
    }
    const reply = new replyModel({
      ...req.body,
      userId: req.auth.id,
      blogID: req.params.id,
    });
    const data = await reply.save();
    if (data) {
      req.replyID = data._id;
      next();
    }
  };
  await AsyncWarpper({ cb, next });
};

export const getReply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!req.params.id) {
      throw new CustomError(400, "id not found");
    }
    const data = await replyModel.find({
      blogID: req.params.id,
    }).populate("userId", "username");
    if (!data) {
      throw new CustomError(404, "data not found");
    }
    return res.status(200).json({
      data,
    });
  };
  await AsyncWarpper({ cb, next });
};
