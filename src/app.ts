import dotenv from "dotenv";
import express from "express";

const app = express();
app.use(express.json());
dotenv.config();

app.listen(process.env.PORT, async () => {
  console.log(`Aplicação esta funcionando na porta ${process.env.PORT}`);
});
