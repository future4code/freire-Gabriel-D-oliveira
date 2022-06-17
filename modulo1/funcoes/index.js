// Exercício funcoes
/*
//Parte de Interpretação de código

1.Questão

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))  // letra a. Imprime 10
console.log(minhaFuncao(10)) // letra a. Imprime 50

// letra b. Não iria imprimir o resultado da função com os parâmetros definidos, portanto,
o console ficaria em branco

// 2.Questão

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// letra a. A função recebe um texto, o transforma para letras minúsculas e verifica se o mesmo contém a string "cenoura" retornando um boolean
Ela é útil para identificar a presença de palavras específicas dentro de uma string e para isso padroniza o retorno do prompt

// letra b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

    i.   Eu gosto de cenoura // Imprime: true
    ii.  CENOURA é bom pra vista // Imprime: true
    iii. Cenouras crescem na terra // Imprime: false
    */

// Parte de escrita de código

// Questão.1

//Letra a.

function imprimirTexto () {
       
    console.log(`Eu sou Gabriel, tenho 25 anos, moro em Recife e sou estudante de programação web`)
}

imprimirTexto()

// Letra b.

function imprimirComParametros (nome, idade, cidade, profissao){

    let pequenaBio = console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
    return pequenaBio
}

imprimirComParametros("Gabriel", 25, "Recife", "estudande de programação web")

// Questão.2

// Letra a.

function somar (num1, num2) {
    soma = num1+num2
    return soma
}

console.log(somar(7,5))

//Letra b.

function comparar (num1, num2) {
    return num1 >= num2
}

console.log(comparar(7,5))

//Letra c.

let parOuNao = function(num1) {
    return num1%2 === 0
}

console.log(parOuNao(7))

//Letra d.



function letraD (texto) {
        
    console.log(texto.length, texto.toUpperCase())
}

letraD("Sou recifense")

// Questão 3.

//Somar

function somar (num1, num2) {
    soma = num1+num2
    return soma
}

//Subtrair

function subtrair (num1, num2) {
    subtracao = num1-num2
    return subtracao
}

// Multiplicar 

function multiplicar (num1, num2) {
    multiplicacao = num1*num2
    return multiplicacao
}

// Dividir

function dividir (num1, num2) {
    divisao = num1/num2
    return divisao
}

const digitoUm = prompt("Indique um número")
const digitoDois= prompt("Indique outro númro")

somar(Number(digitoUm), Number(digitoDois))
subtrair(Number(digitoUm), Number(digitoDois))
multiplicar(Number(digitoUm), Number(digitoDois))
dividir(Number(digitoUm), Number(digitoDois))

console.log("Número iseridos:", digitoUm, digitoDois)
console.log("Soma:", somar(Number(digitoUm), Number(digitoDois)))
console.log("Diferença:", subtrair(Number(digitoUm), Number(digitoDois)))
console.log("Multiplicação:", multiplicar(Number(digitoUm), Number(digitoDois)))
console.log("Divisão:", dividir(Number(digitoUm), Number(digitoDois)))

