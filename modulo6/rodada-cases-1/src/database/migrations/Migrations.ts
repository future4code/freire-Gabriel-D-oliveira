import { BaseDatabase } from "../BaseDatabase"
import { ShowDatabase } from "../ShowDatabase"
import { UserDatabase } from "../UserDatabase"
import { shows, tickets, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDER_ITENS};
        DROP TABLE IF EXISTS ${OrderDatabase.TABLE_ORDERS};
        DROP TABLE IF EXISTS ${PizzaDatabase.TABLE_PIZZAS_INGREDIENTS};
        DROP TABLE IF EXISTS ${PizzaDatabase.TABLE_INGREDIENTS};
        DROP TABLE IF EXISTS ${PizzaDatabase.TABLE_PIZZAS};
        
        CREATE TABLE IF NOT EXISTS ${PizzasDatabase.TABLE_PIZZAS}(
            name VARCHAR(255) PRIMARY KEY,e VARCHAR(255) NOT NULL,
            price DECIMAL(3,2) NOT NULL,
        );

        CREATE TABLE IF NOT EXISTS ${PizzasDatabase.TABLE_INGREDIENTS}(
            name VARCHAR(255) PRIMARY KEY
        );

        CREATE TABLE IF NOT EXISTS ${PizzasDatabase.TABLE_PIZZAS_INGREDIENTS}(
            pizza_name VARCHAR(255) NOT NULL,
            ingredient_name VARCHAR(255) NOT NULL,
            FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas (name),
            FOREIGN KEY (ingredient_name) REFERENCES Amb_Ingredients (name)
        );

        CREATE TABLE IF NOT EXISTS ${OrderDatabase.TABLE_ORDERS}(
                id VARCHAR(255) PRIMARY KEY
        );

        CREATE TABLE IF NOT EXISTS ${OrderDatabase.TABLE_ORDERS_ITENS} (
            id VARCHAR(255) PRIMARY KEY,
            pizza_name VARCHAR(255) NOT NULL,
            quantity TINYINT,
            order_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas (name),
            FOREIGN KEY (order_id) REFERENCES Amb_Orders (id),
        )
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS)
            .insert(pizzasSeed)

        await BaseDatabase
            .connection(PizzaDatabase.TABLE_INGREDIENTS)
            .insert(ingredientsSeed)

        await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS_INGREDIENTS)
            .insert(pizzasIngredientsSeed)
    }
}

const migrations = new Migrations()
migrations.execute()