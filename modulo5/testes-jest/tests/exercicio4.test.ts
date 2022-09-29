describe("Exercicio 4", () => {
    test("Retornar um número que com o comprimento de uma string", () => {
      const stringLength = (string: string): number => {
        return string.length;
      };
      const result = stringLength(anyString)
  
      expect(result).toBe(7);
    });
  });
  
  const anyString:string ="Gabriel"