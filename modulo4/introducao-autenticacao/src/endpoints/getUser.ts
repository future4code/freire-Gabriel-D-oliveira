import { Request, Response } from "express";
import selectIdUser from "../data/selectIdUser";
import getData from "../services/getData";
import { User } from "../types/user";

async function getUser(req: Request, res: Response): Promise<any> {
  try {
    const authorizationToken = req.headers.authorization;

    if (!authorizationToken) {
      throw new Error("Não autorizado!");
    }

    const idUser = getData(authorizationToken).id;

    console.log(idUser);

    const [resultUser] = await selectIdUser(idUser);

    if (!resultUser) {
      throw new Error("Usuário não encontrado!");
    }

    res.status(201).send(resultUser);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export default getUser;
