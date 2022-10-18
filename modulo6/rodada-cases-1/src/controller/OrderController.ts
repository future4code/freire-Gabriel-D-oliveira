import { Request, Response } from "express";
import { OrderBusinnes } from "../business/OrderBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateOrderInputDTO } from "../models/Order";

export class OrderController {
  constructor(private orderBusiness: OrderBusinnes) {}

  public createOrder = async (req: Request, res: Response) => {
    try {
      const input: ICreateOrderInputDTO = {
        pizzas: req.body.pizzas,
      };

      const response = await this.orderBusiness.createOrder(input);
      res.status(201).send(response);
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado ao criar show" });
    }
  };

  public getOrders = async (req: Request, res: Response) => {
    try {
      const response = await this.orderBusiness.getOrders();
      res.status(201).send(response);
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send(error.message);
      }
      return res
        .status(500)
        .send({ message: "Error inesperado ao procurar os pedidos" });
    }
  };
}
