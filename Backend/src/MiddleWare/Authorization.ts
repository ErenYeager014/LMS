import { boolean } from "zod";
import { Auth } from "../..";
import { jwtChecker } from "../Helper/Token";
import { Request, Response, NextFunction } from "express";

export const authorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: string | undefined = req.headers.authorization;
  token = token?.split(" ")[1];
  const SECRET: string = process.env.SECRET || "STRANGE_THINGS";
  if (token) {
    const result: Auth | boolean = jwtChecker(SECRET, token);
    if (typeof result === "boolean") {
      return res.status(401).send({ message: "You token is invalid" });
    }
    req.auth = result;
    next();
  } else {
    return res.status(400).send({ message: "You token is not found" });
  }
};
