import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    title: { type: String },
    rating: { type: Number },
    description: { type: String },
    starts: { type: Array },
    poster: { type: String },
  },
  {
    timestamps: true,
  }
);

export const MovieModel = model("Movie", movieSchema);
