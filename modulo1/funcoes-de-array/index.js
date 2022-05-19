//-------------------------------------------- Exercício funções de array

//----------------------------- Parte de interpretação de código

//-------------------------- Questão.1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// Letra A: Vai ser impresso como tem:  {nome: "Amanda Rangel", apelido: "Mandi",} o indice 0 e 
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo"} o array inteiro, repetida essa impressao para cada elemento do array.

//-------------------------- Questão.2

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

// const novoArrayB = usuarios.map((item, index, array) => {
//     return item.nome
//  })
 
//  console.log(novoArrayB)

//Letra A: Vai ser impresso um array com a propriedade "nome" do array de objetos original: ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//-------------------------- Questão.3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//Letra A: Vai ser impresso um array com os elementos o quais a propriedade "apelido" não contém o elemento "Chijo"
// [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }]

//----------------------------- Parte de escrita de código

//-------------------------- Questão.1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //Letra a:

 const nomeDoguinhos = pets.map((dog, indice, array) => {
          return dog.nome
 })

console.log(nomeDoguinhos)

 //Letra b:

 const cachorrosSalsichas = pets.filter((dog) =>{
     return dog.raca === "Salsicha"
 })

 console.log(cachorrosSalsichas)

 //Letra c:

 const cachorrosPoodles = pets.filter((dog) => {
     return dog.raca === "Poodle"
 })
console.log(cachorrosPoodles)

const descontoPoodles = cachorrosPoodles.map((dog) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}!`
})

console.log(descontoPoodles)

//-------------------------- Questão.2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //Letra a:

 const nomesProdutos = produtos.map((item) =>{
        return item.nome
 })

 console.log(nomesProdutos)

 // Letra b:

 const preco95Porcento = produtos.map((item) => {
    return {nome:item.nome, preco:item.preco * 0.95}
 })

console.log(preco95Porcento)

 // Letra c:

 const objetosCategoriaBebidas = produtos.filter((item) => {
     return item.categoria === "Bebidas"
 })

 console.log(objetosCategoriaBebidas)

 //Letra d:

 const produtosYpe = produtos.filter((item) => {
     return item.nome.includes("Ypê")
 })

 console.log(produtosYpe)

 //Letra e:

 const fraseProdutosYpe = produtosYpe.map((item) => {
     return `Compre ${item.nome} por R$${item.preco}`
 })

 console.log(fraseProdutosYpe)

 //------------------------------Desafio 

 //-------------------- Questão.1

 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const nomesPokemonsOrdemAlfabetica = pokemons.map((item) => { 
        console.log(item.nome) 
    return item.nome  
 })

 console.log(nomesPokemonsOrdemAlfabetica.sort()) // Letra a
