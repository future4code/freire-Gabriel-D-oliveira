import { getUsersByName } from "./endpoints/getUsersByName";
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getUsersByType } from "./endpoints/getUsersByType";
import { getUsersOrdered } from "./endpoints/getUsersOrdered";
import { getUsersLimited } from "./endpoints/getUserLimited";
import { getAllEndpoints } from "./endpoints/GetAllEndpoints";

export const app = express()

app.use(express.json())
app.use(cors())


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})

// O endpoints foi criado com o path 'users/page' para não conflitar com o exercicio já existente

app.get("/users/all/:type", getAllEndpoints)

app.get("/users/page", getUsersLimited) 

app.get("/users/:type", getUsersByType,)

app.get("/users/name", getUsersByName,)

app.get("/users", getUsersOrdered,)


