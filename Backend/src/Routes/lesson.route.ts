import {
  deleteLesson,
  getAllLesson,
  getLesson,
  postLesson,
  updateLesson,
} from "../Controller/lesson.controller";
import express from "express";
import { authorization } from "../MiddleWare/Authorization";
import { CourseChecker } from "../MiddleWare/Course-checker/Course.middleware";
import { Forbidden } from "../MiddleWare/Forbidden";
import { upload } from "../Helper/Files";
import { CoursePush } from "../MiddleWare/CourseSave";

const router = express.Router();

router
  .route("/lesson/:id")
  .post(
    authorization,
    Forbidden,
    CourseChecker,
    upload.single("file"),
    postLesson,
    CoursePush
  )
  .get(authorization, getAllLesson);

router
  .route("/lessons/:id")
  .put(authorization, Forbidden, upload.single("file"), updateLesson)
  .get(authorization, getLesson)
  .delete(authorization, Forbidden, deleteLesson);
export { router };
