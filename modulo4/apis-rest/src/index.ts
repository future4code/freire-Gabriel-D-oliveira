import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const serve = app.listen(3003, () => {
  console.log("Server is running on http://localhost:3003");
});

let errorStatus: number = 404;

enum UserType {
  ADMIN = "admin",
  NORMAL = "normal",
}

type user = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];

// Exercicio 1

// A) Usaria o método GET
// B) Indicaria a entididade como '/users'

// app.get("/users", (req, res) => {
//   try {
//     const userList = users;
//     if (!userList.length) {
//       throw new Error("Lista de usuários não encontrada");
//     }
//     res.status(200).send(userList);
//   } catch (err) {
//     switch (err.message) {
//       case "Lista de usuários não encontrada":
//         res.status(errorStatus).send(err.message);
//         break;

//       default:
//         return res
//           .status(500)
//           .send("Erro inesperado favor contatar o responsável");
//     }
//   }
// });

// Exercicio 2

// A) Passei o paramentro type via path params, pois creio que torna mais claro para o requisitante qual informação ele precisa passar
// B) Sim, usando uma comparação com os types recebidos dos usuários e o parametro passado pelo requisitante

app.get("/users/:type", (req, res) => {
  try {
    const typeOfUser: string = req.params.type as string;

    if ((typeOfUser !== "admin") && (typeOfUser !== "normal")) {
      errorStatus = 422;
      throw new Error("Tipo de usuário não existente");
    }

    const userList = users.filter((user) => {
      if (user.type.toString() === typeOfUser.toLowerCase()) {
        return user;
      }
    });

    if (!userList.length) {
      errorStatus = 404;
      throw new Error("Lista de usuários não encontrada");
    }

    if (!typeOfUser) {
      errorStatus = 422;
      throw new Error("Favor inserir o tipo do usuário");
    }

    res.status(200).send(userList);
  } catch (err) {
    switch (err.message) {
      case "Lista de usuários não encontrada":
        res.status(errorStatus).send(err.message);
        break;

      case "Tipo de usuário não existente":
        res.status(errorStatus).send(err.message);
        break;

      default:
        res.status(500).send("Erro inesperado favor contatar o responsável");
    }
  }
});

// Exercicio 3

app.get("/users", (req, res) => {
  try {
    const name: string = req.query.name as string;

    const userList = users.filter((person) => {
      return person.name.toLowerCase() === name.toLowerCase();
    });

    if (!userList.length) {
      throw new Error("Lista de usuários não encontrada");
    }
    res.status(200).send(userList);
  } catch (err) {
    switch (err.message) {
      case "Lista de usuários não encontrada":
        res.status(errorStatus).send(err.message);
        break;

      default:
        return res
          .status(500)
          .send("Erro inesperado favor contatar o responsável");
    }
  }
});

// Exercicio 4
