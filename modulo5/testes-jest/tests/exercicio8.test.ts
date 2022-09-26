describe("Exercicio 8", () => {
    test("Retornar idade dado ano de nascimento", () => {
      
      const returnAge = (birthYear: number): number => {
        const currentYear: number = 2022
        
        const result: number = currentYear - birthYear;
  
        return result;
      };
  
      expect(returnAge(randomYear)).toBe(randomAge);
    });
  });
  
  const randomYear: number = 1988;

  const randomAge: number = 2022 - randomYear
  
  ;
  