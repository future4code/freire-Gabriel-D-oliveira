import { connection } from "./connection"

export async function selectUsersOrdered(sort: string, order: string,): Promise<any> {

    const result = await connection("aula48_exercicio")
    .select('*')
    .from('aula48_exercicio')
    .orderBy(`${sort}`,`${order}` )
 
    return result
 }