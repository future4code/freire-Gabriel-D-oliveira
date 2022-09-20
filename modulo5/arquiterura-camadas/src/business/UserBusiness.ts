import { sensitiveHeaders } from "http2";
import { UserDataBase } from "../database/UserDatabase";
import { User, UserDTO } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  async create(userDTO: UserDTO): Promise<string> {
    const { nome, email, password, role } = userDTO;

    if (!nome || !email || !password || !role) {
      throw new Error("Os campos devem ser preenchidos!");
    }

    if (nome.length < 3) {
      throw new Error("O nome deve conter no mínimo 3 caracteres");
    }

    if (password.length < 6) {
      throw new Error("A senha deve conter no mínimo 6 caracteres");
    }

    if (!email.includes("@")) {
      throw new Error("O email deve conter o caractere '@' em seu formato!");
    }

    const userData = new UserDataBase();

    const emailVerification = await userData.getUserByEmail(email);

    if (emailVerification) {
      throw new Error("Email já cadastrado!");
    }

    const id = new IdGenerator().generate();

    const hashPassword = await new HashManager().hash(password);

    const user = new User(id, nome, email, hashPassword, role);

    const response = await userData.createUser(user);

    const token = new Authenticator().generateToken({ id, role });

    return token;
  }

  async login(email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new Error("Os campos devem ser preenchidos!");
    }

    if (password.length < 6) {
      throw new Error("A senha deve conter no mínimo 6 caracteres");
    }

    if (!email.includes("@")) {
      throw new Error("O email deve conter o caractere '@' em seu formato!");
    }

    const userData = new UserDataBase();

    const user = await userData.getUserByEmail(email);

    if (!user) {
      throw new Error("Não foi encontrado o usuário com o email fornecido");
    }

    const passwordVerification = await new HashManager().compare(
      password,
      user.getPassword()
    );

    if (!passwordVerification) {
      throw new Error("Senha incorreta!");
    }

    const token = new Authenticator().generateToken({
      id: user.getId(),
      role: user.getRole(),
    });

    return token;
  }

  async getAllProfiles(token: string): Promise<UserDTO[] | any> {
    if (!token) {
      throw new Error("Token inválido");
    }

    const tokenUser = new Authenticator().getTokenPayload(token);

    if (!tokenUser) {
      throw new Error("Token inválido");
    }

    const userData = new UserDataBase();

    const result = userData.getAllUsers();

    return result;
  }

  async deleteUserById(token: string, id: string): Promise<string> {
    if (!token) {
      throw new Error("Token inválido");
    }

    if (!id) {
      throw new Error("Preencher o campo 'ID' ");
    }

    const tokenData = new Authenticator().getTokenPayload(token);

    if (!tokenData) {
      throw new Error("Token inválido");
    }

    if (tokenData.role.toLocaleLowerCase() !== "admin") {
      throw new Error("Apenas Administradores podem deletar um usuário");
    }

    const userData = new UserDataBase();

    const userIdVerification = await userData.getUserById(id);

  
    if(!userIdVerification.length){
        throw new Error(`Não existe usuário com este id: ${id}`)
    }

    const result = await userData.deleteUserById(id);

    if(result !== "Usuário deletado com sucesso"){
        throw new Error(`Não foi possível deletar o usuário`)
    }
    
    return "Usuário deletado com sucesso";
  }
}
