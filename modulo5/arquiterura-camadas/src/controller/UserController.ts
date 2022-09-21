import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User, UserDTO } from "../models/User";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
  async signup(req: Request, res: Response) {
    try {
      const { nome, email, password, role } = req.body;

      const signupBusiness = new UserBusiness();

      const user: UserDTO = {
        nome,
        email,
        password,
        role,
      };

      const token = await signupBusiness.create(user);

      res.status(201).send({ message: token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const userBusiness = new UserBusiness();

      const token = await userBusiness.login(email, password);

      res.status(201).send({ message: token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getAllProfiles(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const searchByName = req.query.name;

      const userBusiness = new UserBusiness();

      const userProfile = await userBusiness.getAllProfiles(token);

      res.status(201).send(userProfile);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async deleteUserById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const userId = req.body.userId as string;

      const userBusiness = new UserBusiness();

      const deleteUser = userBusiness.deleteUserById(token, userId);

      res.status(201).send(deleteUser);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}
