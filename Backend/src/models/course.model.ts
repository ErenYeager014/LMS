import { model, Schema } from "mongoose";

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: {
    data: { type: Buffer, required: true },
    contentType: String,
  },
  instructor: { type: Schema.Types.ObjectId, ref: "user", required: true },
  students: [{ type: Schema.Types.ObjectId, ref: "user" }],
  lessons: [{ type: Schema.Types.ObjectId, ref: "lesson" }],
  createdAt: { type: Date, default: Date.now },
  tags: [{ type: String }],
  assessment: [{ type: Schema.Types.ObjectId, ref: "assessment" }],
});
export const course = model("course", courseSchema);
