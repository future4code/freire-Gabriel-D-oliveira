//********************************************* Exercício 3

const initialList = ["Estudar programação"];

const addItemList = function () {
  let chore = process.argv[2];
  let newList = [...initialList, chore];
  console.log("Tarefa adicionada com sucesso");
  return newList;
};

console.log(addItemList());

