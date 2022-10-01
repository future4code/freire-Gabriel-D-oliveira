import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateShowInputDTO } from "../models/Show";

export class ShowController {
  constructor(private showBusiness: ShowBusiness) {}

  public createShow = async (req: Request, res: Response) => {
    try {
      const input: ICreateShowInputDTO = {
        token: req.headers.authorization as string,
        band: req.body.band,
        starts_at: req.query.starts_at as string,
      };
      const response = await this.showBusiness.createShow(input);
      res.status(201).send(response);
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send(error.message);
      }
      return res.status(500).send("Erro inesperado ao criar um show");
    }
  };
}
