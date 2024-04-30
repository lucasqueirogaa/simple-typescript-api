import { Request, Response } from "express";

export async function createMovie(req: Request, res: Response) {
  return res.status(200).send("Deu certo o controller");
}
