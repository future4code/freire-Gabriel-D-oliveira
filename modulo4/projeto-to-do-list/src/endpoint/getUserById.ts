import { Request, Response } from "express";
import { request } from "http";
import {selectUserById, UserId} from "../data/selectUserById";
import { connection } from "../data/dataBase";

export default async function getUserById(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    if (!id) {
      throw new Error("Favor inserir o id do usuário");
    }
    // if(id !== await await connection("Users").id){
    //     throw new Error("O id do usuário informado não existe") 
    // }
    const result = await selectUserById(id);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(404).send(error.message || error.mysql);
  }
}
