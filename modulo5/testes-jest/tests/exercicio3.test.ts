describe("Exercicio 3", () => {
  test("Retornando uma string com númerais num type number", () => {
    const transformStringToNumber = (content: string): number => {
      return Number(content);
    };
    const result = transformStringToNumber(stringOfNumbers)

    expect(result).toBe(Number(stringOfNumbers));
  });
});

const stringOfNumbers:string ="146789"