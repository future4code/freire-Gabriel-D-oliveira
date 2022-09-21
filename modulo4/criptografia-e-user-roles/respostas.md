<!-- 1 Questão -->

a) O round é o custo para hashear o código e quanto maior mais dificil a criptoanálise. O salt gera a hashes que criam strings aleatórias. São recomendados valores numéricos com dois dígitos, sendo 10 o padrão. 14, para testar e dar mais segurança que o valor padrão.

b/c) class HashManager {

    public generateHash = async(plaintext: string):Promise<string> =>{
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await genSalt(rounds)
        const result = await hash(plaintext, salt)

        return result
    }

    public compareHash = async (plaintext: string, hash: string): Promise<boolean> => {
        return bcrypt.compare(plaintext, hash)
    }
}

<!-- 2 Questão -->

a) O cadastrado, pois ele enviará a senha criptografada para o banco de dados permitindo futura comparação para o endpoint login.

b) export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role} = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os parametros 'name','nickname', 'password' e 'email'")
      }
      
      const [user] = await connection('UserTable')
         .where({ email })
   
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      
      const uuidClass = new GenerateId()
      const id:string = uuidClass.generateId()
      
      //Hasheando o valor
      const instanceHash = new HashManager()
      const hash = await instanceHash.generateHash(password)

      const newUser: user = { 
         id, 
         name, 
         nickname, 
         email, 
         password:hash,
         role }

      await connection('UserTable')
         .insert(newUser)
  
      
      const newToken = new Authenticator()
      const token = newToken.generateToken({id, role})

      res.status(201).send({ newUser,token })

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: error.message})
      } else {
         res.send({ message: error.message })
      }
   }
}

c) export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha seu email e senha");
    }

    const [user] = await connection("UserTable").where({ email });

    if(!user){
        throw new Error("Usuário não encontrado")
    }

    const instanceHash = new HashManager();
    const compareHash = instanceHash.compareHash(password, user.password)

    if (!compareHash) {
      res.statusCode = 409;
      throw new Error("Credencias inválidas");
    }

    const newToken = new Authenticator();
    const token = newToken.generateToken({ id: user.id, role: user.role });

    res.status(200).send(token);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}