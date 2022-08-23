<!-- Exercicio aprofundamneto SQL -->

<!-- 1 Questão -->

a) ALTER TABLE Actor DROP COLUMN salary. Esse comando remove a coluna salary da tabela Actor.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6). Esse comando modifica o nome da variável 'gender' por 'sex'.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255). Essa query modifica o tipo de variável para uma string com até 255 caracteres.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

<!-- 2 Questão -->

a) UPDATE Actor
SET name = "Eva Green", birth_date = "1980-07-06"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005"

UPDATE Actor
SET name = "juliana paes"
WHERE id = "005"

c) UPDATE Actor
SET 
name = "Francisco Cuoco",
birth_date = "1933-11-29",
salary = 800000,
gender = "male"
WHERE id = "005";

d) UPDATE Actor
SET 
name = "Francisco Cuoco",
birth_date = "1933-11-29",
salary = 800000,
gender = "male"
WHERE id = "015";  

Quando tentamos atualizar uma informação em uma coluna que não existe na tabela o SQL indica o erro de coluna inexistente. Já quando fazemos uma atualização onde
a informação passada no WHERE não existe ele simplesmente atualiza a informação como vazia.

<!-- 3 Questão -->

a) DELETE FROM Actor
WHERE name = "Fernanda Montenegro"

b) 
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000

<!-- 4 Questão -->

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor;

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor; 

<!-- 5 Questão -->

a) A query contabiliza os valores passados na coluna gender, agrupando aqueles com valores iguais.

b) SELECT id, name
FROM Actor
WHERE gender = "male"
ORDER BY name DESC;

c) SELECT * FROM Actor
WHERE gender = "male"
ORDER BY salary ASC;

d) SELECT * FROM Actor
WHERE gender = "male"
ORDER BY salary DESC LIMIT 3;

E) SELECT AVG(salary), gender FROM Actor
GROUP BY gender

<!-- 6 Questão -->

a) ALTER TABLE Filmes ADD playing_limit_date DATE;

b) ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;

c) UPDATE Filmes
SET playing_limit_date = "2022-09-30"
WHERE id = "004";

UPDATE Filmes
SET playing_limit_date = "2006-05-06"
WHERE id = "001";

d) Ao atualizar alguma informação passada na query onde o id é igual '001', ele simplesmente atualiza a informação como vazia.


