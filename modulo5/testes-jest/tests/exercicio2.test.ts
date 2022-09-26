describe("Exercicio 2", () => {
  test("Transformando uma string num array de caracteres da mesma", () => {
    const arrayCharacters: string[] = [];

    const transformString = (frase: string): string[] => {
      for (let i = 0; i < frase.length; i++) {
        arrayCharacters.push(frase[i]);
      }
      return arrayCharacters
    }

      const result = transformString(anotherString);

      expect(arrayCharacters).toBe(result);
    
  });
});

const anotherString: string = "Multidimensional";
