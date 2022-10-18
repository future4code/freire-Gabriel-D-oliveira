import { Request, Response } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";
import { BaseError } from "../errors/BaseError";

export class PizzaController {
  constructor(private pizzaBusiness: PizzaBusiness) {}

  public getPizzas = async (req: Request, res: Response) => {
    try {
      const response = await this.pizzaBusiness.getPizzas();
      res.status(201).send(response);
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado ao buscar as pizzas" });
    }
  };
}
