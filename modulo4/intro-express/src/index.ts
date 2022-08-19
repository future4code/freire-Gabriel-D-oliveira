import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  console.log("Server is running on port 3003");
});

//Exercicio 1
app.get("/", (req, res) => {
  res.send("Hello from express");
});

// Exercicio 2

type user = {
  id: number | string;
  name: string;
  phone: string;
  email: string;
  website: string;
};

//Exercicio 3

const arrayUsers: user[] = [
  {
    id: 1,
    name: "John",
    phone: "00-0987-7650",
    email: "jones@gmail.com",
    website: "http://johnjoao.com.br",
  },
  {
    id: 2,
    name: "Mary",
    phone: "01-9907-7050",
    email: "mary@gmail.com",
    website: "http://marymaria.com.br",
  },
  {
    id: 3,
    name: "Gollum",
    phone: "00-0000-7050",
    email: "smeagle@gmail.com",
    website: "http://myprecious.com.br",
  },
  {
    id: 4,
    name: "Homer",
    phone: "55-1200-7050",
    email: "couchpotato@gmail.com",
    website: "http://Springfield.duff.br",
  },
];

//Exercicio 4

app.get("/users", (req, res) => {
  res.status(200).send(arrayUsers);
});

// Exercício 5

type post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

// Exercicio 6

const arrayPosts: post[] = [
  {
    userId: 1,
    id: 1,
    title: "Johnny be good",
    body: "Go Johnny, go, go Johnny B. Goode",
  },
  {
    userId: 2,
    id: 4,
    title: "Faith for us all",
    body: "People does not have faith nowadays",
  },
  {
    userId: 3,
    id: 5,
    title: "How to get rid off an addiction?",
    body: "I am asking for help with an addiction that is consuming my life",
  },
  {
    userId: 4,
    id: 4,
    title: "Problems with a nuclear powerplant",
    body: "By knowing how to press a button can I stop a nuclear disaster? ",
  },
];

//Acho melhor criar fora do array de usuários por questões de organização e facilidade para requisitar os dados.

//Exercicio 7

app.get("/posts", (req, res) => {
  res.status(200).send(arrayPosts);
});

//Exercicio 8

app.get("/posts/:userId", (req, res) => {
  const userId: number = Number(req.params.userId);

  const listaFiltrada = arrayPosts.filter((post) => {
    return post.userId === userId;
  });

  if (userId) {
    res.status(200).send(listaFiltrada);
  } else {
    res.status(404).send("Parametro não encontrada");
  }
});
