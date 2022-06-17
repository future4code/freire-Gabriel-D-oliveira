//Exercício Operadores

/* Parte Interpretação

1.Questão

const bool1 = true
const bool2 = false
const bool3 = !bool2 // oposto de bool2, portanto, true

let resultado = bool1 && bool2
console.log("a. ", resultado) // imprime "a. false"

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // imprime "b. false"

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // imprime "c. true"

console.log("d. ", typeof resultado) // imprime "d. boolean"

2. Questão

// O comando prompt retorna o tipo string e não o tipo número, sendo assim a variável soma irá concatenar as respostas e não somá-las

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // imprime "primeiroNumerosegundoNumero"

3.Questão

// O meu colega pode converter os retornos do prompt em número
// Conversão: const soma = Number(primeiroNumero) + Number(segundoNumero)
*/

// Parte de escrita do código

//1.Questão

const idadeUsuario = prompt("Qual a sua idade?"); // Letra a

const idadeBf = prompt("Qual é a idade da(o) sua(eu) melhor amiga(o)?"); // Letra b

console.log("Sua idade é maior do que a do seu melhor amigo", idadeUsuario > idadeBf); // Letra c

console.log("Diferença da idade entre você e a sua melhor amiga", Number(idadeUsuario) - Number(idadeBf)); // Letra d 

// 2.Questão

let numeroPar = prompt("Favor sugerir um número par"); // letra a

console.log("Resto da divisão por 2 é", Number(numeroPar) % 2); // letra b

// letra c: Os números quando são pares o resto da divisão por 2 sempre é igual a 0

// letra d: Quando os números são impares o resto da divisão por 2 sempre igual a 1

// 3.Questão

const idadePerguntada = prompt("Favor indicar a sua idade");

console.log("Idade do usuário convertida em meses é", idadePerguntada*12); // letra a

console.log("Idade do usuário convertida em dias é", idadePerguntada*365); // letra b - assumindo anos não bissextos

console.log("Idade do usuário convertida em horas é", idadePerguntada*365*24); // letra c

// 4.Questão

const num1 = prompt("Favor sugerir um número");

const num2 = prompt("Favor indicar outro número");

console.log("O primeiro número é maior que o segundo?", num1 > num2);

console.log("O primeiro número é igual ao segundo?", num1 == num2);

console.log("O primeiro número é divisível pelo segundo?", num1%num2 === 0);

console.log("O segundo número é divisível pelo primeiro?", num2%num1 === 0);












    