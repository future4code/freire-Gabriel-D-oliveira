import { connection } from "./dataBase";

export default async function insertUser(body: object) {
  const result = await connection("Users").insert(body).into("Users");

  return "Sucess";
}
