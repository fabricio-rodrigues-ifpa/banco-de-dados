-- DADOSLAB | AULA 04 | 16/11/2026 | Prof. Fabricio Rodrigues
-- Dados ficticios. Base exclusiva de estudo, independente das aulas anteriores.
-- Execute UMA VEZ em uma conexao MySQL de estudo com permissao de criacao.
-- Nao ha DROP, DELETE, UPDATE nem rotina automatica de reinicio.
-- Se o esquema ja existir, o CREATE DATABASE gera erro: PARE aqui.
-- Reutilize a base ja conferida; nao continue a carga nem apague outros bancos.

CREATE DATABASE dadoslab_aula04_20261116
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE dadoslab_aula04_20261116;

CREATE TABLE livros (
  id INT NOT NULL PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  area VARCHAR(40) NOT NULL,
  quantidade INT NOT NULL DEFAULT 0
) ENGINE=InnoDB;

CREATE TABLE leitores (
  id INT NOT NULL PRIMARY KEY,
  nome VARCHAR(80) NOT NULL,
  turma VARCHAR(20) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE emprestimos (
  id INT NOT NULL PRIMARY KEY,
  livro_id INT NOT NULL,
  leitor_id INT NOT NULL,
  data_emprestimo DATE NOT NULL,
  data_devolucao DATE NULL,
  FOREIGN KEY (livro_id) REFERENCES livros(id),
  FOREIGN KEY (leitor_id) REFERENCES leitores(id)
) ENGINE=InnoDB;

INSERT INTO livros (id, titulo, area, quantidade) VALUES
  (1, 'Redes de computadores', 'Redes', 4),
  (2, 'HTML e CSS', 'Desenvolvimento Web', 5),
  (3, 'Introducao ao SQL', 'Banco de Dados', 2),
  (4, 'Logica de programacao', 'Programacao', 0),
  (5, 'Sistemas operacionais', 'Sistemas', 3),
  (6, 'Manutencao de computadores', 'Hardware', 1),
  (7, 'CSS responsivo', 'Desenvolvimento Web', 2),
  (8, 'Modelagem de dados', 'Banco de Dados', 0),
  (9, 'JavaScript essencial', 'Desenvolvimento Web', 0),
  (10, 'Python basico', 'Programacao', 3);

INSERT INTO leitores (id, nome, turma) VALUES
  (1, 'Ana', '2A'),
  (2, 'Bruno', '2B'),
  (3, 'Carla', '2A'),
  (4, 'Diego', '2B'),
  (5, 'Elisa', '2A'),
  (6, 'Fabio', '2C');

INSERT INTO emprestimos (id, livro_id, leitor_id, data_emprestimo, data_devolucao) VALUES
  (1, 3, 1, '2026-11-02', NULL),
  (2, 2, 2, '2026-11-03', '2026-11-10'),
  (3, 1, 1, '2026-11-05', NULL),
  (4, 6, 3, '2026-11-07', '2026-11-12'),
  (5, 7, 4, '2026-11-09', NULL),
  (6, 3, 5, '2026-11-10', NULL),
  (7, 5, 2, '2026-11-11', '2026-11-14'),
  (8, 10, 3, '2026-11-12', NULL);

SELECT DATABASE() AS banco_atual, VERSION() AS versao;
SELECT COUNT(*) AS total_livros FROM livros;
SELECT COUNT(*) AS total_leitores FROM leitores;
SELECT COUNT(*) AS total_emprestimos FROM emprestimos;
-- Conferencia: 10 livros, 6 leitores e 8 emprestimos.
