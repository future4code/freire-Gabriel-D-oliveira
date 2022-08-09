//********************************************* Exercício 1
//A) Acessamos os pararametros do node através do process.argv[index], onde devemos identificar o elemento, index, do array gerado pelo node como padrão

//B) e C)

if (!process.argv[2] || !process.argv[3]) {
  return console.log(`Favor inserir os dois parâmetros esperados`);
} else {
  console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[3]) + 7}`);
  ;
}
