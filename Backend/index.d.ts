export interface Auth {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

import { Express } from "express-serve-static-core";
import mongoose from "mongoose";
declare module "express-serve-static-core" {
  interface Request {
    auth?: Auth;
    courseId?: mongoose.Types.ObjectId;
    lessonId?: mongoose.Types.ObjectId;
    assessmentId?: mongoose.Types.ObjectId;
    replyID?: mongoose.Types.ObjectId;
  }
}
// declare global {
//   namespace Express {
//     export interface Request {
//       auth?: Auth;
//     }
//   }
// }
