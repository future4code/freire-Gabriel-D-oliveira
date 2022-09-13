import { Request, Response } from "express";
import connection from "../connection";
import { AuthenticationData, user } from "../types";
import { GenerateId } from "../services/GenerateId";
import { Authenticator } from "../services/Authenticator";
import  HashManager  from "../services/HashManager";


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role} = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os parametros 'name','nickname', 'password' e 'email'")
      }
      
      const [user] = await connection('UserTable')
         .where({ email })
   
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      
      const uuidClass = new GenerateId()
      const id:string = uuidClass.generateId()
      
      //Hasheando o valor
      const instanceHash = new HashManager()
      const hash = await instanceHash.generateHash(password)

      const newUser: user = { 
         id, 
         name, 
         nickname, 
         email, 
         password:hash,
         role }

      await connection('UserTable')
         .insert(newUser)
  
      
      const newToken = new Authenticator()
      const token = newToken.generateToken({id, role})

      res.status(201).send({ newUser,token })

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: error.message})
      } else {
         res.send({ message: error.message })
      }
   }
}