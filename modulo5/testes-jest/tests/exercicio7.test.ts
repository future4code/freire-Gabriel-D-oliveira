describe("Exercicio 7", () => {
  test("Retornar média aproximada para cima para uma lista de números", () => {
    let sum = 0;
    const averageNumbers = (numbers: number[]): number => {
      for (let n of numbers) {
         sum += n;
      }

      const result: number = Math.ceil(sum / numbers.length);

      return result;
    };

    expect(averageNumbers(listaNumeros)).toBeGreaterThanOrEqual(preciseAverage);
  });
});

const listaNumeros: number[] = [1, 2, 3, 5, 7];

const preciseAverage: number = 18 / 5;
