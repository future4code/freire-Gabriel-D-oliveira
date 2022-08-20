import express from "express";
import cors from "cors";
import { accountList, type account, type transacoes } from "./data";
import { request } from "http";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

const listaContas = accountList
// nome: string;
// cpf: string;
// dataNascimento: string;
// saldo: number;
// transacoes?:

app.post("/users", (req, res) => {
  try {
    
    const { nome, cpf, dataNascimento } = req.body;

    const newAccount: account = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      saldo: 0,
      transacoes: [],
    };

    listaContas.push(newAccount);
    res.status(200).send(listaContas);
  } catch {
    res.status(500).send("Erro desconhecido");
  }
})


app.get("/users", (req, res) => {
    try {
        res.status(200).send(listaContas);
    }catch {
        console.log("Error")
    }
})



