import { connection } from "./connection"

export async function selectAllUsers(): Promise<any> {

    const result = await connection("aula48_exercicio")
    .select('*')
    .from('aula48_exercicio')
    
 
    return result
 }