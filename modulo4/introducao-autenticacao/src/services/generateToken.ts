import * as jwt from "jsonwebtoken";
import { Authentication } from "../types/AuthenticationType";

export function generateToken(userId: Authentication) {
  const token = jwt.sign({ id: userId.id }, process.env.JWT_KEY as string, {
    expiresIn: "20min",
  });

  return token
}
