import { model, Schema } from "mongoose";

const reply = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  blogID: {
    type: Schema.Types.ObjectId,
    ref: "blog",
    required: true,
  },
  content: {
    type: String,
    requied: true,
  },
});

export const replyModel = model("reply", reply);
