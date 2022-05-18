//--------------------------------------------------------------Exercício laços

//----------------------------------------- Parte de interpretação de código

//----------------------- Questão 1.

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O código cria um loop de começo com o indice igual a zero, a condição de que o mesmo seja menor que cinco, 
// o incremento seja o índice somado a um e que tenha como a ação que se repetida atribuir a variável "valor" a soma dela mesma mais o índice
// Irá imprimir o valor 10

//----------------------- Questão 2.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//---------- Letra a)
// Será impresso todos os elementos do array que tem o valor maior que 18: "19, 21, 23, 25, 27, 30"

//---------- Letra b)

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let i = 0
// for (let numero of lista) {
//     console.log(i)
//     i++
// 	}




//----------------------- Questão 3.

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Será impresso a variável "linha" com um asterístico até a condição que é 4 asteriticos no caso: "*" "**" "***" "****"


//----------------------------------------- Parte de escrita do código

//----------------------- Questão 1.

const qntBichos = Number(prompt("Quantos pets você tem?"))

if(qntBichos == 0){
    console.log("Que pena!Você pode adotar um pet!") // Letra a)
}else{
    let nomesPets = []
    let i = 0
    while (i < qntBichos) {
        nomesPets.push(prompt("Qual é o nome do seu pet?"))
        i++
        } 
        console.log(nomesPets) // Letras b) e c)
} 

//----------------------- Questão 2.
// Letra a)

const valoresArray = (array) =>{
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
valoresArray([1, 2, 5, 6, 7])
// Letra b)

const divisaoValoresArray = (array) =>{
    for(let i = 0; i < array.length; i++){
        array[i] = array[i] / 10
        console.log(array[i])
    }
}
divisaoValoresArray([10, 20, 500, 100, 110])
// Letra c)

const arrayPares = (array) =>{
    let pares = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            pares.push(array[i])
        }
    } 
    console.log(pares)
}

arrayPares([1,2,3,4,5])

// Letra d)

const novoArray = (array) => {
   let newArray = []
   for(let i = 0; i < array.length; i++){
       newArray.push(`O elemento do index ${i} é: ${array[i]}`)
   }
   console.log(newArray)
}
novoArray([1,2,3,4])

// Letra e)

const maiorMenorElementos = (array) => {
    let maiorValor = 0
    let menorValor = 100000
    for(let i = 0; i < array.length; i++){

        if(array[i] > maiorValor){
            maiorValor = array[i]
        } 
        
        if(array[i] < menorValor){
            menorValor = array[i]
        
    }
}console.log(maiorValor, menorValor)
}
maiorMenorElementos([120,2,3,4,5,10,20,21,50,33,100])
