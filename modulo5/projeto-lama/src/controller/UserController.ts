import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { ILoginInputDTO, ISignupInputDTO } from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.signup(input);

      res.status(201).send(response);
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send(error.message);
      }
      return res.status(500).send("Erro inesperado ao cadastrar o usuário");
    }
  };

  public login = async(req: Request, res: Response) =>{
    try {
        const input:ILoginInputDTO = {
            email: req.body.email,
            password: req.body.password
        }

        const response = await this.userBusiness.login(input);
        res.status(201).send(response)
    } catch (error) {
        if(error instanceof BaseError){
            return res.status(error.statusCode).send(error.message)
        }
        return res.status(500).send("Erro inesperado ao realizar o login");
    }
  }
}
