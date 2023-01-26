import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IUserDB, User, USER_ROLES } from "../../src/models/User";

export class UserDatabaseMock extends BaseDatabase {
  public static TABLE_USERS = "Labook_Users";

  public toUserDBModel = (user: User): IUserDB => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };

    return userDB;
  };

  public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    switch (email) {
      case "mithrandir@gmail.com":
        const normalUser: IUserDB = {
          id: "idMock",
          name: "Gandalf the Grey",
          email: "mithrandir@gmail.com",
          password: "hashPassword",
          role: USER_ROLES.NORMAL,
        };
        return normalUser;

      case "testAdmin@mock.com":
        const adminUser: IUserDB = {
          id: "idMock",
          name: "adminMock",
          email: "testAdmin@mock.com",
          password: "hashPassword",
          role: USER_ROLES.ADMIN,
        };

        return adminUser;

      default:
        return undefined;
    }
  };

  public createUser = async (user: User): Promise<void> => {};
}
