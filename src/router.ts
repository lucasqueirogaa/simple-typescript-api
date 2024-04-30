import { Router } from "express";
import { createMovie } from "./controllers/movieController";

import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router.post(
  "/movie",
  movieCreateValidation(),
  validate,
  createMovie
);
