import { connection } from "../connection";
import { user } from "../types";

export const insertUser = async (body: user): Promise<void> => {
  try {
    await connection('labecommerce_users')
      .insert({
        id: body.id,
        name: body.name,
        email: body.email,
        password: body.password
      })
      .into('labecommerce_users');
    console.log("Usuário criado");
  } catch (err) {
    console.log(err);
  }
};
