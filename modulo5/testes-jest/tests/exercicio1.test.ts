describe("Exercicio 1", () => {

    test("Verificar CapsLock", () => {

        const toCapsLock = (string: string): string =>{
            return string.toUpperCase()
        }

        const result = toCapsLock(testString)

        expect(result).toBe(testString.toUpperCase())
    })
})

const testString: string = "Today"