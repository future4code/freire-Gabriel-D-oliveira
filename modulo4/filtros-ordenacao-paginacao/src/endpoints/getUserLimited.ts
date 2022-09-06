import { Request, Response } from "express"
import { connection } from "../data/connection"
import { selectUsersLimited } from "../data/selectUsersLimited";


export async function getUsersLimited(
   req: Request,
   res: Response
): Promise<void> {
   try {
      let page = Number(req.query.page);

      if(page < 1 || !page){
         page = 1
      }     

      const users = await selectUsersLimited(page)

      if (users.length < 1) {
       throw new Error("No users found");
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.status(422).send(error.message || error.message.mysql)
   }
}
