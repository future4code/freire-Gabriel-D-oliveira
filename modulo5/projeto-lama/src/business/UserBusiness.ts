import { UserDatabase } from "../database/UserDatabase";
import { AuthenticationError } from "../errors/AuthenticationError";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
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

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (input: ISignupInputDTO): Promise<ISignupOutputDTO> => {
    const { name, email, password } = input;

    if (typeof name !== "string") {
      throw new ParamsError("Parametro 'name' inválido");
    }

    if (typeof email !== "string") {
      throw new ParamsError("Parametro 'email' inválido");
    }

    if (typeof password !== "string") {
      throw new ParamsError("Parametro 'password' inválido");
    }

    if (name.length < 3) {
      throw new ParamsError(
        "Parâmetro 'name' inválido: mínimo de 3 caracteres"
      );
    }

    if (password.length < 6) {
      throw new ParamsError(
        "Parâmetro 'password' inválido: mínimo de 6 caracteres"
      );
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido");
    }

    const emailAlreadyExists = await this.userDatabase.findByEmail(email);

    if (emailAlreadyExists) {
      throw new ConflictError("Email já cadastrado");
    }

    const id = this.idGenerator.generate();
    const hashPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashPassword, USER_ROLES.NORMAL);

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response: ISignupOutputDTO = {
      message: "Usuário criado com sucesso",
      token,
    };

    return response;
  };

  public login = async (input: ILoginInputDTO): Promise<ILoginOutputDTO> => {
    const { email, password} = input;

    if (typeof email !== "string") {
      throw new ParamsError("Parametro 'email' inválido");
    }

    if (typeof password !== "string") {
      throw new ParamsError("Parametro 'password' inválido");
    }

    if (password.length < 6) {
      throw new ParamsError(
        "Parametro 'password' inválido:  mínimo de 6 caracteres"
      );
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new ParamsError("Parâmetro 'email' inválido");
    }

    const userDB = await this.userDatabase.findByEmail(email);

    if (!userDB) {
      throw new NotFoundError("Usuário não encontrado");
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role
    )

    const passwordVerification = await this.hashManager.compare(password, user.getPassword())
     
    if(!passwordVerification){
      throw new AuthenticationError("Senha incorreta")
    }

    const payload:ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    }

    const token = this.authenticator.generateToken(payload)

    const response:ILoginOutputDTO = {
      message: "Login realizado com sucesso",
      token
    }

    return response
  };
}
