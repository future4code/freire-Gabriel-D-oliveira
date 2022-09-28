import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";
import { UserBusiness } from "../src/business/UserBusiness";
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User";

describe("Testando UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  test("Successful signup", async () => {
    const input: ISignupInputDTO = {
      name: "rick",
      email: "wabalapa@gmail.com",
      password: "birdpersonbff@gmail.com",
    };

    const response = await userBusiness.signup(input);
    expect(response.message).toBe("Cadastro realizado com sucesso");
    expect(response.token).toBe("token-mock-normal");
  });

  test("Successful login", async () => {
    const input: ILoginInputDTO = {
      email: "mithrandir@gmail.com",
      password: "password",
    };

    const response = await userBusiness.login(input)
    expect(response.message).toBe("Login realizado com sucesso");
    expect(response.token).toBe("token-mock-normal")
  });
});
