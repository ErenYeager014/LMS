import { authorization } from "../MiddleWare/Authorization";
import {
  createCourse,
  getAllcourse,
  getCourse,
  updateCourse,
  deleteCourse,
  enrollCourse,
  mycourse,
} from "../Controller/Course.controller";
import { upload } from "../Helper/Files";
import express from "express";
import { Forbidden } from "../MiddleWare/Forbidden";
import { CourseChecker } from "../MiddleWare/Course-checker/Course.middleware";
import { courseAdd } from "../MiddleWare/CourseSave";

const router = express.Router();

router
  .route("/course")
  .post(authorization, Forbidden, upload.single("thumbnail"), createCourse)
  .get(getAllcourse);

router
  .route("/course/:id")
  .get(authorization, getCourse)
  .put(
    authorization,
    Forbidden,
    CourseChecker,
    upload.single("thumbnail"),
    updateCourse
  )
  .delete(authorization, Forbidden, CourseChecker, deleteCourse);
router.route("/course/enroll").post(authorization, enrollCourse, courseAdd);
router.route("/mycourse").get(authorization, mycourse);
export { router };
