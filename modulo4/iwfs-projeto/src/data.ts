export type transacoes = {
    valor: number;
    data: string;
    description: string;
  };
  
  export type account = {
    nome: string;
    cpf: string;
    dataNascimento: string;
    saldo: number;
    transacoes?: transacoes[]
  };
  
  export const accountList: account[] = [
    { nome: "Fulano", cpf: "000.123.456-78", dataNascimento: "01/01/1948", saldo: 0 },
    { nome: "Sicrano", cpf: "000.789.456-78", dataNascimento: "01/11/1978", saldo: 0 }
  ];
  