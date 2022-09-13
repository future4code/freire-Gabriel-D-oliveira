import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/generateToken";


export default async function signUp(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !email.includes("@")) {
      res.statusCode = 422;
      throw new Error("Email inserido inválido, pois não possui @");
    }

    if (!password || password.length < 6) {
      res.statusCode = 422;
      throw new Error("A senha deve conter 6 ou mais caracteres");
    }

    const [userId] = await connection("UserTable").select("id").from("UserTable").where({ email });

    if (!userId) {
      res.statusCode = 404;
      throw new Error("Usuário não cadastrado!");
    }

     const token = generateToken({id: userId});

    res.status(201).send(`Token gerado pelo jwt:  ${token}`);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
}
