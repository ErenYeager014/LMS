import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  replay: [
    {
      type: Schema.Types.ObjectId,
      ref: "reply",
    },
  ],
  created_at: { type: Date, default: Date.now() },
});

export const Blog = model("blog", blogSchema);
