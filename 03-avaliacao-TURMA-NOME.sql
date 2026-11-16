-- DADOSLAB | AULA 04 | 16/11/2026 | AVALIACAO INDIVIDUAL - 10,0 PONTOS
-- Nome: 
-- Turma: 
-- Entregue este arquivo renomeado e identificado ao professor.
-- Nao ha envio automatico.
USE dadoslab_aula04_20261116;

-- Q1 | Seleção por área | 1,0 ponto(s)
-- Liste somente id e titulo dos livros da área Banco de Dados. Ordene por id crescente. Escreva o SQL e registre os IDs do resultado.
-- SQL (escreva abaixo):


-- IDs esperados antes de executar: 
-- IDs observados na ordem solicitada: 
-- Explicacao / teste / dificuldade: 

-- Q2 | Quantidade e ordenação | 1,5 ponto(s)
-- Liste id, titulo e quantidade dos livros com quantidade maior que zero. Ordene pela maior quantidade primeiro e, nos empates, pelo menor id. Escreva o SQL e registre os IDs na ordem do resultado.
-- SQL (escreva abaixo):


-- IDs esperados antes de executar: 
-- IDs observados na ordem solicitada: 
-- Explicacao / teste / dificuldade: 

-- Q3 | Duas áreas e uma condição comum | 2,0 ponto(s)
-- Liste id, titulo, area e quantidade dos livros de Desenvolvimento Web ou Programacao que tenham quantidade maior ou igual a 3. A condição de quantidade vale para as duas áreas. Ordene por id crescente. Escreva o SQL e registre os IDs do resultado.
-- SQL (escreva abaixo):


-- IDs esperados antes de executar: 
-- IDs observados na ordem solicitada: 
-- Explicacao / teste / dificuldade: 

-- Q4 | Empréstimos em aberto até uma data | 2,0 ponto(s)
-- Liste id, livro_id, leitor_id e data_emprestimo dos empréstimos sem devolução registrada que foram feitos até 09/11/2026, incluindo esse dia. Ordene por data_emprestimo crescente e depois por id crescente. Use o literal de data 2026-11-09. Escreva o SQL e registre os IDs do resultado.
-- SQL (escreva abaixo):


-- IDs esperados antes de executar: 
-- IDs observados na ordem solicitada: 
-- Explicacao / teste / dificuldade: 

-- Q5 | Teste de limite | 1,5 ponto(s)
-- Escreva duas consultas que mostrem id e quantidade, em ordem crescente de id: uma com quantidade > 2 e outra com quantidade >= 2. Registre os IDs de cada resultado, identifique os IDs que aparecem apenas na segunda consulta e explique a diferença.
-- SQL (escreva abaixo):


-- IDs esperados antes de executar: 
-- IDs observados na ordem solicitada: 
-- Explicacao / teste / dificuldade: 

-- Q6 | Corrigir um teste com NULL | 2,0 ponto(s)
-- O bibliotecário quer os empréstimos que já têm devolução registrada. A consulta abaixo não responde à pergunta. Corrija-a mantendo as colunas e a ordem, registre os IDs corretos e explique por que comparar com NULL usando <> não resolve. Diga também se NULL é igual a zero ou a texto vazio.
-- Consulta com erro: SELECT id, data_devolucao FROM emprestimos WHERE data_devolucao <> NULL ORDER BY id;
-- SQL (escreva abaixo):


-- IDs esperados antes de executar: 
-- IDs observados na ordem solicitada: 
-- Explicacao / teste / dificuldade: 

