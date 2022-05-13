// Exercício Variaveis

// Interpretação dos códigos
/*

1.Questão

let a = 10 // Declara a variável "a" como number atribuindo o valor 10
let b = 10 // Declara a variável "b" como number atribuindo o valor 10

console.log(b) // Irá imprimir a atribuição da variável "b", neste caso o valor 10  

b = 5 // Atribui um novo valor para a variável "b", agora 5

console.log(a, b) // Imprime as atribuições das variáveis "a" e "b", os valores 10 e 5 respectivamente 

2.Questão

let a = 10 // Declara a variável "a" como number atribuindo o valor 10
let b = 20 // Declara a variável "b" como number atribuindo o valor 20
c = a // Declara a variável "c" como igual a "a"
b = c // Declara a variável "b" como igual a "c"
a = b // Declara a variável "a" como igual a "b"

console.log(a, b, c) // Imprime as atribuições das variáveis "a", "b" e "c", com os valores 10, 10 e 10 respectivamente.

3.Questão

let p = prompt("Quantas horas você trabalha por dia?") // Declara a variável "p" como uma string solicitando alguma informação, neste caso as horas trabalhadas por dia. 
let t = prompt("Quanto você recebe por dia?") // Declara a variável "t" como uma string solicitando alguma informação, neste caso a remuneração por dia.
alert(`Voce recebe ${t/p} por hora`) // Cria um alerta indicando o salário por hora.

Sugiro a troca da variável "p" por "horasTrabalhadasDia" e a "t" por "remuneracaoDia"


// Escrita de códigos

// 1.Questão

let nome
let idade

console.log(typeof nome, idade) // o tipo "undefined" foi impresso, pois ao declarar as variáveis não especifiquei quais eram os seus tipos

nome = prompt("Olá, qual é o seu nome?")
idade = prompt("E qual seria a sua idade?")

console.log(typeof nome, idade) // Agora os tipos das variáveis foram definidas como string por causa do comando prompt

console.log("Olá", nome, "você tem", idade, "anos")

// 2.Questão

let roupaHoje = "Você está usando uma camisa vermelha hoje?"
let almocoHoje = "Você almoçou feijão no dia de hoje?"
let musicaHoje = "Você escutou alguma música hoje?"

let respostaRoupaHoje = prompt(roupaHoje)
let respostaAlmocoHoje = prompt(almocoHoje)
let respostaMusicaHoje = prompt(musicaHoje)

console.log(roupaHoje, respostaRoupaHoje)
console.log(almocoHoje, respostaAlmocoHoje)
console.log(musicaHoje, respostaMusicaHoje)


// 3.Questão

let a = 10
let b = 25

let valorAntigoDeA = a

a = b
b = valorAntigoDeA



console.log("Novo valor de a é", a, "e o novo valor de b é", b)

// Desafio

//1.Questão

digitoUm = prompt("Favor sugerir um número")
digitoDois = prompt ("Favor sugerir outro número")

somaDigitos = Number(digitoUm) + Number(digitoDois)
console.log("A soma do primeiro número com o segundo é", somaDigitos)

multiplicacaoDigitos = Number(digitoUm)*Number(digitoDois)
console.log("A multiplicação do primeiro número pelo segundo é", multiplicacaoDigitos)
*/


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


