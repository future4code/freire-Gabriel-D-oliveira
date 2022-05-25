/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boa vindas ao jogo de Blackjack!")

const iniciarBlackJack = confirm("Quer iniciar uma nova rodada?")



const cartaUsuario = [comprarCarta(), comprarCarta()]
const cartaComputador = [comprarCarta(), comprarCarta()]

if(iniciarBlackJack){

const pontuaçãoUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
const pontuaçãoComputador = cartaComputador[0].valor + cartaComputador[1].valor

console.log(`Usuário - cartas: ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} - pontuação: ${pontuaçãoUsuario}`)
console.log(`Computador - cartas: ${cartaComputador[0].texto} ${cartaComputador[1].texto} - pontuação: ${pontuaçãoComputador}`)

  if(pontuaçãoUsuario > pontuaçãoComputador){
          console.log("O usuário ganhou!")
      }else if(pontuaçãoUsuario < pontuaçãoComputador){
         console.log("O computador ganhou!")
      }else{
         console.log("Empate!")   
      }

   }else{
   console.log("O jogo acabou")

}

