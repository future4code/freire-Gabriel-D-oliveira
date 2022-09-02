import express, { Response, Request } from "express";
import { insertUser } from "../data/insertUser";
import { user } from "../types";

export default async function registerUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
      throw new Error(
        "Verificar se os parametros foram preenchidos: name, email, password"
      );
    }
    const id = Date.now().toString();

    const user = insertUser({ id, name, email, password});

    res.status(201).send({ id, name, email, password });
  } catch (error: any) {
    res.status(422).send(error.message || error.message.mysql);
  }
}
