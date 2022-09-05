import app from "./app";

// Exercicio

// 1 Questão
// letra A) - O construtuctor serve para criar uma instância de uma classe.

//  Letra B) - A mensagem foi impressa uma única vez.

//  Letra C) - Criando métodos para obter essas informações.

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

// 2 Questão

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription(): string {
    return this.description;
  }

  public getValue(): number {
    return this.value;
  }
  public getDate(): string {
    return this.date;
  }
}

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getBalance(): number {
    return this.balance;
  }

  public getTransactions(): Transaction[] {
    return this.transactions;
  }

  public setTransactions(newTransaction: Transaction): void {
    this.transactions.push(newTransaction);
  } 
}

const NewUser: UserAccount = new UserAccount("xxx.777.555-12", "TesteUser", 27);
const User1: UserAccount = new UserAccount("xxx.777.555-27", "User1", 22);
const arrayUsers: UserAccount[] = [NewUser, User1];


const newTransaction: Transaction = new Transaction("teste", 700, "2022/07/05");

NewUser.setTransactions(newTransaction);
console.log(NewUser.getTransactions());



// 3 Questão

class Bank {
    private accounts: UserAccount[]


    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public getAccounts(): UserAccount[] {
        return this.accounts;
    }

    public setAccounts(newaccounts: UserAccount): void {
        this.accounts = [...this.accounts, newaccounts];
    }
}

const Banco: Bank = new Bank(arrayUsers);
console.log(Banco.getAccounts());

