import { Request, Response } from "express";
import { connection } from "../data/connection";
import { selectAllConditions } from "../data/selectAllConditions";

export async function getAllEndpoints(
  req: Request,
  res: Response
): Promise<void> {
  try {
    let page = Number(req.query.page);
    let { sort, order } = req.query;
    let type = req.params.type;
    let name = req.query.name as string;

    if (page < 1 || !page) {
      page = 1;
    }

    if (sort !== "name" && sort !== "type") {
      sort = "name";
    }

    if (order !== "asc" && order !== "desc") {
      order = "desc";
    }

    if (!type || type =="") {
      type = "all";
    }

    const users = await selectAllConditions(page, sort, order, type, name);

   //  if (type && users.length < 1) {
   //    throw new Error("No users found");
   //  }

    res.status(200).send(users);
  } catch (error: any) {
    res.status(422).send(error.message || error.message.mysql);
  }
}
