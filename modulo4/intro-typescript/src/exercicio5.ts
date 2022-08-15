

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number) : string {
    let idade: number = anoAtual - anoNascimento;
    let tempoCarteira: number = anoAtual - anoEmissao;

    if (idade <= 20 && tempoCarteira >= 5){
        return "Carteira de identidade expirada, precisa renovar"
    } else if (idade > 20 && idade <= 50 && tempoCarteira >= 10){
        return "Carteira de identidade expirada, precisa renovar"
    } else if (idade > 50 && tempoCarteira >= 15){
        return "Carteira expirada precisa renovar"
    }else {
        return "Sua carteira de identidade está válida"
    }
}

console.log(checaRenovacaoRG(2022, 1996, 2011))
console.log(checaRenovacaoRG(2022, 1990, 2020))