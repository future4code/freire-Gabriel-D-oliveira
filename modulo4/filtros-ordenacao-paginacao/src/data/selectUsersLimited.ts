import { connection } from "./connection";

export async function selectUsersLimited(page: number): Promise<any> {
  const result = await connection("aula48_exercicio")
    .select("*")
    .from("aula48_exercicio")
    .limit(5)
    .offset(5 * (page - 1));

  return result;
}
