import { Request, Response } from "express";
import connection from "../connection";
import { AuthenticationData, user } from "../types";
import { GenerateId } from "../services/GenerateId";
import { Authenticator } from "../services/Authenticator";
import HashManager  from "../services/HashManager";

export default async function getProfile (req:Request, res:Response) {
try{
    const token= req.headers.authorization

    if (!token){
        res.statusCode = 409
        throw new Error("Tonken não enviado")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    const [user] = await connection('UserTable')
    .where({id: tokenData.id})

    if(!user){
        throw new Error("Usuário não encontrado")
    }

    if(user.role !== "NORMAL"){
        throw new Error("Somente usuários 'NORMAIS' podem acessar essa informação")
    }



    res.status(200).send({
        user

    })
            }catch (error:any){
                res.status(res.statusCode).send(error.message)
            } 

    
}