import {Client} from './polimorfismo/ClientClass';
import {NewPlace, Place, Residence, Commerce, Industry} from './polimorfismo/AbstractClass';
import { ResidentialClientClass} from './polimorfismo/ResidentialClientClass'
import { ComercialClientClass } from './polimorfismo/ComercialClientClass';
import { IndustrialClientClass } from './polimorfismo/IndustrialClientClass';

//  Herança

// Questão 1

//  Letra a) - Não, pois o atributo senha é privado e não temos um método para pegar esssa informação (getSenha).

//  Letra b) - Foi impresso uma única vez.

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
      }
  }

// const user1: User = new User("001","teste@labenu.com","Tester", "123456");

// console.log(user1.getEmail())
// console.log(user1.getId())
// console.log(user1.getName())

// Questão 2

// Letra a) - Foi impresso uma vez.

// Letra b) - Foi impresso uma vez também. Porque a classe Customer é uma subclasse do User, sendo assim a impressão que consta no construtuctor da User "roda" quando Customer cria uma instância   

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
      purchaseTotal: number = 0
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal = purchaseTotal
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const customer1: Customer = new Customer("002", "teste@email.com","Greyworm", "unsullied", "199.223.12-98", 1200);

  console.log(customer1.getId());
  console.log(customer1.getEmail());
  console.log(customer1.getName());
  console.log(customer1.getCreditCard());
  console.log(customer1.purchaseTotal);
  console.log(customer1.introduceYourself());
  console.log(customer1.introduceYourself);

//   Questão 3-4-5

// Letra a) Não é possivel pois na classe pai (User) a senha foi declarada como um atributo private e não há uma método para pegar essa informação.


//  Polimorfismo

// Questão 1

// Letra a) - Conseguimos imprimir name, registrationNumber, consumedEnergy. A calculateBill imprimi a função e não o resultado dela.

const clientTest: Client = {
    name: "Tester",
    registrationNumber: 1,
    consumedEnergy: 120,
    calculateBill: () => {
        return 4
    },

}

console.log(clientTest);
console.log(clientTest.calculateBill());

//  Questão 2

// Letra a) - Não se pode criar uma instância de uma classe abstrata.

// Letra b) - Podemos criar uma classe que filha que use ela como extensão.


  const newPlace = new NewPlace("50700600");
  console.log(newPlace);
  console.log(newPlace.getCep());


//  Questão 3

// Letra a) - Podemos criar uma classe que filha que use ela como extensão.

// Letra b) - As propriedades que uma classe herda de uma interface são sempre públicas.

// Letra c) - Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

const newCommerce:Commerce = new Commerce(5, "cep-111.111.11");

const newIndustry: Industry = new Industry(20, "cep-111.000.00");

const newResidence: Residence = new Residence(100, "cep-000.000.00");

console.log(newResidence.getResidentsQuantity());

console.log(newIndustry.getMachinesQuantity());

console.log(newCommerce.getFloorQuantity());

// Questão 4


//  Letra a) - Ela possui os metodos (getCpf e calculateBill) e as propriedades (name, cpf, name, registrationNumber, consumedEnergy, residentsQuantity, cep)
// Pois essa classe herdou esses métodos e atributos da interface (Client) e da classe pai (Residence).

const newResident: ResidentialClientClass = new ResidentialClientClass( "000.000.000-12", "John", 11, 120, 5, "60610007")

console.log(newResident.calculateBill())

//  Questão 5

// Letra a) - As semalhanças são aquelas advindas da herança da interface Client

// Letra b) - As diferenças são aquelas da classe pai (Commerce) que diverge da ResidentialClientClass e o atributo Cnpj. 

const newCommerciant: ComercialClientClass = new ComercialClientClass ( "054.021.012-12", "Viserys", 5, 1000, 12, "60610207")

console.log(newCommerciant.calculateBill());
console.log(newCommerciant.getCnpj());


//  Questão 6

// Letra a) - A classe IndustrialCLient deve ser filha da classe Industry, pois esta tem os atributos únicos da indústria que são usados para calcular a conta de energia.

// Letra b) - A interface Client, pois está também contém atributos e métodos para realizarmos o cálculo do consumo de energia.

//  Letra c) - Porque os valores dos atributos são setados na hora que criamos uma instância.

const newIndustrial: IndustrialClientClass = new IndustrialClientClass ( "123.000.012-12", 5, 1000,"RegistroIndustrial...", 12, "60610207")

console.log(newIndustrial.calculateBill());
console.log(newIndustrial.getRegistroIndustrial());





