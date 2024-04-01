import mongoose, { model, Schema } from "mongoose";

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
  completed: [{ type: Schema.Types.ObjectId, ref: "user" }],
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course", // Reference to the Course model
  },
});

export const Assessment = model("assessment", assessmentSchema);
