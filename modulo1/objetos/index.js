//-------------------------------------------- Exercício Objetos

//----------------------------------- Parte Interpretação do código

//--------------------------- Questão.1

//------------------------- Letra a)

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) // Imprime "Matheus Nachtergaele"
// console.log(filme.elenco[filme.elenco.length - 1]) // Imprime "Virginia Cavendish"
// console.log(filme.transmissoesHoje[2]) // Imprime canal: "Globo", horario: "14h"

//------------------------------- Questão.2

//--------------------------- Letra a)

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro) // Imprime {nome: 'Juca', idade: 3, raca: 'SRD'}
// console.log(gato) // Imprime {nome: 'Juba', idade: 3, raca: 'SRD'}
// console.log(tartaruga) // Imprime {nome; 'Jubo', idade: 3, raca: 'SRD'}

//--------------------------- Letra b)
// Ela copia um objeto, espalhamento ou Spread.

//------------------------------- Questão.3

//--------------------------- Letra a)

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) // Imprime false
// console.log(minhaFuncao(pessoa, "altura")) // Imprime undefined

//--------------------------- Letra b)
// O valor false foi impresso porque ele corresponde a propriedade backender, mas a altura será undefined, pois não foi declarado essa propriedade

//----------------------------------- Parte Interpretação do código

//------------------------------- Questão.1

//--------------------------- Letra a)

const pessoa = {
    nome: "Gabriel Martins",
    apelidos: ["Gabs", "Biel", "GG"]
}

function podeMeChamar (objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

podeMeChamar(pessoa)

//--------------------------- Letra b)

const novosApelidos = {
    ...pessoa,
    apelidos: ["Gabe", "Martins", "Jabers"]
}

podeMeChamar(novosApelidos)

//------------------------------- Questão.2

//--------------------------- Letra a)

const perfilUm = {
    nome: "Jonas",
    idade: 32,
    profissao: "Comprador"
}

const perfilDois = {
    nome: "Guilherme",
    idade: 26,
    profissao: "Músico"
}

//--------------------------- Letra b)

function mostrarPerfil (perfil) {
    const arrayPerfil = [perfil.nome, perfil.nome.length, perfil.idade, perfil.profissao, perfil.profissao.length]

    return arrayPerfil
}

console.log (mostrarPerfil(perfilDois))
console.log (mostrarPerfil(perfilUm))

//------------------------------- Questão.3

//--------------------------- Letra a)

const carrinho = []

//--------------------------- Letra b)

const frutaSacolaoUm = {
    nome: "Laranja",
    disponibilidade: true
}

const frutaSacolaoDois = {
    nome: "Uva",
    disponibilidade: true
}

const frutaSacolaoTres = {
    nome: "Cajá",
    disponibilidade: true
}

//--------------------------- Letra c)

function encherCarrinho (fruta1,) {
    return carrinho.push(fruta1)
}

encherCarrinho(frutaSacolaoUm)
encherCarrinho(frutaSacolaoDois)
encherCarrinho(frutaSacolaoTres)

//--------------------------- Letra d)

console.log(carrinho)

////--------------------------------- Desafios

//------------------------------- Questão.1



function perguntarUsuario () {
    const nomeUsuario = prompt ("Qual é o seu nome?")
    const idadeUsuario = prompt("Qual é a sua idade?")
    const profissaoUsuario = prompt("Qual é a sua profissão?")

    const objetoUsuario = {
    nome: nomeUsuario,
    idade: idadeUsuario,
    profissao: profissaoUsuario
        }

console.log(objetoUsuario)
console.log(typeof(objetoUsuario))
}

perguntarUsuario()



//------------------------------- Questão.2

const filmeX = {
    nome:"A origem",
    anoLancamento: 2010
}

const filmeY = {
    nome: "Corra!",
    anoLancamento: 2017
}

function compararFilmes (objeto1, objeto2) {
const filmeMaisVelho = objeto1.anoLancamento < objeto2.anoLancamento
const filmeMesmoAno = objeto1.anoLancamento === objeto2.anoLancamento

console.log(`O primeiro filme foi lançado antes do segundo? ${filmeMaisVelho}
O primeiro filme foi lançado no mesmo ano do segundo? ${filmeMesmoAno}`)
}

compararFilmes(filmeX, filmeY)


//------------------------------- Questão.3

function controlarEstoque (objeto) {

    const mudancaEstoque = {
        ...objeto,
        disponibilidade: !objeto.disponibilidade
    }

console.log(mudancaEstoque) 
}

controlarEstoque(frutaSacolaoUm)
controlarEstoque(frutaSacolaoDois)
controlarEstoque(frutaSacolaoTres)