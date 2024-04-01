import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export class CustomError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export const ErrorController: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err instanceof CustomError ? err.statusCode : 500;
  res.status(status).json({ message: err.message });
};
