import { connection } from "./dataBase";

export async function selectUserById(id: string) {
  const result = await connection("Users").select('*').from("Users").where({"id": id});
   
  return result[0];
}

export async function UserId(id: string){
    const result = await connection("Users").select('id').from("Users").where({"id": id});
      
    return result[0];
  }

  console.log(UserId("1"))

//   funcao teste (id: string) {
//         return connection("Users").select('*').from("Users").where({"id": id});
//   }