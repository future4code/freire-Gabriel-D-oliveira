describe("Exercicio 0", () => {
  test("Verifica se o número é par", () => {
    const verifyIfEven = (n: number): Boolean => {
      return n % 2 === 0;
    };

    const result = verifyIfEven(112);

    expect(result).toBe(true);
  });
});
