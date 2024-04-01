import express from "express";
import { authorization } from "../MiddleWare/Authorization";
import { Forbidden } from "../MiddleWare/Forbidden";
import { CourseChecker } from "../MiddleWare/Course-checker/Course.middleware";
import {
  AssessmentPost,
  getAssessMent,
} from "../Controller/assessment.controller";
import { Addcourse } from "../MiddleWare/AddCourse";

const router = express.Router();

router
  .route("/assessment/:id")
  .post(authorization, Forbidden, CourseChecker, AssessmentPost, Addcourse)
  .get(authorization, getAssessMent);

export { router };
