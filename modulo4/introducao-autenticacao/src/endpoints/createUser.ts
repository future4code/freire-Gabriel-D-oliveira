import { Request, Response } from "express";
import connection from "../connection";
import insertUserFunction from "../data/insertUserFunction";
import { generateId } from "../services/GenerateId";
import { User } from "../types/user";

export async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !email.includes("@")) {
      res.statusCode = 422;
      throw new Error("Email inserido inválido, pois não possui @");
    }

    // const emailVerification: string | string[] = await connection("UserTable")
    //   .select("email")
    //   .from("UserTable")
    //   .where(`email like "%${email as string}%"`);

    // if (emailVerification.includes(email as string)) {
    //   throw new Error("Email já cadastrado");
    // }

    if (!password || password.length < 6) {
      res.statusCode = 422;
      throw new Error("A senha deve conter 6 ou mais caracteres");
    }

    const newId: string = generateId();

    await insertUserFunction(newId, email, password);

    res.status(201).send("Usuário criado com sucesso!");
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
}
