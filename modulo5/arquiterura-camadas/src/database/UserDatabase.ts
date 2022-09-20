import { User, UserDTO, UserProfile } from "../models/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  public static TABLE_USERS = "Arq_Users";

  async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.getConnetion()
      .select("*")
      .from(UserDataBase.TABLE_USERS)
      .where({ email });

    if (!result.length) {
      return undefined;
    }

    return new User(
      result[0].id,
      result[0].nome,
      result[0].email,
      result[0].password,
      result[0].role
    );
  }

  async createUser(user: User): Promise<string> {
    await this.getConnetion()
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole().toUpperCase(),
      })
      .into(UserDataBase.TABLE_USERS);

    return "Usuário cadastrado!";
  }

  async getAllUsers(): Promise<UserProfile[] | any> {
    const result = await this.getConnetion()
      .select("*")
      .from(UserDataBase.TABLE_USERS);

    const usersArray: UserProfile[] = result.map((user) => {
      return { id: user.id, nome: user.name, email: user.email };
    });

    return usersArray;
  }

  async getUserById(userId: string): Promise<UserProfile | any> {
    const result = this.getConnetion()
      .select("*")
      .where({ id: userId })
      .from(UserDataBase.TABLE_USERS);

    return result;
  }

  async deleteUserById(id: string): Promise<string> {
    const result = await this.getConnetion()
      .delete()
      .from(UserDataBase.TABLE_USERS)
      .where({ id });

    return "Usuário deletado com sucesso";
  }
}
