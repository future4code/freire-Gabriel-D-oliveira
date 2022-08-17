import express from "express";
import cors from "cors";
import { request } from "http";
import { info } from "console";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

// Exercicio 1

app.get("/ping", (req, res) => {
  res.send("pong");
});

// Exercicio 2

type toDoList = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// Exercicio 3

const arrayChores: toDoList[] = [
  {
    userId: 1,
    id: 1,
    title: "Estudar",
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    title: "Lavar a louça",
    completed: false,
  },
  {
    userId: 2,
    id: 1,
    title: "Fazer exrcício físico",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "Varrer a casa",
    completed: true,
  },
  {
    userId: 3,
    id: 1,
    title: "Fazer a feira",
    completed: false,
  },
];

// Exercicio 4

app.get("/chores/:status", (req, res) => {
  const status = req.params.status;
  const copyListChores = arrayChores;
  if (status) {
    const filteredList = copyListChores.filter((chores) => {
      return chores.completed.toString() === status;
    });
    res.status(200).send(filteredList);
  } else {
    res.send("Favor informar o status da tarefa: true or false");
  }
});

// Exercicio 5

app.post("/chores", (req, res) => {
  const newChore: toDoList = {
    id: Date.now(),
    userId: Date.now(),
    title: req.body.title,
    completed: req.body.completed,
  };

  const newList = arrayChores;
  if (newChore) {
    newList.push(newChore);
    res.status(200).send(newList);
  } else {
    res.send("Favor preencher as informações solicitadas no body");
  }
});

// Exercicio 6

// lista tarefas -> id usuário ? -> id da tarefa ? -> mudar a propriedade completed

app.put("/chores/:userId/:id/status", (req, res) => {
  const userId = req.params.userId;
  const id = req.params.id;
  const changeChores = arrayChores;

  if (userId && id) {
    changeChores.map((chore) => {
      if (chore.userId.toString() === userId && chore.id.toString() === id) {
        res.status(200).send({
          id: chore.userId,
          userId: chore.userId,
          title: chore.title,
          completed: !chore.completed,
        });
      // } else {
      //   // res.status(200).send({
      //   //   id: chore.userId,
      //   //   userId: chore.userId,
      //   //   title: chore.title,
      //   //   completed: chore.completed,
      //   });
      }
    });
  } else {
    res.send(
      "Favor verificar se os parametros foram inseridos corretamente: id da tarefa e o id do usuário"
    );
  }
});

//   if (changeChores) {
//     res.status(200).send(changeChores);
//   } else {
//     res.send(
//       "Favor verificar se os parametros foram passados corretamente: id da tarefa e o id do usuário"
//     );
//   }
// });
