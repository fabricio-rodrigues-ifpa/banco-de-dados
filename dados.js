window.WEBLAB_BD = {
  "titulo": "Banco de Dados",
  "professor": "Fabrício Rodrigues",
  "inicio": "2026-10-19",
  "fim": "2026-12-14",
  "semAula": "2026-11-02",
  "avaliacao": "2026-12-07",
  "planejamento": "Encontros confirmados: 19/10 a 14/12/2026, às segundas, duas aulas de 50 minutos. A sequência será ajustada às evidências do diagnóstico.",
  "referencias": [
    {
      "id": "conceitos",
      "titulo": "MySQL: conceitos e tutorial (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/tutorial.html"
    },
    {
      "id": "tabelas",
      "titulo": "MySQL: CREATE TABLE e tipos (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/create-table.html"
    },
    {
      "id": "chaves",
      "titulo": "MySQL: chaves estrangeiras e integridade (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/create-table-foreign-keys.html"
    },
    {
      "id": "select",
      "titulo": "MySQL: SELECT (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/select.html"
    },
    {
      "id": "null",
      "titulo": "MySQL: comparação com NULL (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/problems-with-null.html"
    },
    {
      "id": "insert",
      "titulo": "MySQL: INSERT (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/insert.html"
    },
    {
      "id": "update",
      "titulo": "MySQL: UPDATE (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/update.html"
    },
    {
      "id": "grupos",
      "titulo": "MySQL: GROUP BY e HAVING (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/group-by-handling.html"
    },
    {
      "id": "join",
      "titulo": "MySQL: JOIN e LEFT JOIN (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/join.html"
    },
    {
      "id": "transacoes",
      "titulo": "MySQL: transações, COMMIT e ROLLBACK (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/commit.html"
    },
    {
      "id": "backup",
      "titulo": "MySQL: backup e recuperação (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/backup-and-recovery.html"
    },
    {
      "id": "indices",
      "titulo": "MySQL: índices (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/mysql-indexes.html"
    },
    {
      "id": "seguranca",
      "titulo": "MySQL: prevenção de injeção SQL (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/secure-client-programming.html"
    },
    {
      "id": "tipos",
      "titulo": "MySQL: tipos de dados (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/data-types.html"
    },
    {
      "id": "workbench",
      "titulo": "MySQL Workbench: executar consultas (em inglês)",
      "url": "https://dev.mysql.com/doc/workbench/en/wb-sql-editor.html"
    },
    {
      "id": "feriado",
      "titulo": "Calendário nacional de 2026",
      "url": "https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/dezembro/confira-o-calendario-oficial-de-feriados-nacionais-e-pontos-facultativos-em-2026"
    }
  ],
  "livros": [
    [
      1,
      "Redes de Computadores",
      "Redes",
      2
    ],
    [
      2,
      "Banco de Dados",
      "Dados",
      1
    ],
    [
      3,
      "HTML e CSS",
      "Web",
      3
    ],
    [
      4,
      "Lógica de Programação",
      "Programação",
      2
    ],
    [
      5,
      "Linux em Redes",
      "Redes",
      1
    ]
  ],
  "emprestimos": [
    [
      101,
      1,
      1,
      "2026-10-10",
      null
    ],
    [
      102,
      3,
      2,
      "2026-10-11",
      "2026-10-15"
    ],
    [
      103,
      1,
      3,
      "2026-10-12",
      null
    ],
    [
      104,
      2,
      1,
      "2026-10-13",
      "2026-10-16"
    ],
    [
      105,
      3,
      1,
      "2026-10-17",
      null
    ]
  ],
  "perguntas": [
    {
      "id": "F1",
      "area": "Fundamentos e ambiente",
      "titulo": "Banco, servidor e ferramenta",
      "codigo": "MySQL Server / MySQL Workbench / SQL / banco biblioteca",
      "enunciado": "Explique o papel de cada item. Fechar o Workbench apaga as tabelas? Onde ficam os dados? Relate uma ação que já fez nesse ambiente.",
      "refs": [
        "conceitos",
        "workbench"
      ]
    },
    {
      "id": "F2",
      "area": "Fundamentos e ambiente",
      "titulo": "Estrutura e manipulação",
      "codigo": "CREATE TABLE / INSERT / SELECT\nUPDATE / DELETE / DROP TABLE",
      "enunciado": "Dê a finalidade de cada comando. Explique a diferença entre DELETE FROM leitores e DROP TABLE leitores, considerando o efeito pretendido e possíveis restrições.",
      "refs": [
        "tabelas",
        "select",
        "update",
        "transacoes"
      ]
    },
    {
      "id": "M1",
      "area": "Modelagem e relações",
      "titulo": "Regras em um modelo",
      "codigo": "Uma escola oferece cursos.\nUm aluno pode cursar vários cursos.\nUm curso recebe vários alunos.\nCada matrícula tem uma data.",
      "enunciado": "Desenhe ou descreva três tabelas para esse caso. Marque PK e FK, indique as cardinalidades e explique o que representa cada linha de matrícula. Justifique como evita uma lista de cursos em um único campo.",
      "refs": [
        "conceitos",
        "chaves"
      ]
    },
    {
      "id": "M2",
      "area": "Modelagem e relações",
      "titulo": "Repetição e normalização",
      "codigo": "emprestimo_id | leitor_id | nome_leitor | turma\n101           | 1         | Ana         | 1A\n104           | 1         | Ana         | 1A",
      "enunciado": "Se Ana mudar de turma, que problema pode aparecer nessa tabela? Proponha uma reorganização e explique de qual chave nome e turma dependem. Não basta citar uma forma normal.",
      "refs": [
        "conceitos",
        "chaves"
      ]
    },
    {
      "id": "M3",
      "area": "Modelagem e relações",
      "titulo": "N:N e identificação ao longo do tempo",
      "codigo": "Ana pode pegar o mesmo livro novamente,\nem outra data.",
      "enunciado": "Como livros e leitores se relacionam ao longo do tempo? A dupla (leitor_id, livro_id) pode ser a única PK de emprestimos nessa regra? Justifique e proponha um identificador.",
      "refs": [
        "conceitos",
        "chaves"
      ]
    },
    {
      "id": "I1",
      "area": "Estrutura e integridade",
      "titulo": "Tipos e definição de tabela",
      "codigo": "CREATE TABLE devolucoes (\n  id VARCHAR(10),\n  data_devolucao VARCHAR(10),\n  multa FLOAT\n);",
      "enunciado": "Proponha uma definição melhor para uma devolução identificada, com data e multa monetária. Justifique PK, tipos e nulabilidade. Escreva pelo menos parte do CREATE TABLE em MySQL.",
      "refs": [
        "tipos",
        "tabelas"
      ]
    },
    {
      "id": "I2",
      "area": "Estrutura e integridade",
      "titulo": "Restrições em ação",
      "codigo": "Restrições em emprestimos:\nPRIMARY KEY (id)\nFOREIGN KEY (livro_id) REFERENCES livros(id)\nleitor_id INT NOT NULL\nA. id = 101 em novo empréstimo\nB. livro_id = 99 em novo empréstimo\nC. leitor_id = NULL em novo empréstimo",
      "enunciado": "Quais restrições rejeitam A, B e C, considerando a base inicial? Por que a aplicação e o banco podem validar a mesma regra? Considere as restrições acima.",
      "refs": [
        "chaves",
        "tabelas"
      ]
    },
    {
      "id": "Q1",
      "area": "Consultas e resultados",
      "titulo": "Filtro, precedência e ordenação",
      "codigo": "SELECT id, titulo, quantidade\nFROM livros\nWHERE quantidade >= 2\n  AND (area = 'Redes' OR area = 'Web')\nORDER BY quantidade DESC, id;",
      "enunciado": "Escreva as linhas na ordem esperada. Explique a condição e o risco de retirar os parênteses, mantendo o restante do WHERE.",
      "refs": [
        "select"
      ]
    },
    {
      "id": "Q2",
      "area": "Consultas e resultados",
      "titulo": "Ausência de valor",
      "codigo": "SELECT id\nFROM emprestimos\nWHERE data_devolucao = NULL;",
      "enunciado": "A consulta encontra empréstimos sem devolução? Corrija o SQL e indique os IDs esperados. Explique por que NULL, zero e texto vazio não significam a mesma coisa.",
      "refs": [
        "null"
      ]
    },
    {
      "id": "Q3",
      "area": "Consultas e resultados",
      "titulo": "JOIN e linhas repetidas",
      "codigo": "SELECT l.titulo, r.nome\nFROM emprestimos AS e\nJOIN livros AS l ON l.id = e.livro_id\nJOIN leitores AS r ON r.id = e.leitor_id\nWHERE e.data_devolucao IS NULL\nORDER BY e.id;",
      "enunciado": "Escreva o resultado. Por que um título aparece mais de uma vez? O que pode acontecer se faltar uma condição de relacionamento?",
      "refs": [
        "join"
      ]
    },
    {
      "id": "Q4",
      "area": "Consultas e resultados",
      "titulo": "LEFT JOIN e contagem",
      "codigo": "SELECT r.id, r.nome, COUNT(*) AS total\nFROM leitores AS r\nLEFT JOIN emprestimos AS e\n  ON e.leitor_id = r.id\nGROUP BY r.id, r.nome\nORDER BY r.id;",
      "enunciado": "Preveja o total mostrado para Duda. Como contar os empréstimos incluindo leitores com zero? Corrija a expressão e informe os quatro totais.",
      "refs": [
        "join",
        "grupos"
      ]
    },
    {
      "id": "Q5",
      "area": "Consultas e resultados",
      "titulo": "Agrupamento e filtro de grupos",
      "codigo": "SELECT area, COUNT(*) AS titulos,\n       SUM(quantidade) AS exemplares\nFROM livros\nGROUP BY area\nHAVING COUNT(*) >= 2\nORDER BY area;",
      "enunciado": "Qual resultado será produzido? Explique a diferença entre titulos e exemplares e por que esse filtro usa HAVING, em vez de WHERE COUNT(*) >= 2.",
      "refs": [
        "grupos"
      ]
    },
    {
      "id": "T1",
      "area": "Transações e operação",
      "titulo": "Uma operação completa",
      "codigo": "Um cadastro e seu primeiro empréstimo devem\nser confirmados juntos em tabelas InnoDB.\nA segunda gravação falha.",
      "enunciado": "Que sequência de controle usaria no MySQL para manter a operação inteira ou desfazê-la? Explique START TRANSACTION, COMMIT, ROLLBACK e o efeito de autocommit. O erro garante que toda a transação foi desfeita?",
      "refs": [
        "transacoes"
      ]
    },
    {
      "id": "O1",
      "area": "Transações e operação",
      "titulo": "Backup que pode ser recuperado",
      "codigo": "Um aluno salvou consultas.sql e disse:\n“Já tenho backup do banco.”",
      "enunciado": "Isso basta para recuperar o banco inteiro? O que precisaria preservar e como verificaria a recuperação sem depender apenas da existência de um arquivo?",
      "refs": [
        "backup"
      ]
    },
    {
      "id": "O2",
      "area": "Segurança e desempenho",
      "titulo": "Entrada do usuário e permissões",
      "codigo": "Uma aplicação concatena o texto digitado\npelo usuário dentro de uma consulta SQL.",
      "enunciado": "Que risco isso traz e como você reduziria esse risco? Um usuário usado apenas em relatórios precisa de permissão para apagar tabelas? Justifique.",
      "refs": [
        "seguranca"
      ]
    },
    {
      "id": "O3",
      "area": "Segurança e desempenho",
      "titulo": "Índice e custo de escrita",
      "codigo": "A busca por titulo em livros ficou lenta\nquando a base cresceu muito.",
      "enunciado": "Que papel um índice poderia ter? Ele sempre melhora tudo? Como verificaria o plano com EXPLAIN e a diferença entre índice comum, UNIQUE e PRIMARY KEY?",
      "refs": [
        "indices",
        "tabelas"
      ]
    }
  ],
  "aulas": [
    {
      "id": "aula-01",
      "numero": "01",
      "data": "2026-10-19",
      "dataCurta": "19/10",
      "eixo": "Diagnóstico",
      "titulo": "O quanto entendemos de Banco de Dados?",
      "subtitulo": "Diagnóstico de fundamentos, modelagem, integridade, SQL e operação em MySQL",
      "produto": "TXT/ficha com 16 respostas justificadas e registro de três tarefas SQL, incluindo os limites e apoios da tentativa.",
      "objetivos": [
        "Distinguir o que já estudou, o que consegue explicar e o que consegue produzir.",
        "Justificar chaves, relações e regras de integridade em um cenário.",
        "Interpretar resultados de consultas e escrever SQL em MySQL.",
        "Registrar previsões, erros observados e apoio recebido."
      ],
      "retomada": "Faça primeiro a tentativa individual, sem consultar o caderno ou soluções. Use “não estudei”, “não lembro” ou uma hipótese explicada. Isso ajuda o professor a distinguir exposição anterior, compreensão e autonomia.",
      "secoes": [
        {
          "titulo": "Como o diagnóstico funciona",
          "texto": [
            "São 16 situações, com níveis variados, e três tarefas de produção de SQL. O objetivo é localizar evidências por assunto, sem transformar a primeira aula em nota classificatória.",
            "Responda antes de consultar os materiais. Questões ainda não estudadas também são informação. O professor observará raciocínio, justificativa e autonomia."
          ]
        },
        {
          "titulo": "Base inicial e ferramentas",
          "texto": [
            "Dados fictícios. quantidade é o total cadastrado, não o saldo disponível. Cada empréstimo registra um livro e um leitor. NULL em data_devolucao significa que a devolução ainda não foi registrada. As consultas da biblioteca usam esta base inicial, sem as alterações da prática. Os demais casos descrevem seu próprio cenário.",
            "Use MySQL Server com o cliente que já existir no laboratório, como Workbench ou phpMyAdmin. O portal organiza a atividade e baixa arquivos; ele não executa MySQL. VS Code edita SQL e Live Server exibe a cópia do portal.",
            "O professor prepara o esquema de estudo antes da prática. Sem acesso ao servidor, escreva as consultas e previsões, marcando que não executou. Isso não equivale a desconhecer o conteúdo."
          ]
        },
        {
          "titulo": "Depois da coleta",
          "texto": [
            "O professor compara explicações, SQL escrito e resultados. Na devolutiva, a turma discute os pontos que precisam de retomada. As referências e o caderno servem ao estudo posterior."
          ]
        }
      ],
      "atividade": [
        "Responder F1 a O3 e indicar a familiaridade em cada item.",
        "Desenhar ou descrever o modelo pedido em M1 e a reorganização de M2.",
        "Guardar o TXT da primeira tentativa antes de abrir os scripts de apoio.",
        "Realizar P1 a P3 no MySQL disponível e guardar o SQL identificado.",
        "Registrar o resultado observado ou “não executado por falta de acesso”.",
        "Entregar os arquivos e explicar ao professor uma decisão e uma dificuldade."
      ],
      "checklist": [
        "Identifiquei nome, turma e o ambiente que conheço.",
        "Registrei justificativas, não apenas nomes de comandos.",
        "Guardei a primeira tentativa e minhas consultas.",
        "Informei o que executei, os apoios e eventuais barreiras de acesso."
      ],
      "curiosidade": "Uma consulta pode executar sem erro e ainda contar a coisa errada. A previsão e a explicação mostram se o resultado faz sentido.",
      "extensao": "Se concluir as tarefas, proponha um teste que revele erro de contagem ou de relacionamento. Aguarde a coleta antes de consultar a solução.",
      "refs": [
        "conceitos",
        "chaves",
        "select",
        "grupos",
        "transacoes"
      ]
    },
    {
      "id": "aula-02",
      "numero": "02",
      "data": "2026-10-26",
      "dataCurta": "26/10",
      "eixo": "Modelagem",
      "titulo": "Cada dado no lugar certo",
      "subtitulo": "Entidades, atributos, cardinalidade e chaves",
      "produto": "Modelo da biblioteca com livros, leitores e empréstimos e justificativa das chaves.",
      "objetivos": [
        "Identificar o que cada tabela representa.",
        "Escolher chaves e indicar relações de um para muitos.",
        "Evitar grupos repetidos e cópias desnecessárias."
      ],
      "retomada": "Usar as evidências do diagnóstico para retomar linha, coluna e identificação. O modelo novo separa leitores do texto guardado em cada empréstimo.",
      "secoes": [
        {
          "titulo": "Perguntas antes do desenho",
          "texto": [
            "Que dados precisamos de um livro? O que identifica um leitor? Como registrar dois empréstimos da mesma pessoa sem confundi-los? Liste as regras antes de desenhar as tabelas."
          ],
          "codigo": ""
        },
        {
          "titulo": "Modelo inicial",
          "texto": [
            "livros(id, titulo, area, quantidade); leitores(id, nome, turma); emprestimos(id, livro_id, leitor_id, data_emprestimo, data_devolucao).",
            "Um leitor pode ter vários empréstimos. Cada empréstimo referencia um leitor e um livro. Nomes não precisam ser únicos. As chaves separam identificação de descrição."
          ],
          "codigo": ""
        },
        {
          "titulo": "Conferência do modelo",
          "texto": [
            "Use um campo por informação necessária e uma linha por ocorrência. Evite uma lista de vários códigos dentro de um único campo. Explique a dependência dos dados em relação à chave antes de aplicar rótulos de normalização."
          ],
          "codigo": ""
        }
      ],
      "atividade": [
        "Descrever as regras da biblioteca com dados fictícios.",
        "Desenhar o modelo com três tabelas e marcar PK e FK.",
        "Testar o desenho com dois empréstimos do mesmo leitor.",
        "Explicar uma repetição que seu modelo evita."
      ],
      "checklist": [
        "Cada tabela tem um significado claro.",
        "As chaves identificam registros e as relações têm sentido.",
        "O desenho representa dois empréstimos distintos do mesmo leitor."
      ],
      "curiosidade": "Duas pessoas podem ter o mesmo nome. Uma boa identificação não depende de supor que os nomes sejam únicos.",
      "extensao": "Discutir a diferença entre cadastrar um título e cadastrar cada exemplar físico.",
      "refs": [
        "conceitos",
        "chaves"
      ]
    },
    {
      "id": "aula-03",
      "numero": "03",
      "data": "2026-11-09",
      "dataCurta": "09/11",
      "eixo": "Estrutura e dados",
      "titulo": "O modelo vira tabelas",
      "subtitulo": "CREATE TABLE, tipos, restrições e inserção de dados",
      "produto": "Script de criação e carga inicial testado em um banco de estudo.",
      "objetivos": [
        "Transformar o modelo em tabelas.",
        "Declarar PK, FK e restrições coerentes.",
        "Inserir dados de teste sem alterar bancos de uso real."
      ],
      "retomada": "Depois do feriado de 02/11, retomar o modelo de 26/10 e conferir as chaves antes do script.",
      "secoes": [
        {
          "titulo": "Estrutura e domínio",
          "texto": [
            "Escolha os tipos conforme o dado. Um código identificador e uma quantidade têm papéis diferentes. Declare obrigatoriedade onde a regra exigir. Verifique a sintaxe e a aplicação das restrições no SGBD usado."
          ],
          "codigo": "CREATE TABLE leitores (\n  id INT NOT NULL PRIMARY KEY,\n  nome VARCHAR(80) NOT NULL,\n  turma VARCHAR(20) NOT NULL\n) ENGINE = InnoDB;"
        },
        {
          "titulo": "Carga e integridade",
          "texto": [
            "Crie primeiro as tabelas referenciadas e depois os empréstimos. Insira uma linha válida e tente uma chave duplicada ou uma referência inexistente. Registre qual restrição respondeu ao teste."
          ],
          "codigo": "INSERT INTO leitores (id, nome, turma)\nVALUES (1, 'Ana', '1A');"
        },
        {
          "titulo": "Alterações com critério",
          "texto": [
            "Use SELECT com a mesma condição para conferir o alcance antes de um UPDATE ou DELETE no esquema de estudo. Em tabelas InnoDB, teste DML em transação explícita e desfaça com ROLLBACK. Comandos DDL como CREATE e DROP têm regras de commit implícito no MySQL."
          ],
          "codigo": ""
        }
      ],
      "atividade": [
        "Criar as três tabelas do modelo.",
        "Inserir dados fictícios de livros e leitores.",
        "Inserir empréstimos coerentes com as referências.",
        "Testar uma PK duplicada e uma FK inexistente; guardar as mensagens."
      ],
      "checklist": [
        "As tabelas correspondem ao modelo.",
        "PK e FK estão declaradas e foram testadas.",
        "O script documenta a ordem de criação e carga."
      ],
      "curiosidade": "No MySQL/InnoDB, uma FK protege a referência e NOT NULL protege a obrigatoriedade. São regras diferentes. Confira a versão instalada antes de adotar restrições com comportamento dependente de versão.",
      "extensao": "Acrescentar uma restrição para quantidade não negativa e testá-la.",
      "refs": [
        "tabelas",
        "tipos",
        "chaves",
        "transacoes"
      ]
    },
    {
      "id": "aula-04",
      "numero": "04",
      "data": "2026-11-16",
      "dataCurta": "16/11",
      "eixo": "Consultas",
      "titulo": "Perguntas que viram consultas",
      "subtitulo": "SELECT, WHERE, ORDER BY e ausência de valor",
      "produto": "Consultas com previsão, execução e conferência de resultados.",
      "objetivos": [
        "Escolher colunas e filtros conforme uma pergunta.",
        "Combinar condições e definir uma ordenação.",
        "Consultar ausência de valor com IS NULL."
      ],
      "retomada": "Retomar as previsões do diagnóstico e os dados carregados na aula anterior.",
      "secoes": [
        {
          "titulo": "Uma consulta responde a uma pergunta",
          "texto": [
            "Defina quais colunas precisam aparecer e o que cada linha representa. Depois escreva FROM e WHERE. Compare o resultado com alguns registros conhecidos."
          ],
          "codigo": "SELECT titulo, quantidade\nFROM livros\nWHERE area = 'Web' OR quantidade >= 2\nORDER BY titulo;"
        },
        {
          "titulo": "Condições e limites",
          "texto": [
            "Teste valores no limite de >= e >. Ao combinar AND e OR, use parênteses para tornar sua intenção explícita. Escreva ORDER BY quando a ordem fizer parte da pergunta."
          ],
          "codigo": ""
        },
        {
          "titulo": "NULL não é um valor de data",
          "texto": [
            "Use IS NULL ou IS NOT NULL para procurar ausência de valor. Uma comparação como data_devolucao = NULL não expressa o teste desejado. A convenção de negócio precisa ser conhecida."
          ],
          "codigo": "SELECT id, livro_id\nFROM emprestimos\nWHERE data_devolucao IS NULL\nORDER BY id;"
        }
      ],
      "atividade": [
        "Escrever quatro perguntas sobre a biblioteca.",
        "Criar consultas com filtros e ordenações.",
        "Incluir um teste de limite e um de NULL.",
        "Trocar uma pergunta com um colega e comparar os resultados."
      ],
      "checklist": [
        "A consulta corresponde à pergunta.",
        "O limite e a ordenação foram testados.",
        "Usei IS NULL ao consultar a ausência de devolução."
      ],
      "curiosidade": "Sem ORDER BY, a apresentação das linhas não tem a ordem garantida que sua pergunta pode exigir.",
      "extensao": "Comparar DISTINCT com uma consulta que mantém as ocorrências de empréstimo.",
      "refs": [
        "select",
        "null"
      ]
    },
    {
      "id": "aula-05",
      "numero": "05",
      "data": "2026-11-23",
      "dataCurta": "23/11",
      "eixo": "Relatórios",
      "titulo": "As tabelas contam uma história",
      "subtitulo": "JOIN, contagens e GROUP BY",
      "produto": "Relatório de empréstimos com títulos e contagem por área.",
      "objetivos": [
        "Relacionar tabelas pelas chaves.",
        "Explicar repetições de um resultado.",
        "Agrupar e contar ocorrências sem confundir exemplares com empréstimos."
      ],
      "retomada": "Rever PK, FK e o significado de cada linha de livros e emprestimos.",
      "secoes": [
        {
          "titulo": "O encontro entre as tabelas",
          "texto": [
            "JOIN combina registros segundo uma condição. Relacione a FK com a PK esperada. Uma linha de livro pode aparecer em vários empréstimos."
          ],
          "codigo": "SELECT l.titulo, r.nome\nFROM emprestimos AS e\nJOIN livros AS l ON l.id = e.livro_id\nJOIN leitores AS r ON r.id = e.leitor_id\nORDER BY e.id;"
        },
        {
          "titulo": "Contar o que interessa",
          "texto": [
            "COUNT(*) conta linhas do resultado. COUNT(campo) conta valores não nulos desse campo. SUM(quantidade) responde a outra pergunta: quantidade total de exemplares cadastrados."
          ],
          "codigo": "SELECT area, COUNT(*) AS titulos\nFROM livros\nGROUP BY area\nORDER BY area;"
        },
        {
          "titulo": "Conferência manual",
          "texto": [
            "Confira primeiro um grupo pequeno. Compare a contagem com os registros de origem e diga se o relatório representa títulos, exemplares, leitores ou empréstimos."
          ],
          "codigo": ""
        },
        {
          "titulo": "Leitores com zero empréstimos",
          "texto": [
            "LEFT JOIN mantém leitores sem correspondência. Para contar empréstimos, use COUNT(e.id). Ao contar somente abertos e preservar leitores com zero, posicione a condição de devolução no ON e confira quem tem apenas devolvidos."
          ],
          "codigo": "SELECT r.id, r.nome, COUNT(e.id) AS abertos\nFROM leitores AS r\nLEFT JOIN emprestimos AS e\n  ON e.leitor_id = r.id\n  AND e.data_devolucao IS NULL\nGROUP BY r.id, r.nome\nORDER BY r.id;"
        }
      ],
      "atividade": [
        "Listar empréstimos com o título de cada livro.",
        "Filtrar os empréstimos em aberto.",
        "Contar títulos por área e explicar o que foi contado.",
        "Conferir um resultado manualmente e registrar o teste."
      ],
      "checklist": [
        "A condição do JOIN usa a relação correta.",
        "Expliquei o significado de cada linha.",
        "Distingui contagem de registros e soma de exemplares."
      ],
      "curiosidade": "COUNT(*) e COUNT(data_devolucao) podem produzir números diferentes porque o segundo ignora os valores nulos.",
      "extensao": "Investigar LEFT JOIN para localizar livros sem nenhum empréstimo.",
      "refs": [
        "join",
        "grupos",
        "null"
      ]
    },
    {
      "id": "aula-06",
      "numero": "06",
      "data": "2026-11-30",
      "dataCurta": "30/11",
      "eixo": "Integração",
      "titulo": "Uma biblioteca pronta para testar",
      "subtitulo": "Integração do modelo, scripts e consultas",
      "produto": "Pacote com modelo, criação, carga, consultas e registro de testes.",
      "objetivos": [
        "Integrar o modelo com os scripts.",
        "Reproduzir a base em um ambiente de estudo.",
        "Organizar evidências para a avaliação de 07/12."
      ],
      "retomada": "Reabrir os produtos anteriores e comparar nomes, chaves e consultas.",
      "secoes": [
        {
          "titulo": "Um conjunto coerente",
          "texto": [
            "O modelo deve corresponder ao CREATE TABLE. Os INSERTs devem respeitar as chaves. As consultas precisam usar os nomes efetivos e responder às perguntas descritas."
          ],
          "codigo": ""
        },
        {
          "titulo": "Casos mínimos",
          "texto": [
            "Teste criação e carga; chave duplicada; referência inexistente; filtro no limite; empréstimo sem devolução; JOIN e contagem conferidos. Registre entrada, resultado esperado e resultado observado."
          ],
          "codigo": ""
        },
        {
          "titulo": "Entrega organizada",
          "texto": [
            "Use poucos arquivos: modelo.pdf ou imagem do modelo, biblioteca.sql e testes.txt. O SQL pode conter seções comentadas para estrutura, carga e consultas. Identifique a versão e use somente dados fictícios."
          ],
          "codigo": ""
        },
        {
          "titulo": "Transações e cópia de segurança",
          "texto": [
            "Pratique START TRANSACTION, COMMIT e ROLLBACK em DML sobre tabelas InnoDB. Demonstre uma cópia e restauração no esquema de teste, conferindo estrutura e dados. O script de consultas não substitui um backup."
          ]
        }
      ],
      "atividade": [
        "Conferir o modelo e os scripts.",
        "Executar os casos mínimos e corrigir divergências.",
        "Separar a versão que será entregue em 07/12.",
        "Preparar uma explicação de chave, consulta e teste."
      ],
      "checklist": [
        "Os scripts reproduzem a base de estudo.",
        "As consultas respondem às perguntas declaradas.",
        "Os testes registram resultados esperados e observados."
      ],
      "curiosidade": "Uma consulta que executa sem erro ainda pode responder à pergunta errada. Conferir o significado do resultado faz parte do teste.",
      "extensao": "Propor um relatório novo e explicar por que ele seria útil à biblioteca.",
      "refs": [
        "transacoes",
        "backup",
        "indices"
      ]
    },
    {
      "id": "aula-07",
      "numero": "07",
      "data": "2026-12-07",
      "dataCurta": "07/12",
      "eixo": "Avaliação",
      "titulo": "Avaliação prática da biblioteca",
      "subtitulo": "Modelo, scripts, consultas e explicação individual",
      "produto": "Projeto entregue e evidências individuais para devolutiva em 14/12.",
      "objetivos": [
        "Demonstrar o modelo e as regras de integridade.",
        "Executar e explicar consultas.",
        "Realizar uma pequena alteração com teste."
      ],
      "retomada": "Usar a versão integrada de 30/11. A avaliação acontece antes do último encontro.",
      "secoes": [
        {
          "titulo": "O que será entregue",
          "texto": [
            "Modelo, SQL com criação/carga/consultas e registro dos casos de teste, em ZIP identificado. A entrega ocorre durante a aula."
          ],
          "codigo": ""
        },
        {
          "titulo": "Demonstração individual",
          "texto": [
            "Explique uma PK e uma FK; demonstre uma consulta com filtro e outra com relacionamento. Faça uma pequena alteração orientada e mostre a conferência do resultado."
          ],
          "codigo": ""
        },
        {
          "titulo": "Critérios propostos",
          "texto": [
            "Modelagem e chaves (2), estrutura e integridade (2), consultas e relações (2), testes e organização (2), explicação e alteração individual (2). A proposta será ajustada às regras da turma antes de atribuir nota."
          ],
          "codigo": ""
        }
      ],
      "atividade": [
        "Conferir a versão final e executar os testes.",
        "Entregar o ZIP identificado.",
        "Explicar o modelo e duas consultas.",
        "Registrar a alteração individual e o resultado."
      ],
      "checklist": [
        "Entreguei modelo, SQL e testes.",
        "Expliquei a relação entre as tabelas.",
        "Demonstrei e conferi a alteração solicitada."
      ],
      "curiosidade": "A mesma resposta pode ser obtida por consultas diferentes. A correção depende também da regra e do significado que a consulta representa.",
      "extensao": "Documentar um relatório adicional depois de concluir a evidência individual.",
      "refs": [
        "select",
        "chaves"
      ]
    },
    {
      "id": "aula-08",
      "numero": "08",
      "data": "2026-12-14",
      "dataCurta": "14/12",
      "eixo": "Devolutiva",
      "titulo": "Corrigir, recuperar e concluir",
      "subtitulo": "Devolutiva, correções e recuperação",
      "produto": "Versão corrigida, novos testes e registro da aprendizagem.",
      "objetivos": [
        "Relacionar a devolutiva com o modelo e o SQL.",
        "Corrigir e testar os pontos indicados.",
        "Comparar o domínio atual com o diagnóstico."
      ],
      "retomada": "A avaliação principal já ocorreu em 07/12. Este encontro permite devolver, corrigir e recuperar os critérios necessários.",
      "secoes": [
        {
          "titulo": "Da devolutiva à correção",
          "texto": [
            "Localize no modelo ou no SQL a evidência do comentário. Altere uma parte por vez e repita o teste relacionado."
          ],
          "codigo": ""
        },
        {
          "titulo": "Recuperação com evidência",
          "texto": [
            "Refaça uma tarefa equivalente sobre o critério pendente, conforme a orientação do professor e as regras da turma. Explique a decisão e demonstre o resultado."
          ],
          "codigo": ""
        },
        {
          "titulo": "Continuidade",
          "texto": [
            "Organize os arquivos e descreva um avanço concreto desde outubro. Transações, índices, permissões, backup e integração com aplicações são possibilidades para o próximo período."
          ],
          "codigo": ""
        }
      ],
      "atividade": [
        "Ler a devolutiva.",
        "Corrigir e registrar novos testes.",
        "Realizar a recuperação orientada, quando necessária.",
        "Organizar a versão final e registrar um próximo passo."
      ],
      "checklist": [
        "Relacionei comentário e evidência.",
        "Testei as correções.",
        "Registrei um avanço e uma dúvida de continuidade."
      ],
      "curiosidade": "Repetir um teste depois da correção ajuda a verificar o problema resolvido e a preservar comportamentos que já funcionavam.",
      "extensao": "Planejar como uma aplicação poderia consultar a biblioteca sem conceder acesso irrestrito ao banco.",
      "refs": [
        "conceitos"
      ]
    }
  ],
  "slides": [
    {
      "titulo": "Banco de Dados",
      "texto": [
        "Diagnóstico de conhecimentos em MySQL",
        "Prof. Fabrício Rodrigues"
      ],
      "label": "19 DE OUTUBRO DE 2026"
    },
    {
      "titulo": "O que vamos observar",
      "texto": [
        "Fundamentos e funcionamento do ambiente",
        "Modelagem e integridade dos dados",
        "Consultas, transações e decisões de operação"
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "Primeira tentativa individual",
      "texto": [
        "Abra a ficha e preencha nome, turma e experiência.",
        "Responda sem consultar materiais ou colegas.",
        "Registre hipóteses e assuntos ainda não estudados."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "Livros da biblioteca",
      "texto": [],
      "tabela": [
        [
          "id",
          "titulo",
          "area",
          "quantidade"
        ],
        [
          1,
          "Redes de Computadores",
          "Redes",
          2
        ],
        [
          2,
          "Banco de Dados",
          "Dados",
          1
        ],
        [
          3,
          "HTML e CSS",
          "Web",
          3
        ],
        [
          4,
          "Lógica de Programação",
          "Programação",
          2
        ],
        [
          5,
          "Linux em Redes",
          "Redes",
          1
        ]
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "Leitores e empréstimos",
      "texto": [
        "Um empréstimo tem livro_id, leitor_id e datas.",
        "Há quatro leitores e cinco empréstimos na ficha.",
        "NULL em data_devolucao indica devolução não registrada."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "F1 · Banco, servidor e ferramenta",
      "texto": [
        "Explique o papel de cada item. Fechar o Workbench apaga as tabelas? Onde ficam os dados? Relate uma ação que já fez nesse ambiente."
      ],
      "codigo": "MySQL Server / MySQL Workbench / SQL / banco biblioteca",
      "label": "FUNDAMENTOS E AMBIENTE",
      "refs": [
        "conceitos",
        "workbench"
      ]
    },
    {
      "titulo": "F2 · Estrutura e manipulação",
      "texto": [
        "Dê a finalidade de cada comando. Explique a diferença entre DELETE FROM leitores e DROP TABLE leitores, considerando o efeito pretendido e possíveis restrições."
      ],
      "codigo": "CREATE TABLE / INSERT / SELECT\nUPDATE / DELETE / DROP TABLE",
      "label": "FUNDAMENTOS E AMBIENTE",
      "refs": [
        "tabelas",
        "select",
        "update",
        "transacoes"
      ]
    },
    {
      "titulo": "M1 · Regras em um modelo",
      "texto": [
        "Desenhe ou descreva três tabelas para esse caso. Marque PK e FK, indique as cardinalidades e explique o que representa cada linha de matrícula. Justifique como evita uma lista de cursos em um único campo."
      ],
      "codigo": "Uma escola oferece cursos.\nUm aluno pode cursar vários cursos.\nUm curso recebe vários alunos.\nCada matrícula tem uma data.",
      "label": "MODELAGEM E RELAÇÕES",
      "refs": [
        "conceitos",
        "chaves"
      ]
    },
    {
      "titulo": "M2 · Repetição e normalização",
      "texto": [
        "Se Ana mudar de turma, que problema pode aparecer nessa tabela? Proponha uma reorganização e explique de qual chave nome e turma dependem. Não basta citar uma forma normal."
      ],
      "codigo": "emprestimo_id | leitor_id | nome_leitor | turma\n101           | 1         | Ana         | 1A\n104           | 1         | Ana         | 1A",
      "label": "MODELAGEM E RELAÇÕES",
      "refs": [
        "conceitos",
        "chaves"
      ]
    },
    {
      "titulo": "M3 · N:N e identificação ao longo do tempo",
      "texto": [
        "Como livros e leitores se relacionam ao longo do tempo? A dupla (leitor_id, livro_id) pode ser a única PK de emprestimos nessa regra? Justifique e proponha um identificador."
      ],
      "codigo": "Ana pode pegar o mesmo livro novamente,\nem outra data.",
      "label": "MODELAGEM E RELAÇÕES",
      "refs": [
        "conceitos",
        "chaves"
      ]
    },
    {
      "titulo": "I1 · Tipos e definição de tabela",
      "texto": [
        "Proponha uma definição melhor para uma devolução identificada, com data e multa monetária. Justifique PK, tipos e nulabilidade. Escreva pelo menos parte do CREATE TABLE em MySQL."
      ],
      "codigo": "CREATE TABLE devolucoes (\n  id VARCHAR(10),\n  data_devolucao VARCHAR(10),\n  multa FLOAT\n);",
      "label": "ESTRUTURA E INTEGRIDADE",
      "refs": [
        "tipos",
        "tabelas"
      ]
    },
    {
      "titulo": "I2 · Restrições em ação",
      "texto": [
        "Quais restrições rejeitam A, B e C, considerando a base inicial? Por que a aplicação e o banco podem validar a mesma regra? Considere as restrições acima."
      ],
      "codigo": "Restrições em emprestimos:\nPRIMARY KEY (id)\nFOREIGN KEY (livro_id) REFERENCES livros(id)\nleitor_id INT NOT NULL\nA. id = 101 em novo empréstimo\nB. livro_id = 99 em novo empréstimo\nC. leitor_id = NULL em novo empréstimo",
      "label": "ESTRUTURA E INTEGRIDADE",
      "refs": [
        "chaves",
        "tabelas"
      ]
    },
    {
      "titulo": "Q1 · Filtro, precedência e ordenação",
      "texto": [
        "Escreva as linhas na ordem esperada. Explique a condição e o risco de retirar os parênteses, mantendo o restante do WHERE."
      ],
      "codigo": "SELECT id, titulo, quantidade\nFROM livros\nWHERE quantidade >= 2\n  AND (area = 'Redes' OR area = 'Web')\nORDER BY quantidade DESC, id;",
      "label": "CONSULTAS E RESULTADOS",
      "refs": [
        "select"
      ]
    },
    {
      "titulo": "Q2 · Ausência de valor",
      "texto": [
        "A consulta encontra empréstimos sem devolução? Corrija o SQL e indique os IDs esperados. Explique por que NULL, zero e texto vazio não significam a mesma coisa."
      ],
      "codigo": "SELECT id\nFROM emprestimos\nWHERE data_devolucao = NULL;",
      "label": "CONSULTAS E RESULTADOS",
      "refs": [
        "null"
      ]
    },
    {
      "titulo": "Q3 · JOIN e linhas repetidas",
      "texto": [
        "Escreva o resultado. Por que um título aparece mais de uma vez? O que pode acontecer se faltar uma condição de relacionamento?"
      ],
      "codigo": "SELECT l.titulo, r.nome\nFROM emprestimos AS e\nJOIN livros AS l ON l.id = e.livro_id\nJOIN leitores AS r ON r.id = e.leitor_id\nWHERE e.data_devolucao IS NULL\nORDER BY e.id;",
      "label": "CONSULTAS E RESULTADOS",
      "refs": [
        "join"
      ]
    },
    {
      "titulo": "Q4 · LEFT JOIN e contagem",
      "texto": [
        "Preveja o total mostrado para Duda. Como contar os empréstimos incluindo leitores com zero? Corrija a expressão e informe os quatro totais."
      ],
      "codigo": "SELECT r.id, r.nome, COUNT(*) AS total\nFROM leitores AS r\nLEFT JOIN emprestimos AS e\n  ON e.leitor_id = r.id\nGROUP BY r.id, r.nome\nORDER BY r.id;",
      "label": "CONSULTAS E RESULTADOS",
      "refs": [
        "join",
        "grupos"
      ]
    },
    {
      "titulo": "Q5 · Agrupamento e filtro de grupos",
      "texto": [
        "Qual resultado será produzido? Explique a diferença entre titulos e exemplares e por que esse filtro usa HAVING, em vez de WHERE COUNT(*) >= 2."
      ],
      "codigo": "SELECT area, COUNT(*) AS titulos,\n       SUM(quantidade) AS exemplares\nFROM livros\nGROUP BY area\nHAVING COUNT(*) >= 2\nORDER BY area;",
      "label": "CONSULTAS E RESULTADOS",
      "refs": [
        "grupos"
      ]
    },
    {
      "titulo": "T1 · Uma operação completa",
      "texto": [
        "Que sequência de controle usaria no MySQL para manter a operação inteira ou desfazê-la? Explique START TRANSACTION, COMMIT, ROLLBACK e o efeito de autocommit. O erro garante que toda a transação foi desfeita?"
      ],
      "codigo": "Um cadastro e seu primeiro empréstimo devem\nser confirmados juntos em tabelas InnoDB.\nA segunda gravação falha.",
      "label": "TRANSAÇÕES E OPERAÇÃO",
      "refs": [
        "transacoes"
      ]
    },
    {
      "titulo": "O1 · Backup que pode ser recuperado",
      "texto": [
        "Isso basta para recuperar o banco inteiro? O que precisaria preservar e como verificaria a recuperação sem depender apenas da existência de um arquivo?"
      ],
      "codigo": "Um aluno salvou consultas.sql e disse:\n“Já tenho backup do banco.”",
      "label": "TRANSAÇÕES E OPERAÇÃO",
      "refs": [
        "backup"
      ]
    },
    {
      "titulo": "O2 · Entrada do usuário e permissões",
      "texto": [
        "Que risco isso traz e como você reduziria esse risco? Um usuário usado apenas em relatórios precisa de permissão para apagar tabelas? Justifique."
      ],
      "codigo": "Uma aplicação concatena o texto digitado\npelo usuário dentro de uma consulta SQL.",
      "label": "SEGURANÇA E DESEMPENHO",
      "refs": [
        "seguranca"
      ]
    },
    {
      "titulo": "O3 · Índice e custo de escrita",
      "texto": [
        "Que papel um índice poderia ter? Ele sempre melhora tudo? Como verificaria o plano com EXPLAIN e a diferença entre índice comum, UNIQUE e PRIMARY KEY?"
      ],
      "codigo": "A busca por titulo em livros ficou lenta\nquando a base cresceu muito.",
      "label": "SEGURANÇA E DESEMPENHO",
      "refs": [
        "indices",
        "tabelas"
      ]
    },
    {
      "titulo": "Registro da primeira tentativa",
      "texto": [
        "Baixe o TXT com nome e turma antes da prática.",
        "Mantenha a ficha aberta para o registro final.",
        "O arquivo será entregue ao professor na aula."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "Ambiente de prática MySQL",
      "texto": [
        "MySQL Server executa os comandos.",
        "Workbench ou phpMyAdmin é o cliente usado no laboratório.",
        "VS Code edita o SQL. Live Server exibe o portal."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "P1 · Consulta escrita por você",
      "texto": [
        "Escreva uma consulta que mostre id, titulo e quantidade dos livros com pelo menos dois exemplares, em ordem de quantidade decrescente e id crescente. Preveja o resultado antes de executar.",
        "Registre previsão, SQL, resultado observado e apoio recebido."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "P2 · Relatório com zero",
      "texto": [
        "Escreva uma consulta que mostre cada leitor e a quantidade de seus empréstimos ainda sem devolução. Inclua quem tem zero e ordene por id do leitor. Explique onde colocou o teste de NULL.",
        "Registre previsão, SQL, resultado observado e apoio recebido."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "P3 · Alteração com conferência",
      "texto": [
        "No esquema fictício, escreva uma transação que registre a devolução do empréstimo 103 em 19/10/2026. Confira somente esse registro antes e depois. Desfaça o teste com ROLLBACK e confira novamente. Não inclua CREATE ou DROP nessa transação.",
        "Registre previsão, SQL, resultado observado e apoio recebido."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "Entrega e evidências",
      "texto": [
        "Baixe o SQL identificado e a versão final do TXT.",
        "Informe se executou no MySQL e qual apoio recebeu.",
        "Explique uma decisão e uma dificuldade ao professor."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "Discussão depois da coleta",
      "texto": [
        "Qual pergunta exigiu rever uma hipótese?",
        "Como você conferiu o resultado de sua consulta?",
        "Que assunto precisa ser retomado primeiro?"
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "Mapa para a continuidade",
      "texto": [],
      "tabela": [
        [
          "Data",
          "Foco"
        ],
        [
          "19/10",
          "Diagnóstico"
        ],
        [
          "26/10",
          "Modelagem"
        ],
        [
          "09/11",
          "Estrutura e dados"
        ],
        [
          "16/11",
          "Consultas"
        ],
        [
          "23/11",
          "Relatórios"
        ],
        [
          "30/11",
          "Integração"
        ],
        [
          "07/12",
          "Avaliação"
        ],
        [
          "14/12",
          "Devolutiva"
        ]
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    },
    {
      "titulo": "Próxima intervenção",
      "texto": [
        "O diagnóstico mostra evidências por assunto.",
        "As próximas aulas retomam as lacunas observadas.",
        "Caderno e referências ficam disponíveis após a tentativa."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO MYSQL"
    }
  ],
  "sgbd": "MySQL",
  "versao": "Revisão MySQL - diagnóstico ampliado",
  "leitores": [
    [
      1,
      "Ana",
      "1A"
    ],
    [
      2,
      "Bruno",
      "1A"
    ],
    [
      3,
      "Caio",
      "1B"
    ],
    [
      4,
      "Duda",
      "1B"
    ]
  ],
  "baseNota": "Dados fictícios. quantidade é o total cadastrado, não o saldo disponível. Cada empréstimo registra um livro e um leitor. NULL em data_devolucao significa que a devolução ainda não foi registrada. As consultas da biblioteca usam esta base inicial, sem as alterações da prática. Os demais casos descrevem seu próprio cenário.",
  "praticas": [
    {
      "id": "P1",
      "titulo": "Consulta escrita por você",
      "enunciado": "Escreva uma consulta que mostre id, titulo e quantidade dos livros com pelo menos dois exemplares, em ordem de quantidade decrescente e id crescente. Preveja o resultado antes de executar."
    },
    {
      "id": "P2",
      "titulo": "Relatório com zero",
      "enunciado": "Escreva uma consulta que mostre cada leitor e a quantidade de seus empréstimos ainda sem devolução. Inclua quem tem zero e ordene por id do leitor. Explique onde colocou o teste de NULL."
    },
    {
      "id": "P3",
      "titulo": "Alteração com conferência",
      "enunciado": "No esquema fictício, escreva uma transação que registre a devolução do empréstimo 103 em 19/10/2026. Confira somente esse registro antes e depois. Desfaça o teste com ROLLBACK e confira novamente. Não inclua CREATE ou DROP nessa transação."
    }
  ],
  "saida": "Que decisão de modelagem ou de SQL você consegue justificar agora? Qual dúvida precisa retomar?",
  "rascunhoSQL": "-- DADOSLAB - MySQL - 19/10/2026\n-- Use o esquema de estudo indicado pelo professor.\n-- Registre suas previsões na ficha antes de executar.\n\n-- P1: livros com pelo menos dois exemplares, ordenados.\n\n\n-- P2: leitores e empréstimos abertos, incluindo zero.\n\n\n-- P3: devolução do empréstimo 103 em transação,\n--     conferência antes/depois e ROLLBACK.\n\n"
};
