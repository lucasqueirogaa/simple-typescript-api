require("dotenv").config();

import dotenv from "dotenv";
import express from "express";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morgan";

import router from "./router";

const app = express();
app.use(express.json());
app.use(morganMiddleware);
app.use(router);
dotenv.config();

app.listen(process.env.PORT, async () => {
  await db();
  Logger.info(`Aplicação esta funcionando na porta ${process.env.PORT}`);
});
