//---------------------------------------------------- Exercício Condicionais-----------------------------

//------------------------- Parte de Interpretação do código

//--------------- Questão 01

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//------ Letra a)

/* O código solicita ao usuário que ele digite algum número para realizar um teste, através do prompt.
   Depois ele converte a resposta em um número e em seguida cria um condição para saber se o número é divisível por 2.
   Ao final o código imprime strings distintas considerando o cumprimento ou não da condição.
*/

//------ Letra b)
// Números pares

//------ Letra b)
// Números ímpares

//--------------- Questão 02

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break;
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//------ Letra a)
// O código serve para verificar de forma mais simples e automática o preço de cada fruta da lista

//------ Letra b)
// Imprime "O preço da fruta Maça é R$ 2.25"

//------ Letra c)
// Imprime "O preço da fruta Pêra é R$ 5", onde o nome da fruta será impresso de forma correta, mas o preço calculado será o do caso default por não ter o break


//--------------- Questão 03

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//------ Letra a)
// Está retornando um número de uma solicitação/pergunta do prompt, que retorna strings

//------ Letra b)
// Em ambos os casos não haverá nada impresso no console, pois ocorrerá um erro

//------ Letra c)
// Sim, pois a variável mensagem está no escopo filho da condição, portanto, não é acesível globalmente impedindo a impressão de "mensagem"


//------------------------- Parte de Escrita do código

//--------------- Questão 01

const informeIdade = Number(prompt("Indique a sua idade!")) // Letra a) e b)

if(informeIdade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
} // letra c)


// //--------------- Questão 02

const turnoEstudo = prompt("Indique em qual turno você estuda: M (matutino), V (Vespertino) ou N (Noturno)").toLowerCase()

if (turnoEstudo === "m") {
    console.log("Bom dia!")    
    } else if (turnoEstudo === "v") {
    console.log("Boa tarde!")
    } else if (turnoEstudo === "n") {
    console.log("Boa noite!")
    } else {
    console.log("Favor inserir uma das respostas sugeridas: m, v ou n!")
    }

// // //--------------- Questão 03

// // // const turnoEstudo = prompt("Indique em qual turno você estuda: M (matutino), V (Vespertino) ou N (Noturno)")

switch (turnoEstudo) {
    case "m":
        console.log("Bom dia!")
        break;
    case "v":
        console.log("Boa tarde!")
        break;
      case "n":
           console.log("Boa noite")
    default:
        console.log("Favor inserir uma das respostas sugeridas: m, v ou n")
        break;
}

//--------------- Questão 04

const assistirFilmeAmigx = () => {
   const generoFilme = prompt("Qual o gênero do filme que iremos assistir?") === "fantasia"
   const precoIngresso = prompt("Quanto custo o ingresso para esse filme?")

   if(generoFilme && Number(precoIngresso < 15 )){
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
}

// assistirFilmeAmigx()


// //------------------------- Desafios ----

// //--------------- Questão 01

const assistirFilmeLanche = () => {
    const generoFilme = prompt("Qual o gênero do filme que iremos assistir?") === "fantasia"
    const precoIngresso = prompt("Quanto custo o ingresso para esse filme?")
 
    if(generoFilme && Number(precoIngresso < 15 )){
        const lanchinho = prompt("Qual lanche você vai comprar?")
        console.log("Bom filme!")
        console.log("Aproveite o seu", lanchinho)        
     } else {
         console.log("Escolha outro filme :(")
     }
 }

//  assistirFilmeLanche()


 //--------------- Questão 02

 const nomeCompleto = prompt("Favor informar o nome completo")
 const tipoJogo = prompt("Indique o tipo do jogo: IN (Internacional) ou DO (doméstico)").toLowerCase()
 const etapaJogo = prompt("Indique a etapa do jogo: SF (semi-final), DT (disputa terceiro lugar) ou FI (final)").toLowerCase()
 const categoria = prompt("Indique a categoria: 1, 2, 3 ou 4").toLowerCase()
 const qntIngressos = prompt("Indique a quantidade de ingressos desejados")

 const sistemaVenda = (nomeCompleto, tipoJogo, etapaJogo, categoria, qntIngressos) => {
    let preco 
     if(etapaJogo === "sf" && categoria == "1"){
            preco = 1320
        } else if (etapaJogo === "sf" && categoria == "2") {
            preco = 880
        } else if (etapaJogo === "sf" && categoria == "3") {
            preco = 550
        } else if (etapaJogo === "sf" && categoria == "4") {
            preco = 220
        } else if (etapaJogo === "dt" && categoria == "1") {
            preco = 660
        } else if (etapaJogo === "dt" && categoria == "2"){
            preco = 440
        } else if (etapaJogo === "dt" && categoria == "3"){
            preco = 330
        } else if (etapaJogo === "dt" && categoria == "4"){
            preco = 170
        } else if (etapaJogo === "fi" && categoria == "1"){
            preco = 1980
        } else if (etapaJogo === "fi" && categoria == "2"){
            preco = 1320
        } else if (etapaJogo === "fi" && categoria == "3"){
            preco = 880
        } else if (etapaJogo === "fi" && categoria == "4"){
            preco = 330
        }

    let valortotal = preco*Number(qntIngressos)
        
    if(tipoJogo === "in"){
            preco = preco*4.1
        }

    let textoTipoJogo

    if(tipoJogo === "in"){
        textoTipoJogo = "Internacional"
    } else if (tipoJogo === "do"){
        textoTipoJogo = "Doméstico"
    } else{
        textoTipoJogo = "Valor desconhecido"
    }
    
    let TextoEtapaJogo
    if
     
 }
