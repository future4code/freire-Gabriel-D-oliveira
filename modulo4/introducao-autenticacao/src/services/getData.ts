import * as jwt from "jsonwebtoken";
import { Authentication } from "../types/AuthenticationType";

function getData(token: string): Authentication {
  const payload = jwt.verify( token , process.env.JWT_KEY as string) as any;

  const result = {id: payload.id}

  return result.id
}

export default getData