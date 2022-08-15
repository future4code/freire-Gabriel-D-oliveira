//********************************************* Exercício 1
//A) Acessamos os pararametros do node através do process.argv[index], onde devemos identificar o elemento, index, do array gerado pelo node como padrão 


// //B)

// const myName = "Gabriel Martins D'Oliveira"
// const age = 26

// console.log(`Olá, ${myName}! Você tem ${age} anos`)

// //C)

// console.log(`Olá, ${myName}! Você tem ${age} anos. Em sete anos você terá ${age +7}`)

// //********************************************* Exercício 2

// const operators =()=> {
//     if(process.argv[2] == "add"){
//         return `Resposta: ${Number(process.argv[3]) + Number(process.argv[4])}` 
//     }else if (process.argv[2] == "sub"){
//         return `Resposta: ${Number(process.argv[3]) - Number(process.argv[4])}`
//     }else if (process.argv[2] == "mult"){
//         return `Resposta: ${Number(process.argv[3]) * Number(process.argv[4])}`
//     }else if (process.argv[2] == "div"){
//         return `Resposta: ${Number(process.argv[3]) / Number(process.argv[4])}`
//     } else {
//        return console.log("Operação não existente, favor indicar uma das a seguir: add, sub, mult ou div")
//     }
    
// }

// console.log(operators())

//********************************************* Exercício 3

// const emptyList = ["Estudar programação"]

// const addItemList = function(){
//     let chore = process.argv[2]
//     let newList = [...emptyList, chore]
//     console.log("Tarefa adicionada com sucesso") 
//     return newList
// }

// console.log(addItemList())