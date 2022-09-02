import { connection } from "../connection";
import { user } from "../types";

export default async function selectAllUsers(): Promise<user[]> {
  const allUsers = await connection('labecommerce_users')
  .select('*')
  .from('labecommerce_users');

  return allUsers;
}
