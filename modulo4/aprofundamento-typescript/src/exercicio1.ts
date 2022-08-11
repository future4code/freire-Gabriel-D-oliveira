//a) O typescript indica um erro, pois declaramos a variável com o tipo de string e passamos outro tipo de informação.

let minhaString: string = "minha string";
// minhaString = 12

//B) Usamos o union type

let meuNumero: number | string = 0;
meuNumero = 12;
meuNumero = "ola";

//C)

let pessoa: { nome: string; idade: string; corFavorita: string } = {
  nome: "luis",
  idade: "24",
  corFavorita: "Verde",
};

type persona = {
  nome: string;
  idade: string;
  corFavorita: string;
};

let pessoa1: persona = {
  nome: "joao",
  idade: "35",
  corFavorita: "Azul",
};

let pessoa2: persona = {
  nome: "Luiza",
  idade: "26",
  corFavorita: "Amarelo",
};

let pessoa3: persona = {
  nome: "Matheus",
  idade: "36",
  corFavorita: "vermelho"
};

// D)

enum coresArcoIris {
  VERMELHO = "vermelho",
  AZUL = "azul",
  VERDE = "verde",
  AMARELO = "amarelo",
  VIOLETA = "violeta",
}

type personaAjusted = {
    nome: string;
    idade: string;
    corFavorita: coresArcoIris;
  };

let pessoa4: personaAjusted = {
    nome: "Matheus",
    idade: "36",
    corFavorita: coresArcoIris.VERMELHO,
  };
  
  
let pessoa5: personaAjusted = {
    nome: "Joao",
    idade: "26",
    corFavorita: coresArcoIris.AZUL,
  };

  console.table(pessoa1)
  console.table(pessoa5)