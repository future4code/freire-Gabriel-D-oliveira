// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("Indique a altura do retangulo!")
  let largura = prompt("Indique a largura do retangulo!")
  let areaRetangulo = Number(altura) *Number(largura)
  
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Qual é o ano em vigor?")
  let anoNascimento = prompt("Em qua ano você nasceu?")
  let idade = Number(anoAtual) - Number(anoNascimento)
  
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let indiceMassaCorporea = peso / (altura*altura)

 return Number(indiceMassaCorporea)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Insira o seu nome!")
  const idade = prompt("Insira sua idade!")
  const email = prompt("Insira seu e-mail!")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Indique sua cor favorita!")
  const cor2 = prompt("Indique outra cor favorita!")
  const cor3 = prompt("Indique sua terceira cor favorita!")
  let arrayCores = []
  arrayCores.push(cor1)
  arrayCores.push(cor2)
  arrayCores.push(cor3)
  
  console.log(arrayCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  console.log(string.toUpperCase())
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let semPrejuizo = custo / valorIngresso

  console.log(semPrejuizo)
  return semPrejuizo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  console.log(string1.length == string2.length)
  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  console.log(array[0])
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoElemento = (array.length - 1)

  console.log(array[ultimoElemento])
  return array[ultimoElemento]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  const ultimoElemento = (array.length - 1)
  const troca = primeiroElemento
  array[0] = array[array.length - 1]
  array[ultimoElemento] = troca

  console.log(array)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const igualdadeCaps = string1.toLowerCase() == string2.toLowerCase()
  console.log(igualdadeCaps)
  return igualdadeCaps
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
  let anoAtual = prompt("Qual é o ano em vigor?")
  let anoNascimento = prompt("Em qua ano você nasceu?")
  let anoEmissao = prompt("Em qual ano seu RG foi tirado?")
  let idade = Number(anoAtual) - Number(anoNascimento)
  let tempoEmissao = Number(anoAtual) - Number(anoEmissao)
  let condEmissao1 = idade <= 20 && tempoEmissao >= 5
  let condEmissao2 = idade >= 20 && idade <= 50 && tempoEmissao >= 10
  let condEmissao3 = idade > 50 && tempoEmissao >= 15

  console.log(condEmissao1 || condEmissao2 || condEmissao3)
  return condEmissao1 || condEmissao2 || condEmissao3
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  anoBissexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0
  
  console.log(anoBissexto)
  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorIdade = prompt("Você tem 18 anos ou mais?")
  const ensinoMedio = prompt("Completou o ensino médio?")
  const horarioLivre = prompt("Possui disponibilidade de horário?")
  const cond1 = maiorIdade.includes("sim")
  const cond2 = ensinoMedio.includes("sim")
  const cond3 = horarioLivre.includes("sim")
  const inscricaoValida = cond1 && cond2 && cond3

  console.log(inscricaoValida)
  
}