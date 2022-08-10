
function comparaValores (n1: number, n2: number) : number {
    let maiorNumero: number
    let menorNumero: number

    if(n1 > n2) {
        maiorNumero = n1
        menorNumero = n2
    } else {
        maiorNumero = n2
        menorNumero = n1
    }

    const diferenca:number = maiorNumero - menorNumero

    return diferenca
}

console.log(comparaValores(1,2))
console.log(comparaValores(3,1))
console.log(comparaValores(1,3))