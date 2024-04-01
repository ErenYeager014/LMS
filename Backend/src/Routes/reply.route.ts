import express from "express";
import { authorization } from "../MiddleWare/Authorization";
import { getReply, PostReply } from "../Controller/reply.controller";
import { addreply } from "../MiddleWare/BlogPush";

const router = express.Router();

router
  .route("/reply/:id")
  .get(authorization, getReply)
  .post(authorization, PostReply, addreply);

export { router };
