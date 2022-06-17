// Exercício strings-arrays

//Parte de interpretação

// 1.Questão
/*
let array
console.log('a. ', array) // imprime a.  undefined

array = null
console.log('b. ', array) // imprime b.  null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // imprime c.  11

let i = 0
console.log('d. ', array[i]) // imprime d.  3

array[i+1] = 19
console.log('e. ', array) // imprime e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // imprime f.  9

// 2.Questão

const frase = prompt("Digite uma frase")

// A entrada é "Subi num ônibus em Marrocos"

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //
// imprime SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

//Parte de escrita do código

// //1.Questão

// const nomeUsuario = prompt("Boa tarde, qual é o seu nome?");

// const emailUsuario = prompt("Favor também inserir o seu e-mail");

// console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`);

// //2.Questão

// const comidasFavoritas = ["feijão", "arroz", "lasanha", "peixada", "cozido"]

// console.log(comidasFavoritas); // letra a

// console.log(`Essas são as minhas comidas favoritas:
// ${comidasFavoritas[0]}
// ${comidasFavoritas[1]}
// ${comidasFavoritas[2]}
// ${comidasFavoritas[3]}
// ${comidasFavoritas[4]}`); // letra b

// const comidaFavoritaUsuario = prompt("Qual a sua comida favorita?")

// comidasFavoritas[1] = comidaFavoritaUsuario

// console.log(comidasFavoritas); // letra c

// //3.Questão

// let listaDeTarefas = []; // letra a

// const tarefaUm = prompt("Indique uma tarefa diária que você precisa realizar");
// const tarefaDois = prompt("Indique uma segunda terefa necessária no seu dia");
// const tarefaTres = prompt("E indique uma terceira tarefa necessária no seu dia");

// listaDeTarefas.push(tarefaUm);
// listaDeTarefas.push(tarefaDois);
// listaDeTarefas.push(tarefaTres); // letra b

// console.log(listaDeTarefas);

// console.log("Minha lista de tarefas diária são:", listaDeTarefas); // letra c

// const tarefaRealizada = prompt("Agora informe um indice das tarefas realizadas: 0, 1 ou 2"); // letra d

// listaDeTarefas.splice(tarefaRealizada, 1); // letra e

// console.log("Tarefas restantes:", listaDeTarefas); // letra f

// // desafio

// // 1.Questão

// const fraseUsuario = [prompt("favor escrever uma mensagem")]

// console.log(fraseUsuario.length)

// let arrayFraseUsuario = [fraseUsuario[0], fraseUsuario[1]];


const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const indexAbabaxi = frutas.indexOf("Abacaxi");
const tamanhoArray = frutas.length;

console.log("Index abacaxi: ", indexAbabaxi, "tamanho do array:", tamanhoArray);



