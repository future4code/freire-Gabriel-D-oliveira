import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { products } from "./data";
import { info } from "console";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3002, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Exercicio 1

app.get("/test", (req, res) => {
  res.send("API working as expected");
});

// Exercicio 3 / 7

app.post("/products", (req, res) => {
  try {
    const productsList = products;
    const { name, price } = req.body;

    const newProduct = {
      id: Date.now().toString(),
      name: name,
      price: price,
    };

    if (!name || !price) {
      throw new Error(
        "Verificar se os dados do body foram inseridos: name e price"
      );
    }

    if (typeof name !== "string") {
      throw new Error(
        "O dado 'name' foi passado como um tipo diferente de string"
      );
    }

    if (typeof price !== "number") {
      throw new Error(
        "O dado 'price' foi passado como um tipo diferente de number"
      );
    }

    if (price <= 0) {
      throw new Error("O dado price não aceita valor menor ou igual a zero");
    }

    productsList.push(newProduct);

    res.status(200).send(productsList);
  } catch (error: any) {
    switch (error.message) {
      case "Verificar se os dados do body foram inseridos: name e price":
        res.status(422).send(error.message);
        break;

      case "O dado 'name' foi passado como um tipo diferente de string":
        res.status(422).send(error.message);
        break;

      case "O dado 'price' foi passado como um tipo diferente de number":
        res.status(422).send(error.message);
        break;

      case "O dado 'price' não aceita valor menor ou igual a zero":
        res.status(422).send(error.message);
        break;

      default:
        res.status(500).send("Erro inesperado consulte a responsável");
        break;
    }
  }
});

// Exercicio 4

app.get("/products", (req, res) => {
  const productsList = products;

  res.status(200).send(productsList);
});

// Exercicio 5 // 8

app.put("/products/:id/price", (req, res) => {
  try {
    const id = req.params.id;
    const price: number = req.body.price;
    const productsListId = products.map((p) => {
      return p.id;
    });

    const arrayPriceAdjusted = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, price: price };
      } else {
        return prod;
      }
    });

    if (!price) {
      throw new Error("O dado 'price' não foi informado");
    }

    if (typeof price !== "number") {
      throw new Error(
        "O dado 'price' foi passado com um tipo diferente de number"
      );
    }

    if (price <= 0) {
      throw new Error("O dado 'price' não aceita valor menor ou igual a zero");
    }

    if (!productsListId.includes(id)) {
      throw new Error(
        "O produto indicado para modificação não foi encontrado, revisar o ID dele"
      );
    }

    res.status(200).send(arrayPriceAdjusted);
  } catch (error: any) {
    switch (error.message) {
      case "O dado 'price' não foi informado":
        res.status(422).send(error.message);
        break;

      case "O dado 'price' foi passado com um tipo diferente de number":
        res.status(422).send(error.message);
        break;

      case "O dado 'price' não aceita valor menor ou igual a zero":
        res.status(422).send(error.message);
        break;

      case "O produto indicado para modificação não foi encontrado, revisar o ID dele":
        res.status(404).send(error.message);
        break;

      default:
        res.status(500).send("Erro inesperado consulte a responsável");
        break;
    }
  }
});

// Exercicio 6 // 9

app.delete("/products/:id", (req, res) => {
  try {
    const id = req.params.id;
    const arrayProduct = products;
    const arrayIds = products.map((product) => {
      return product.id;
    });

    if (!arrayIds.includes(id)) {
      throw new Error("Produto não encontrado, verificar o ID informado");
    }

    arrayProduct.map((product) => {
      if (product.id === id) {
        const index = arrayProduct.indexOf(product);
        arrayProduct.splice(index, 1);
      } else {
        return product;
      }
    });

    console.log(arrayIds);

    res.status(200).send(arrayProduct);
  } catch (error: any) {
    switch (error.message) {
      case "Produto não encontrado, verificar o ID informado":
        res.status(404).send(error.message);
        break;

      default:
        res.status(500).send("Erro inesperado consulte a responsável");
        break;
    }
  }
});
