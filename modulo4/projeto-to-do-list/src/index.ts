import express from "express";
import cors from "cors";
import { ppid } from "process";
import createUser from "./endpoint/createUser";
import getUserById from "./endpoint/getUserById";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  if (server) {
    console.log("Server is running on port 3003");
  } else {
    console.log("Error upon starting server");
  }
});

app.post('/users', createUser);

app.get('/users/:id', getUserById);
