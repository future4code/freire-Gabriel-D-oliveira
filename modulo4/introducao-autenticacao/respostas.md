Respostas

<!-- 1 Questão -->

a) Creio que seja o melhor tipo primitivo para tipicar os ids. Concordo, pois desta forma existe uma maior possibilidade para combinações, isto é, a chance de termos um id repetido é menor.

b) export function generateId():string{
const id:string = v4()
return id
}

<!-- 2 Questão -->

a) O código realiza a conexão com o banco de dados e depois cria uma função para criar um usuário dentro do banco de dados.

b) CREATE TABLE UserTable (
id VARCHAR(255) PRIMARY KEY NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL);

c) export async function createUser(req: Request, res: Response): Promise<void> {
try {
const { email, password } = req.body;

    if (!email || !email.includes("@")) {
      res.statusCode = 422;
      throw new Error("Email inserido inválido, pois não possui @");
    }

    // const emailVerification: string | string[] = await connection("UserTable")
    //   .select("email")
    //   .from("UserTable")
    //   .where(`email like "%${email as string}%"`);

    // if (emailVerification.includes(email as string)) {
    //   throw new Error("Email já cadastrado");
    // }

    if (!password || password.length < 6) {
      res.statusCode = 422;
      throw new Error("A senha deve conter 6 ou mais caracteres");
    }

    const newId: string = generateId();

    await insertUserFunction(newId, email, password);

    res.status(201).send("Usuário criado com sucesso!");

} catch (error: any) {
if (res.statusCode === 200) {
res.status(500).send({ message: error.message });
} else {
res.send({ message: error.message });
}
}
}

export default createUserFunction;

<!-- 3 Questão -->

a) Ela garante que a key importada do .env seja uma string, pois a função que gera o token retorna uma string como resposta.

b) export function generateToken(userId: Authentication) {
const token = jwt.sign({ id: userId.id }, process.env.JWT_KEY as string, {
expiresIn: "20min",
});

return token
}

<!-- 4 Questão -->

export default async function signUp(
req: Request,
res: Response
): Promise<void> {
try {
const { email, password } = req.body;

    if (!email || !email.includes("@")) {
      res.statusCode = 422;
      throw new Error("Email inserido inválido, pois não possui @");
    }

    if (!password || password.length < 6) {
      res.statusCode = 422;
      throw new Error("A senha deve conter 6 ou mais caracteres");
    }

    const [userId] = await connection("UserTable").select("id").from("UserTable").where({ email });

    if (!userId) {
      res.statusCode = 404;
      throw new Error("Usuário não cadastrado!");
    }

     const token = generateToken({id: userId}, password);

    res.status(201).send(`Token gerado pelo jwt:  ${token}`);

} catch (error: any) {
if (res.statusCode === 200) {
res.status(500).send({ message: error.message });
} else {
res.send({ message: error.message });
}
}
}

<!-- 5 Questão -->

const selectEmailUser = async (email: string): Promise<any> => {
try {
const result = await connection("UserTable")
.select("\*")
.from("UserTable")
.where({ email });
return result;
} catch (error: any) {
return `Error ao encontrar o usuário:${error.message}`;
}
};

export default selectEmailUser;

<!-- 6 Questão -->

export default async function loginUser(
req: Request,
res: Response
): Promise<void> {
try {
const { email, password } = req.body;

    if (!email || !email.includes("@")) {
      res.statusCode = 422;
      throw new Error("Email inserido inválido, pois não possui @");
    }

    if (!password || password.length < 6) {
      res.statusCode = 422;
      throw new Error("A senha deve conter 6 ou mais caracteres");
    }

    const [userId] = await selectEmailUser(email);

    if (!userId) {
      res.statusCode = 404;
      throw new Error("Usuário não cadastrado!");
    }

     const token = generateToken({id: userId}, password);

    res.status(201).send(`Token gerado pelo jwt:  ${token}`);

} catch (error: any) {
if (res.statusCode === 200) {
res.status(500).send({ message: error.message });
} else {
res.send({ message: error.message });
}
}
}

<!-- 7 Questão -->

a) Ela garante que a constante payload tenha qualquer tipo. Porque desta forma podemos acessar a propriedade dentro do payload (objeto).

b) export function generateToken(token: string, password: string): Authentication {
const payload = jwt.verify( token , password as string) as any;

const result = {id: payload.id}

return result
}


