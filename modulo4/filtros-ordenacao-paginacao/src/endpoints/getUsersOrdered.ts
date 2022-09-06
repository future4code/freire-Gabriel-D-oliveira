import { Request, Response } from "express";
import { connection } from "../data/connection";
import { selectUsersOrdered } from "../data/selectUsersOdered";

export async function getUsersOrdered(
  req: Request,
  res: Response
): Promise<void> {
  try {
    let { order, sort } = req.query;

    if (sort !== "name" && sort !== "type") {
      sort = "email";
    }

    if (order !== "asc" && order !== "desc") {
      order = "asc";
    }

    const users = await selectUsersOrdered(sort, order);

    if (users.length < 1) {
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    res.status(422).send(error.message || error.message.mysql);
  }
}
