import { authorization } from "../MiddleWare/Authorization";
import {
  autoLogin,
  deleteUser,
  getAllUsers,
  login,
  signup,
  updateUsers,
} from "../Controller/user.controller";
import express from "express";
import { AdminAuth, Forbidden } from "../MiddleWare/Forbidden";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(login);
router.route("/users").get(authorization, AdminAuth, getAllUsers);
router
  .route("/user")
  .put(authorization, updateUsers)
  .delete(authorization, deleteUser);
router.route("/autologin").get(authorization, autoLogin);
export { router };
