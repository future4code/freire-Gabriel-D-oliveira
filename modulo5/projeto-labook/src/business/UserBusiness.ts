import { UserDatabase } from "../database/UserDatabase";
import {
  ILoginInputDTO,
  ILoginOutputDTO,
  ISignupInputDTO,
  ISignupOutputDTO,
  User,
  USER_ROLES,
} from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { ParamsError } from "../errors/ParamsError";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { AuthenticationError } from "../errors/AuthenticationError";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (input: ISignupInputDTO): Promise<ISignupOutputDTO> => {
    const { name, email, password } = input;

    if (!name || !email || !password) {
      throw new ParamsError();
    }

    if (typeof name !== "string" || name.length < 3) {
      throw new ParamsError();
    }

    if (typeof password !== "string" || password.length < 6) {
      throw new ParamsError();
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new ParamsError();
    }

    const emailVerification = await this.userDatabase.findByEmail(email);

    if (emailVerification) {
      throw new ConflictError();
    }

    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashedPassword, USER_ROLES.NORMAL);

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response: ISignupOutputDTO = {
      message: "Usuário cadastrado com sucesso!",
      token,
    };

    return response;
  };

  public login = async (input: ILoginInputDTO): Promise<ILoginOutputDTO> => {
    const { email, password } = input;

    if (!email || !password) {
      throw new ParamsError();
    }

    if (
      typeof email !== "string" ||
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new ParamsError();
    }

    if (typeof password !== "string" || password.length < 6) {
      throw new ParamsError();
    }

    const userVerification = await this.userDatabase.findByEmail(email);

    if (!userVerification) {
      throw new NotFoundError();
    }

    const user = new User(
      userVerification.id,
      userVerification.name,
      userVerification.email,
      userVerification.password,
      userVerification.role
    );

    const passwordVerification = await this.hashManager.compare(
      password,
      user.getPassword()
    );

    if (!passwordVerification) {
      throw new AuthenticationError();
    }

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response: ILoginOutputDTO = {
      message: "Login realizado com sucesso!",
      token,
    };

    return response;
  };
}
