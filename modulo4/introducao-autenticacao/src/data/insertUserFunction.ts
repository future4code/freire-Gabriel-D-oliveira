import { Request, Response } from "express";
import connection from "../connection";

const insertUserFunction = async (
  id: string,
  email: string,
  password: string
): Promise<void> => {
  try {
   
    await connection().insert({ id, email, password }).into("UserTable");

    console.log("Usuário criado com sucesso!");
  } catch (error: any) {
    console.log("Erro ao criar o usuário!");
  }
};

export default insertUserFunction;
