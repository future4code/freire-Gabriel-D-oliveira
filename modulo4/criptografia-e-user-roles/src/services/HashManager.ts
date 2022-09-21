import bcrypt, { genSalt, hash } from 'bcryptjs';


class HashManager {

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

export default HashManager;