import { CustomError } from "../Error/Error";
import { Request, Response, NextFunction } from "express";

export const Forbidden = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.auth) {
      throw new CustomError(401, "You are Not Authorized");
    }
    if (req.auth.role === "student") {
      throw new CustomError(403, "You are unauthorized to this page");
    }
    next();
  } catch (error) {
    next(error);
  }
};

export const AdminAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.auth) {
      throw new CustomError(401, "You are Unauthorized");
    }
    if (req.auth.role !== "admin") {
      throw new CustomError(403, "You are unauthorized");
    }
    next();
  } catch (err) {
    next(err);
  }
};
