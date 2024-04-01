import { model, Schema } from "mongoose";

const userschema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    default: "student",
  },
  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  createdAt: { type: Date, default: Date.now },
});

export const User = model("user", userschema);
