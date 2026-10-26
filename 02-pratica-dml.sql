-- DADOSLAB | AULA 02 | DML | 26/10/2026
-- Nome:
-- Turma:
-- Salvar como: aula02-dml-TURMA-NOME.sql
-- Preparar antes: executar 01-base-dml.sql uma vez.
-- Neste arquivo, executar SOMENTE a instrucao ou bloco indicado.
-- Nao executar tudo de uma vez: ha pausas para previsao e respostas.
-- Use comentarios iniciados por -- para registrar suas respostas.

USE dadoslab_dml;

-- A1 | SELECT: consultar os seis registros.
SELECT id, titulo, quantidade
FROM livros
ORDER BY id;

-- A2 | WHERE e ORDER BY: consultar titulos disponiveis.
SELECT id, titulo, quantidade
FROM livros
WHERE quantidade > 0
ORDER BY quantidade DESC, id;

-- P1 | Liste id e titulo dos livros com quantidade = 0.
-- Escreva seu SELECT abaixo.
-- Resultado observado e explicacao:

-- A3 | INSERT: executar uma vez, quando o professor orientar.
INSERT INTO livros (id, titulo, area, quantidade)
VALUES (7, 'Python para iniciantes', 'Programacao', 3);

-- A4 | Conferir a inclusao.
SELECT id, titulo, quantidade
FROM livros
WHERE id = 7;

SELECT COUNT(*) AS total FROM livros;

-- P2 | Total antes: __ | Total depois: __
-- Uma linha e tres exemplares significam:
-- Se repetir o id 7:

-- A5 | UPDATE: primeiro confira o alvo.
SELECT id, titulo, quantidade
FROM livros
WHERE id = 7;

UPDATE livros
SET quantidade = 8
WHERE id = 7;

-- A6 | Conferir a alteracao.
SELECT id, titulo, quantidade
FROM livros
WHERE id = 7;

SELECT COUNT(*) AS total FROM livros;

-- P3 | Quantidade antes: __ | Quantidade depois: __
-- Total de linhas apos UPDATE: __
-- O papel de WHERE:

-- A7 | DELETE: executar uma instrucao por vez, na ordem.
SELECT id, titulo, quantidade
FROM livros
WHERE id = 7;

DELETE FROM livros
WHERE id = 7;

SELECT id, titulo, quantidade
FROM livros
WHERE id = 7;

SELECT COUNT(*) AS total FROM livros;

-- P4 | Resultado da busca pelo id 7: __
-- Total de linhas apos DELETE: __
-- O que desapareceu? O que permaneceu?

-- B | ATIVIDADE INDIVIDUAL
-- Ponto de partida: seis registros iniciais, sem ids 7 e 8.
-- B1 | Cadastre id 8, titulo Algoritmos,
--      area Programacao, quantidade 4. Consulte e confira.
-- Escreva os comandos abaixo e registre o resultado:

-- B2 | Consulte e altere somente o id 8 para quantidade 5.
--      Consulte novamente e registre o resultado:

-- B3 | Consulte e exclua somente o id 8.
--      Confira a ausencia e conte as linhas. Registre:

-- B4 | Explique o papel de cada comando e do WHERE:
-- SELECT:
-- INSERT:
-- UPDATE:
-- DELETE:
-- WHERE:

-- BILHETE DE SAIDA
-- Minha maior dificuldade:
-- O que consigo executar e explicar sem copiar:

-- ENTREGA: salvar o SQL identificado e entregar ao professor na aula.
-- Nao ha envio automatico pelo portal.
