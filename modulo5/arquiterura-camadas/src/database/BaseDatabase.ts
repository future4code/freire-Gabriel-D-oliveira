import knex,{Knex} from "knex"
import dotenv from "dotenv";

dotenv.config()

export abstract class BaseDataBase{

    protected static connection:Knex | null = null

    protected getConnetion():Knex{
        if(!BaseDataBase.connection){
            BaseDataBase.connection = knex({
                client:"mysql",
                connection:{
                    host:process.env.DB_HOST,
                    user:process.env.DB_USER,
                    password:process.env.DB_PASSWORD,
                    database:process.env.DB_DATABASE 
                }
            })
        }

        return BaseDataBase.connection
    }
}
