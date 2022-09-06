import { Request, Response } from "express"
import { connection } from "../data/connection"


export async function getUsersByName(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const nome = req.query.nome;

      if(!nome){
         throw new Error("Favor inserir o nome do usuário na query params")
      }     

      const users = await connection("aula48_exercicio")
      .select('*')
      .from('aula48_exercicio')
      .where("name", "=", `${nome}`)

      if (users.length < 1) {
       throw new Error("No users found");
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.status(422).send(error.message || error.message.mysql)
   }
}
