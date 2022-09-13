import { Request, Response } from "express";
import connection from "../connection";
import { AuthenticationData, user } from "../types";
import { GenerateId } from "../services/GenerateId";
import { Authenticator } from "../services/Authenticator";
import HashManager from "../services/HashManager";
import { info } from "console";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha seu email e senha");
    }

    const [user] = await connection("UserTable").where({ email });

    if(!user){
        throw new Error("Usuário não encontrado")
    }

    const instanceHash = new HashManager();
    const compareHash = instanceHash.compareHash(password, user.password)

    if (!compareHash) {
      res.statusCode = 409;
      throw new Error("Credencias inválidas");
    }

    const newToken = new Authenticator();
    const token = newToken.generateToken({ id: user.id, role: user.role });

    res.status(200).send(token);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
