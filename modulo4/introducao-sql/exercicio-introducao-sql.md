<!-- Exercicio introdução a SQL -->

<!-- 1 Questão -->

a) O primeiro comando é o CREATE TABLE que cria a tabela recebendo um nome e as demais informações. O comando VARCHAR(N) tipifica a variável/coluna como uma string de até "N" caracteres e o comando DATE tipifica a coluna como uma data (pradonizada como Y-M-D).
Já os comandos PRIMARY KEY e NOT NULL significam, respectivamnente, que os valores recebidos nessa coluna são únicos e identificam cada "objeto" de informação e que os valores de uma coluna não podem ser nulos.

B) O comando SHOW DATABASES mostra os bancos de dados cadastrados num server específico e TABLES indica as tabelas existentes nos bancos de dados.

C) DESCRIBE detalha as informaçõe da tabela indicada no comando, mostrando os nomes das colunas e o tipos de cada uma delas.

<!-- 2 Questão -->

a) A query usada foi: INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Perez",
1200000,
"1963-08-23",
"Female");

b) Código de erro 1062: Entrada duplicada de "002" para a chave primaria (identificador). Isto aconteceu pois já havia uma ator inserido na tabela com a ID informada, impossibilitando
a inserção de outro ator com a mesma chave de identificação.

c) Código de erro 1136: A contagem de colunas não corresponde à contagem de valores na linha 1.
O erro ocorreu devido a diferença de colunas passadas no comando INSERT INTO, onde consta apenas três informações e não as cinco como está estruturada a tabela.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

d) Código de erro: 1364. O campo 'nome' não tem um valor padrão. Isto se deve, pois ao ser declarado o campo 'nome' foi restrito para não receber o valor nulo e como não houve valor passado, o valor assumido foi o nulo.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);

e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1. O valor da coluna 'birth_date' foi passado com o tipo number, mas na tabela esse campo foi indicado como uma date (string com padrão de data específico)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

<!-- 3 Questão -->

a) SELECT * from Actor WHERE gender = "female";

b) SELECT salary FROM Actor WHERE name = "Tony Ramos";

c) SELECT * FROM Actor WHERE gender = "invalid";
A tabela veio com os valores vazios, pois o filtro foi pasasdo com um valor não existente para gender 

d) SELECT id, name, salary FROM Actor WHERE salary < 500000;

e) Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'. O errou ocorreu porque o nome do campo foi escrito de forma errada, 'nome' e não 'name'.
SELECT id, name FROM Actor WHERE id = "002"

<!-- 4 Questão -->

b) SELECT * FROM Actor
WHERE name NOT LIKE "A%" and salary > 350000;

c) SELECT * FROM Actor 
WHERE name LIKE "%g%" OR name LIKE "%G%";

d)SELECT * FROM Actor 
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%A%" OR name LIKE "%a%" ) AND (salary BETWEEN 350000 AND 900000);

<!-- 5 Questão -->

a) CREATE TABLE Filmes (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR (255) NOT NULL,
sinopse TEXT NOT NULL,
data_lancamento DATE NOT NULL,
avaliacao INT NOT NULL
)

b) INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES("001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
7);

c) INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES("002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10);

d) INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES("003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
"2017/11/02",
8);

e) INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES("004",
"Cidade de Deus",
"Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
"2002/08/30",
9);


<!-- 6 Questão -->

a) SELECT id, nome, avaliacao FROM Filmes 
WHERE id = "004";

b) SELECT * FROM Filmes 
WHERE nome = "Dona Flor e Seus Dois Maridos";

c) SELECT id, nome, sinopse FROM Filmes 
WHERE avaliacao >= 7;


<!-- 7 Questão -->

a) SELECT * FROM Filmes 
WHERE nome LIKE "%vida%";


b) SELECT * FROM Filmes 
WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%";


c) SELECT * FROM Filmes 
WHERE data_lancamento < "2022/08/22";

d) SELECT * FROM Filmes 
WHERE (data_lancamento < "2022/08/22") AND (nome LIKE "%vida%" OR sinopse LIKE "%vida%") AND avaliacao >= 7 ;