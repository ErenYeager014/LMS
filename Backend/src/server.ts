import express from "express";
import { config } from "dotenv";
import { ErrorController } from "./Error/Error";
import { router as user } from "./Routes/user.Route";
import { router as course } from "./Routes/Course.route";
import { dbconnection } from "./Helper/Db.connection";
import { router as lesson } from "./Routes/lesson.route";
import { router as blog } from "./Routes/blog.route";
import { router as reply } from "./Routes/reply.route";
import { router as assessment } from "./Routes/assessment.route";
import cors from "cors";
const app = express();

config();

const port: number = parseInt(process.env.PORT || "8080");

const DB_URL: string = process.env.DB_URL || "";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", [user, course, lesson, blog, reply, assessment]);
app.use(ErrorController);

app.listen(port, () => {
  console.log(`app is listening at http:/localhost:${port}`);
  dbconnection(DB_URL);
});
