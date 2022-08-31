import { Request, Response } from "express"
import { connection } from "../data/connection";


export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type;

        if(!type){
            throw new Error("Favor inserir o parametro type")
        }

        const users = await connection('aula48_exercicio')
        .select('*')
        .from('aula48_exercicio')
        .where('type', '=', `${type}`)

        if(users.length < 1){
            throw new Error("Nenhum usuário encontrado com type informado.")
        }
        
        res.status(200).send(users)
    } catch (error: any) {
        res.status(404).send(error.message || error.message.mysql)
    }
}