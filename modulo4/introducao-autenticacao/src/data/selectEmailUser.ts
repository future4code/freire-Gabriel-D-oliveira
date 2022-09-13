import connection from "../connection";
import { User } from "../types/user";

const selectEmailUser = async (email: string): Promise<any> => {
  try {
    const result = await connection("UserTable")
      .select("*")
      .from("UserTable")
      .where({ email });
    return result;
  } catch (error: any) {
    return `Error ao encontrar o usuário:${error.message}`;
  }
};

export default selectEmailUser;