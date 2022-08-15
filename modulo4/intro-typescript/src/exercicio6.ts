


function multiplasOperacoes (n1: number, n2: number) : void {
    let soma: number = n1 + n2;
    let subtracao: number = n1 - n2;
    let multiplicacao: number = n1 * n2;
    console.log(`A soma dos números é ${soma}`)
    console.log(`A subtração dos números é ${subtracao}`)
    console.log(`A multiplicação dos números é ${multiplicacao}`)
    if(n1 > n2) {
        console.log(`O numero ${n1} é o maior`)
    }else {
        console.log(`O numero ${n2} é o maior`)
    }

}
multiplasOperacoes(2, 5)
multiplasOperacoes(10, 7)