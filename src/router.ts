import { Router } from "express";
import { createMovie, findMovieById } from "./controllers/movieController";

import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById);
