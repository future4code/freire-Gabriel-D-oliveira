<!--  Exercício relações SQL -->


<!-- 1 Questão -->

a) Uma chave estrangeira é um chave que recebe uma informação de outra tabela.

b)INSERT INTO Ratings (id, comment, rate, movie_id)
VALUES
("a", "Filme muito interessante", 7, "002"),
("b", "Um clássico do cinema brasileiro", 8.5, "003"),
("c", "Obra prima do cinema nacional que representa a dura realidade de boa parte do povo brasileiro", 9, "004");

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`freire-gabriel-martins`.`Ratings`, CONSTRAINT `Ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
O erro indica que a restrição da chave estrangeira falhou, pois não existe o id do filme fornecido e portanto não há relação entre as tabelas.

d) ALTER TABLE Filmes DROP COLUMN avaliacao;

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`freire-gabriel-martins`.`Ratings`, CONSTRAINT `Ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
O erro indica que não se pode apagar ou atualizar uma coluna pai, ou seja, um coluna que esteja sendo usada como chave estrangeira em outra tabela.

<!-- 2 Questão -->

a) Esta tabela serve para podermos fazer uma multipla relação entre os filmes e os atores, visto que não há restrição nas relações.

b)INSERT INTO MovieCast (movie_id, actor_id)
VALUES 
("002", "001"),
("002", "005"),
("002", "006"),
("004", "008"),
("004", "006"),
("003", "002");


c)  Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`freire-gabriel-martins`.`Ratings`, CONSTRAINT `Ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
O erro indica que a restrição da chave estrangeira falhou, pois não existe o id do ator fornecido e portanto não há relação entre as tabelas.

d)  Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`freire-gabriel-martins`.`Ratings`, CONSTRAINT `Ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
O erro indica que não se pode apagar ou atualizar uma coluna pai, ou seja, um coluna que esteja sendo usada como chave estrangeira em outra tabela.


<!-- 3 Questão -->

a) A query está selecionando os Movie juntamnete com a tabela Rating, retornando os dados de foma que a coluna ID da tabela Movie seja igual a coluna movie_id da tabela Ratings. O operador ON restringe o retorno dos dados seguindo a condição explicitada.

b) SELECT nome, Filmes.id, rate FROM Filmes
INNER JOIN Ratings ON Filmes.id = Ratings.movie_id

<!-- 4 Questão  -->

a) SELECT nome, Filmes.id, rate, comment FROM Filmes
LEFT JOIN Ratings ON Filmes.id = Ratings.movie_id

b) SELECT nome, Filmes.id, actor_id FROM Filmes
RIGHT JOIN MovieCast ON Filmes.id = MovieCast.movie_id;

c) SELECT AVG(rate), nome, Filmes.id FROM Ratings
RIGHT JOIN Filmes ON Filmes.id = Ratings.movie_id
GROUP BY Filmes.id;