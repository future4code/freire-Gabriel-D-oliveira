import { user } from "../types";
import express, { Response, Request } from "express";
import selectAllUsers from "../data/selectAllUsers";

export default async function getUsers(
  req: Request,
  res: Response
): Promise<user[] | any> {
  try {
    const users = await selectAllUsers();
    if (!users || users.length < 1) {
      throw new Error("Usuários não encontrados");
    }

    res.status(200).send(users);
  } catch (error: any) {
    res.status(404).send(error.message || error.message.mysql);
  }
}
