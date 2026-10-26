-- DADOSLAB | AULA 02 | 26/10/2026 | Prof. Fabricio Rodrigues
-- Base autoral, dados ficticios. Pratica em MySQL 8.0/8.4.
-- ATENCAO: executar o arquivo inteiro recria SOMENTE
-- dadoslab_dml.livros e apaga as alteracoes dessa tabela de treino.
-- Nao usar este nome para dados pessoais ou de outros projetos.
-- Salve sua pratica antes de reiniciar. Nenhum outro esquema e apagado.

CREATE DATABASE IF NOT EXISTS dadoslab_dml
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE dadoslab_dml;

DROP TABLE IF EXISTS livros;

CREATE TABLE livros (
  id INT NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  area VARCHAR(40) NOT NULL,
  quantidade INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE = InnoDB;

INSERT INTO livros (id, titulo, area, quantidade)
VALUES
  (1, 'Redes de computadores', 'Redes', 4),
  (2, 'HTML e CSS', 'Desenvolvimento Web', 5),
  (3, 'Introducao ao SQL', 'Banco de Dados', 2),
  (4, 'Logica de programacao', 'Programacao', 0),
  (5, 'Sistemas operacionais', 'Sistemas', 3),
  (6, 'Manutencao de computadores', 'Hardware', 1);

USE dadoslab_dml;
SELECT DATABASE() AS banco_atual;
SELECT COUNT(*) AS total FROM livros;
SELECT id, titulo, area, quantidade
FROM livros
ORDER BY id;
