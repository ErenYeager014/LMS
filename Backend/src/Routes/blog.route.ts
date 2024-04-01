import express from "express";
import { authorization } from "../MiddleWare/Authorization";
import {
  getAllblogs,
  PostBlog,
  updateBlog,
  deleteBlog,
} from "../Controller/blog.Controller";
import { BlogChecker } from "../MiddleWare/blogChecker/Blog.checker";
const router = express.Router();

router
  .route("/blog")
  .get(authorization, getAllblogs)
  .post(authorization, PostBlog);

router
  .route("/blog/:id")
  .put(authorization, BlogChecker, updateBlog)
  .delete(authorization, BlogChecker, deleteBlog);

export { router };
