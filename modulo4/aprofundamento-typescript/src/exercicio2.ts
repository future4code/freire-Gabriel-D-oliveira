//A) A entrada da função é uma lista de variáveis do tipo número e a saída é um objeto com as estatísticas.

import { ObjectLiteralElement } from "typescript";

function obterEstatisticas(numeros: number[]): {} {
  const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

//B) São outras varáveis dentro da função: numerosOrdenados (lista ordernada dos números), soma(number), a propriedade maior no objeto (number), a propriedade menor (number) e a propriedade média (number).

type amostraDados = {
  numeros: number[];
  obterEstatiticas: (numeros: number[]) => {};
};
