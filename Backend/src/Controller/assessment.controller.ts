import { Request, Response, NextFunction } from "express";
import { AsyncWarpper } from "../Helper/AsyncWrapper";
import { customValidator } from "../validator/customvalidator";
import { assessmentvalidator } from "../validator/Assessment.validator";
import { CustomError } from "../Error/Error";
import { Assessment } from "../models/Assessment.model";

export const AssessmentPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (
      !(req.params.id && customValidator(assessmentvalidator, req.body, next))
    ) {
      throw new CustomError(400, "Enter the valid data");
    }
    if (!req.auth?.id) {
      throw new CustomError(401, "You have been Unauthorized");
    }
    const Assess = new Assessment({
      ...req.body,
      expireDate: new Date(req.body.expireDate),
      courseId: req.params.id,
      by: req.auth.id,
    });
    const result = await Assess.save();
    if (result) {
      req.assessmentId = result._id;
      next();
    }
  };
  await AsyncWarpper({ cb, next });
};

export const getAssessMent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!req.params.id) {
      throw new CustomError(400, " course Id is not found");
    }
    const data = await Assessment.findOne({
      courseId: req.params.id,
    });
    if (!data) {
      console.log(data);
      throw new CustomError(404, "You're data is not found");
    }
    return res.status(200).json({
      data,
    });
  };
  await AsyncWarpper({ cb, next });
};
