import connection from "../connection";
import { User } from "../types/user";

const selectIdUser = async (id: string): Promise<any> => {
  try {
    const result = await connection("UserTable")
      .select("id", "email")
      .from("UserTable")
      .where({ id });
    return result;
  } catch (error: any) {
    return `Error ao encontrar o usuário:${error.message}`;
  }
};

export default selectIdUser;