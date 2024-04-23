import dotenv from "dotenv";
import express from "express";
import db from "../config/db";

const app = express();
app.use(express.json());
dotenv.config();

app.listen(process.env.PORT, async () => {
  await db();
  console.log(`Aplicação esta funcionando na porta ${process.env.PORT}`);
});
