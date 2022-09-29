import { IUserTest } from "../src/models/User";

describe("Exercicio 6", () => {
  test("Checar se o usuário Astrodev está na lista", () => {
    const astroDevUser: IUserTest ={
        nome: "Astrodev",
        idade: 28
    }

    expect(arrayUsers).toContainEqual(astroDevUser)
  });
});

const arrayUsers: IUserTest[] = [
  { nome: "Matheus", idade: 20,},
  { nome: "Astrodev", idade: 28 },
  { nome: "Francisco França", idade: 55 },
  {nome: "Gandalf", idade: 1000}
];
