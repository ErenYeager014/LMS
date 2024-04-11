import mongoose, { model, Schema } from "mongoose";
import { boolean } from "zod";

const assessmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  expireDate: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // Duration in minutes
    required: true,
  },
  questions: [
    {
      questionText: {
        type: String,
        required: true,
      },
      options: [String], // Array of options for the question
      correctAnswer: {
        type: String,
        required: true,
      },
    },
  ],
  by: { type: Schema.Types.ObjectId, ref: "user", required: true },
  completed: [
    {
      id: { type: Schema.Types.ObjectId, ref: "user" },
      score: { type: Number, default: 0 },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },
  ],
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course", // Reference to the Course model
    required: true,
  },
});

export const Assessment = model("assessment", assessmentSchema);
