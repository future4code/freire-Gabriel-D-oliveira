import {Request, Response} from 'express';
import { request } from 'http';
import insertUser from '../data/insertUser';

export default async function createUser(req:Request, res:Response){
    try {
        const {nome, nick_name, email} = req.body;
        const id = Date.now()
        if(!nome || !nick_name || !email ){
            throw new Error ("Inserir os dados necessarios para cadastrar um usuário: nome, nickName, email")
        }
        const user = await insertUser({nome, nick_name, email, id})

        res.status(200).send("usuário criado com sucesso")
    } catch (error:any) {
        res.status(404).send(error.message || error.mysql)
    }

}