import express from "express";
import { base_URL } from "./baseUrl";
import { AddressInfo } from "net";
import axios from "axios";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

type user = {
  id: string;
  name: string;
  email: string;
};

// 1 Questão

// Letra A - O endpoint é  o Get subscribers - https://labenews.herokuapp.com/subscribers

//  Letra B - Através do Promise que passa uma array de any any[]

//  Letra C

// async function getSubscribers(): Promise<any[]> {
//     const res = await axios.get(`${base_URL}/subscribers`)
//     return res.data
// }

// 2 Questão

//  Letra A - Uma arrow function nós podemos declarar como uma variável enquanto a nomeada tem que ter a sintaxe explicita de uma função.

// const getSubscribers = async (): Promise<user[]> => {
//   const response = await axios.get(`${base_URL}/subscribers`);
//   return response.data;
// };

// 3 Questão

// Letra A - Não haverá erro de tipagem porque a função retorna uma array de usuários

// Letra B - Pois ao mapearmos um retorno de uma função any podemos especificar as informações que necessitamos.

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${base_URL}/subscribers`);
  return response.data.map((usuario: any) => {
    return { id: usuario.id, name: usuario.name, email: usuario.email };
  });
};

// 4 Questão

// Letra A - Ela é do tipo void, pois o função não precisa retornar os dados.

type News = {
  title: string;
  content: string;
  date: number;
};

const novaNoticia: News = {
  title: "Uma notícia não muito importante",
  content: "Olá trago uma notícia não muito importante",
  date: Number(new Date(2022, 8, 29)),
};

const createNews = async (noticia: News): Promise<void> => {
  const news = await axios.put(`${base_URL}/news`, noticia);
  console.log("Noticia publicada com sucesso!");  
};

// 5 Questão

// const sendNotification = async (
//   arrayUsers: user[],
//   message: string
// ): Promise<any> => {
//   const response = arrayUsers.map( res =>{
//     return axios.post(`${base_URL}/notifications`, {subscriberId : res.id, message: message})
//     .then(response => console.log("Notification sent to " + res.id))
//   })

// };


// 6 Questão

// Letra A - Ele recebe um array de Promises e retorna outra Promise como um array de respostas.

// Letra B - Há uma ganho de performance quando fazemos muita requisições ou quando utilizamos muita informação.

const sendNotification = async (
    arrayUsers: user[],
    message: string
  ): Promise<any> => {
        const requests = arrayUsers.map( res =>{
      return axios.post(`${base_URL}/notifications`, {subscriberId : res.id, message: message})
      .then(response => console.log("Notification sent to " + res.id))
    })
  
    await Promise.all(requests)
  };


const main = async (): Promise<any> => {
  try {
    const resp = await getSubscribers();
    const news = await createNews(novaNoticia);
    const notifications = await sendNotification(resp, "teste gratuito")
  } catch (error: any) {
    const err = error.response.message || error.message;
    console.log(err);
  }
};

main();
