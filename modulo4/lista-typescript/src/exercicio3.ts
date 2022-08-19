// Exercicio3

enum Genero {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comedia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type Movie = {
  name: string;
  yearReleased: number;
  gender: Genero;
  avaluation?: number;
};

function movieClassification(
  name: string,
  yearReleased: number,
  gender: Genero,
  avaluation?: number
): Movie {
  if (avaluation) {
    return {
      name: name,
      yearReleased: yearReleased,
      gender: gender,
      avaluation: avaluation,
    };
  } else {
    return { name: name, yearReleased: yearReleased, gender: gender };
  }
}

console.table(movieClassification("Get Out", 2017, Genero.TERROR ))
console.log(movieClassification("Lord of rings: Return of the King", 2003, Genero.DRAMA, 9))
