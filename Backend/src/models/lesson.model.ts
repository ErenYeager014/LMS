import { model, Schema } from "mongoose";

const lessonSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  file: { type: String }, // Array of file paths
  course: { type: Schema.Types.ObjectId, ref: "course", required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Lesson = model("Lesson", lessonSchema);
