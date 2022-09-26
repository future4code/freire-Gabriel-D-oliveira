describe("Exercicio 9", () => {
    test("Retornar a data para padrão brasileiro", () => {
      
        const formatingDate = (initialDate: string): string => {
            const date = new Date(initialDate)
                const adjustedDate = date.toLocaleDateString()
        
            return adjustedDate 
        }
  
      expect(formatingDate(randomDate)).toBe(randomDateBr);
    });
  });

  const randomDate = "2000/02/11"

  const randomDateBr = "11/02/2000"

