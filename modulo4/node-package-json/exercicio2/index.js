// //********************************************* Exercício 2

const operators =()=> {
    if(process.argv[2] == "add"){
        return `Resposta: ${Number(process.argv[3]) + Number(process.argv[4])}` 
    }else if (process.argv[2] == "sub"){
        return `Resposta: ${Number(process.argv[3]) - Number(process.argv[4])}`
    }else if (process.argv[2] == "mult"){
        return `Resposta: ${Number(process.argv[3]) * Number(process.argv[4])}`
    }else {process.argv[2] == "div"
        return `Resposta: ${Number(process.argv[3]) / Number(process.argv[4])}`
    } 
}

if(!process.argv[2] || !Number(process.argv[3]) || !Number(process.argv[4])) {
    console.log(`Favor inserir os três parâmetros esperados: uma operação aritmética (add, sub, mult ou div) e dois valores númericos`)

}else{
    console.log(operators())
}

