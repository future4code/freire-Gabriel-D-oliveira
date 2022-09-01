import { connection } from "./connection";

export async function selectAllConditions(
  page: number,
  sort: string,
  order: string,
  type: string | undefined,
  name: string | undefined
): Promise<any> {
  if (type && !name) {
    const result = await connection("aula48_exercicio")
      .select("*")
      .from("aula48_exercicio")
      .orderBy(`${sort}`, `${order}`)
      .where("type", "=", `${type}`)
      .limit(5)
      .offset(5 * (page - 1));

    return result;
 
  } else {
    const result = await connection("aula48_exercicio")
      .select("*")
      .from("aula48_exercicio")
      .orderBy(`${sort}`, `${order}`)
      .where("name", "=", `${name}`)
      .andWhere("type", "=", `${type}`)
      .limit(5)
      .offset(5 * (page - 1));

    return result
  }
}
