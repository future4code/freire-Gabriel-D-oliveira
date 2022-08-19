// Exercicio1

function nomeDataNascimento(nome: string, dataNascimento: string) : string {
 let arrayDataNascimento: string[] = dataNascimento.split("/", 3)

 return `Olá me chamo ${nome}, nasci no dia ${arrayDataNascimento[0]} do mês ${arrayDataNascimento[1]} do ano ${arrayDataNascimento[2]}`    
}

console.log(nomeDataNascimento("Gabriel", "27/06/1996"))