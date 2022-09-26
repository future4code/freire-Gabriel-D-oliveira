describe("Exercicio 5", () => {
    test("Retornar um número aleatório entre 1 e 10", () => {
      const randomNumber = (): number => {
        return Math.floor(Math.random() * 11);
      };
      const result = randomNumber();

      const verifyNumber =(randomNumber:number): boolean => {
        return randomNumber > 0 && randomNumber < 11
      }
  
      expect(verifyNumber(result)).toBe(true);
    });
  });
  
 