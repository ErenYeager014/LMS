import { Request, Response, NextFunction } from "express";
import { signUpvalidator, signinValidator } from "../validator/userValidator";
import { AsyncWarpper } from "../Helper/AsyncWrapper";
import { customValidator } from "../validator/customvalidator";
import { User } from "../models/user.model";
import { generatepass, comparepass } from "../Helper/encrypt";
import { CustomError } from "../Error/Error";
import { jwtGenerator } from "../Helper/Token";
// controller for create a user
const secret = process.env.SECRET || "STRANGE_THINGS";
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validate = customValidator(signUpvalidator, req.body, next);
  const password = await generatepass(req.body.password);
  if (validate && password) {
    const cb = async () => {
      const user = new User({
        ...req.body,
        password,
      });
      const saved = await user.save();
      return res.status(201).json({
        data: saved,
      });
    };
    AsyncWarpper({ cb, next });
  }
};

// controller for Login
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validate = customValidator(signinValidator, req.body, next);
  if (validate) {
    const cb = async function () {
      const result = await User.findOne({
        email: req.body.email,
      });
      if (!result) {
        throw new CustomError(400, "User not Found");
      }
      const passwordmatch = await comparepass(
        req.body.password,
        result.password
      );
      if (passwordmatch) {
        return res.status(200).json({
          username: result.username,
          email: result.email,
          token: jwtGenerator(secret, { id: result._id, role: result.role }),
          id: result._id,
          role: result.role,
        });
      } else {
        throw new CustomError(401, "Your credentials get wrong");
      }
    };
    await AsyncWarpper({ cb, next });
  }
};

// controller for get all the users
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    const users = await User.find();
    if (users) {
      return res.status(200).json({
        data: users,
      });
    }
  };
  await AsyncWarpper({ cb, next });
};

export const updateUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    const id = req.auth?.id;
    if (!(id && customValidator(signUpvalidator, req.body, next) && req.body)) {
      throw new CustomError(400, "Give me the correct Data");
    }
    const password = await generatepass(req.body.password);
    await User.findByIdAndUpdate(id, {
      ...req.body,
      password,
    });
    return res.status(200).json("User has been updated");
  };
  await AsyncWarpper({ cb, next });
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    const id = req.auth?.id;
    if (!id) {
      throw new CustomError(400, "You are give correct id");
    }
    await User.findByIdAndDelete(id);
    return res.status(200).json("Yor are deleted" + id);
  };
  await AsyncWarpper({ cb, next });
};

export const autoLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cb = async () => {
    if (!req.auth) {
      throw new CustomError(401, "unauthorized");
    }
    const data = await User.findById(req.auth.id);
    if (!data) {
      throw new CustomError(404, "User not found");
    }
    return res.status(200).json({
      username: data.username,
      email: data.email,
      id: data._id,
      role: data.role,
    });
  };
  await AsyncWarpper({ cb, next });
};
