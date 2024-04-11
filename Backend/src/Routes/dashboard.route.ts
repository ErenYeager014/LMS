import express from "express";
import { authorization } from "../MiddleWare/Authorization";
import { dashboard } from "../Controller/dashboard.controller";

const router = express.Router();

router.route("/dashboard").get(authorization, dashboard);

export { router };
