// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    console.log(array.length)
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumeros(a, b) {
        return a - b;
    }
    return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    // const arrayPares = array.filter((numero) => {
    //     return numero % 2 === 0
    // })

    //Desafio

    let novoArrayPar = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            novoArrayPar.push(array[i])
        }

    } return novoArrayPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novoArrayEven = array.filter((numero) => {
        return numero % 2 === 0
    })

    const arrayParQuadrado = novoArrayEven.map((valor) => {
        return valor * valor
    })

    return arrayParQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        } else {
            maiorNumero = maiorNumero
        }
    } return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0
    let menorNumero = 0
    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }
    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
        diferenca: maiorNumero - menorNumero
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let nPrimeiroPares = []
    for (let i = 0; i <= n; i++) {
        let par = [0,]
    }
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arraySegundos = []
    function compararNumeros(a, b) {
        return a - b;
    }
    arrayArrumado = array.sort(compararNumeros)
    arraySegundos = [arrayArrumado[array.length - 2], arrayArrumado[1]]

    return arraySegundos
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    // for(let i = 0; i < filme.atores.length; i++){
    //     filme.atores[i+1] = " " + filme.atores[i+1]
    // }

    //"Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci."

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return { ...pessoa, nome: "ANÔNIMO" }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((nome) => {
        return nome.idade > 14 && nome.idade < 60 && nome.altura > 1.5
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((nome) => {
        return nome.idade <= 14 || nome.idade > 60 || nome.altura < 1.5
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    // let anovoSaldo = contas.map((valor) => {
    //     return {...contas, saldoTotal: }
    // })
    for (let i = 0; i < contas.length; i++) {
        novoSaldo[i] = contas.saldoTotal[i] - contas.compras[i]
    } console.log(novoSaldo)
    return novoSaldo

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    function compare(a, b) {
        if (a.nome < b.nome)
            return -1;
        if (a.nome > b.nome)
            return 1;
        return 0;
    } consultas.sort(compare)
}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}