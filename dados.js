window.WEBLAB_BD = {
  "titulo": "Banco de Dados",
  "professor": "Fabrício Rodrigues",
  "inicio": "2026-10-19",
  "fim": "2026-12-14",
  "semAula": "2026-11-02",
  "avaliacao": "2026-12-07",
  "planejamento": "Oito encontros de duas aulas de 50 minutos. O diagnóstico orienta as retomadas. SGBD e versão a confirmar com a turma.",
  "referencias": [
    {
      "id": "conceitos",
      "titulo": "MDN: banco de dados (em inglês)",
      "url": "https://developer.mozilla.org/en-US/docs/Glossary/Database"
    },
    {
      "id": "sql",
      "titulo": "MDN: linguagem SQL (em inglês)",
      "url": "https://developer.mozilla.org/en-US/docs/Glossary/SQL"
    },
    {
      "id": "select",
      "titulo": "SQL: SELECT, filtros, ordenação e DISTINCT (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/tutorial-select.html"
    },
    {
      "id": "null",
      "titulo": "SQL: testes com NULL (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/functions-comparison.html"
    },
    {
      "id": "join",
      "titulo": "SQL: JOIN, LEFT JOIN e grupos (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/queries-table-expressions.html"
    },
    {
      "id": "grupos",
      "titulo": "SQL: funções de agregação (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/tutorial-agg.html"
    },
    {
      "id": "subconsultas",
      "titulo": "SQL: subconsultas como expressões (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/sql-expressions.html#SQL-SYNTAX-SCALAR-SUBQUERIES"
    },
    {
      "id": "insert",
      "titulo": "SQL: INSERT (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/dml-insert.html"
    },
    {
      "id": "update",
      "titulo": "SQL: UPDATE (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/dml-update.html"
    },
    {
      "id": "tabelas",
      "titulo": "Continuidade: tabelas (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/ddl-basics.html"
    },
    {
      "id": "chaves",
      "titulo": "Continuidade: restrições e chaves (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/ddl-constraints.html"
    },
    {
      "id": "tipos",
      "titulo": "Continuidade: tipos de dados (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/datatype.html"
    },
    {
      "id": "transacoes",
      "titulo": "Continuidade: transações (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/tutorial-transactions.html"
    },
    {
      "id": "backup",
      "titulo": "Continuidade: cópias e restauração (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/backup.html"
    },
    {
      "id": "indices",
      "titulo": "Continuidade: índices (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/indexes.html"
    },
    {
      "id": "seguranca",
      "titulo": "Continuidade: parâmetros de consulta (PostgreSQL, em inglês)",
      "url": "https://www.postgresql.org/docs/18/sql-prepare.html"
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
      "area": "Fundamentos",
      "titulo": "Banco, SGBD e SQL",
      "codigo": "Uma biblioteca guarda dados em um banco.\nUm programa gerencia esses dados.\nUma pessoa escreve SQL em um editor.",
      "enunciado": "Explique a diferença entre banco de dados, SGBD, SQL e editor/cliente. Fechar o editor apaga os dados já gravados? Justifique sem depender do nome de um programa.",
      "refs": [
        "conceitos",
        "sql"
      ]
    },
    {
      "id": "F2",
      "area": "Fundamentos",
      "titulo": "Efeito dos comandos",
      "codigo": "SELECT nome FROM leitores;\nINSERT INTO leitores (id, nome, turma)\nVALUES (5, 'Eva', '1A');\nUPDATE leitores SET turma = '1C' WHERE id = 4;\nDELETE FROM leitores WHERE id = 5;",
      "enunciado": "Descreva o efeito de cada comando. Qual apenas consulta? Considerando a sequência na base fictícia, quantos leitores ficam ao final e qual é a turma de Duda?",
      "refs": [
        "select",
        "insert",
        "update"
      ]
    },
    {
      "id": "F3",
      "area": "Leitura de tabelas",
      "titulo": "Linhas, campos e valores",
      "codigo": "Observe livros e emprestimos na base inicial.\nO título do livro 1 é Redes de Computadores.\nA devolução do empréstimo 101 é NULL.",
      "enunciado": "Quantos registros e campos há em livros? Dê um exemplo de campo textual e de campo numérico. O NULL do empréstimo 101 equivale a zero ou a uma data vazia? Explique o significado neste cenário.",
      "refs": [
        "conceitos",
        "null"
      ]
    },
    {
      "id": "Q1",
      "area": "Consultas",
      "titulo": "Filtros e ordem do resultado",
      "codigo": "SELECT id, titulo, quantidade\nFROM livros\nWHERE (area = 'Redes' OR area = 'Web')\n  AND quantidade >= 2\nORDER BY quantidade DESC, id;",
      "enunciado": "Quais IDs aparecem e em que ordem? Explique o papel dos parênteses e o critério de desempate. O que pode mudar se retirarmos os parênteses?",
      "refs": [
        "select"
      ]
    },
    {
      "id": "Q2",
      "area": "Consultas",
      "titulo": "Comparação com NULL",
      "codigo": "SELECT id\nFROM emprestimos\nWHERE data_devolucao = NULL\nORDER BY id;",
      "enunciado": "A intenção é listar empréstimos sem devolução registrada. Essa comparação atende? Corrija a condição e liste os IDs esperados. Explique por que a mudança importa.",
      "refs": [
        "null"
      ]
    },
    {
      "id": "Q3",
      "area": "Consultas",
      "titulo": "Leitura de JOIN",
      "codigo": "SELECT e.id, l.titulo, r.nome\nFROM emprestimos e\nJOIN livros l ON l.id = e.livro_id\nJOIN leitores r ON r.id = e.leitor_id\nWHERE e.data_devolucao IS NULL\nORDER BY e.id;",
      "enunciado": "Escreva as linhas esperadas. Por que um título ou um nome pode se repetir? Se retirarmos a condição que liga leitores a emprestimos e combinarmos todos os leitores com cada empréstimo selecionado, quantas linhas aparecerão?",
      "refs": [
        "join"
      ]
    },
    {
      "id": "Q4",
      "area": "Consultas",
      "titulo": "LEFT JOIN e contagem",
      "codigo": "SELECT r.nome, COUNT(*) AS total\nFROM leitores r\nLEFT JOIN emprestimos e ON e.leitor_id = r.id\nGROUP BY r.id, r.nome\nORDER BY r.id;",
      "enunciado": "A intenção é contar todos os empréstimos de cada leitor, incluindo quem tem zero. Qual total essa consulta mostra para Duda? Corrija a contagem e escreva o total correto dos quatro leitores.",
      "refs": [
        "join",
        "grupos",
        "null"
      ]
    },
    {
      "id": "Q5",
      "area": "Consultas",
      "titulo": "Agrupamento e filtros",
      "codigo": "SELECT area, COUNT(*) AS titulos,\n       SUM(quantidade) AS exemplares\nFROM livros\nGROUP BY area\nHAVING COUNT(*) >= 2\nORDER BY area;",
      "enunciado": "Qual linha aparece? Explique a diferença entre titulos e exemplares. Para considerar somente livros com quantidade >= 2 antes do agrupamento, onde entraria esse filtro? Por que HAVING e WHERE têm papéis diferentes?",
      "refs": [
        "grupos"
      ]
    },
    {
      "id": "Q6",
      "area": "Consultas",
      "titulo": "Repetições e DISTINCT",
      "codigo": "SELECT DISTINCT l.id, l.titulo\nFROM livros l\nJOIN emprestimos e ON e.livro_id = l.id\nORDER BY l.id;",
      "enunciado": "Quais livros aparecem? Quantas linhas haveria sem DISTINCT? Explique por que contar empréstimos pode dar um número diferente de contar livros que já foram emprestados.",
      "refs": [
        "select",
        "join"
      ]
    },
    {
      "id": "Q7",
      "area": "Consultas",
      "titulo": "Subconsulta e média",
      "codigo": "SELECT id, quantidade\nFROM livros\nWHERE quantidade > (\n  SELECT AVG(quantidade) FROM livros\n)\nORDER BY id;",
      "enunciado": "Calcule a média usada na condição e liste os IDs selecionados. O que a consulta interna devolve e como a consulta externa usa esse valor?",
      "refs": [
        "subconsultas",
        "grupos"
      ]
    },
    {
      "id": "D1",
      "area": "Interpretação de alterações",
      "titulo": "Alcance de UPDATE",
      "codigo": "A: UPDATE leitores SET turma = '1C' WHERE id = 4;\nB: UPDATE leitores SET turma = '1C';\nConsidere A e B separadamente na base inicial.",
      "enunciado": "Sem executar, indique quantos registros cada comando alcança e como ficam as turmas. Qual comando corresponde a alterar somente Duda? Explique o papel de WHERE.",
      "refs": [
        "update"
      ]
    },
    {
      "id": "D2",
      "area": "Análise de erros",
      "titulo": "Erro de coluna e erro de resultado",
      "codigo": "A: SELECT titulo FROM livros WHERE categoria = 'Web';\nB: SELECT titulo FROM livros WHERE quantidade > 2;\nPedido de B: livros com pelo menos dois exemplares.",
      "enunciado": "Qual consulta usa um campo que não existe na base? Corrija-a. A consulta B pode funcionar e ainda responder errado ao pedido? Corrija e informe os IDs que deveriam aparecer, sem exigir a ordem.",
      "refs": [
        "select"
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
      "subtitulo": "Fundamentos, leitura de tabelas, interpretação e escrita de SQL",
      "produto": "TXT/ficha com 12 respostas justificadas, três tentativas SQL e registro do apoio recebido.",
      "objetivos": [
        "Distinguir banco de dados, SGBD, SQL e editor/cliente.",
        "Interpretar tabelas e prever resultados de consultas.",
        "Identificar erros e escrever SQL com justificativa.",
        "Registrar familiaridade e apoio separadamente do conhecimento demonstrado."
      ],
      "retomada": "Faça primeiro a tentativa individual, sem consultar o caderno ou soluções. Use “não estudei”, “não lembro” ou uma hipótese explicada. Isso ajuda o professor a distinguir exposição anterior, compreensão e autonomia.",
      "secoes": [
        {
          "titulo": "Como o diagnóstico funciona",
          "texto": [
            "São 12 situações e três tarefas de escrita de SQL, do básico a desafios de consulta. Faça a primeira tentativa individual antes de consultar o caderno e as referências. A atividade orienta as retomadas e não recebe nota somativa.",
            "Um assunto ainda não estudado também é informação. Registre sua hipótese e explique como pensou. Não é necessário acertar todos os desafios."
          ]
        },
        {
          "titulo": "Base e ambiente",
          "texto": [
            "Dados fictícios. quantidade é o total cadastrado, não o saldo disponível. NULL em data_devolucao significa que a devolução ainda não foi registrada. Use a base inicial em todas as questões e tarefas; considere cada alteração isoladamente.",
            "O SGBD e a versão da turma ainda serão confirmados. O diagnóstico exige somente leitura, previsão e escrita de SQL. Não exige instalação, conexão ou execução.",
            "Depois de salvar a tentativa inicial, baixe os dois arquivos da prática: 01-base-referencia.html e 02-diagnostico.sql. Leia a base no navegador e escreva o SQL no VS Code, no portal ou em papel. Live Server serve apenas para exibir o portal local."
          ]
        },
        {
          "titulo": "Depois da coleta",
          "texto": [
            "O professor compara as justificativas, as consultas escritas e uma explicação individual. As referências apresentam conceitos SQL em documentação de fornecedores, mas não definem o SGBD da turma. A sintaxe de atividades futuras será conferida no ambiente escolhido."
          ]
        }
      ],
      "atividade": [
        "Responder F1 a D2 com justificativas e familiaridade.",
        "Guardar o TXT da tentativa inicial antes de abrir a prática.",
        "Baixar e extrair os dois arquivos; abrir a referência no navegador e o SQL no VS Code.",
        "Escrever P1 a P3 e prever os resultados; P3 é somente escrita, sem execução.",
        "Completar o registro final e baixar o TXT final e o SQL identificado.",
        "Entregar os arquivos ao professor durante a aula e explicar uma decisão e uma dúvida."
      ],
      "checklist": [
        "Identifiquei nome, turma e experiência anterior, mesmo sem lembrar o programa.",
        "Registrei meu raciocínio e diferenciei resposta de familiaridade.",
        "Guardei o TXT inicial, o TXT final e meu SQL identificado.",
        "Informei se escrevi com autonomia ou precisei de ajuda."
      ],
      "curiosidade": "Uma consulta pode executar sem erro e ainda contar a coisa errada. A previsão e a explicação mostram se o resultado faz sentido.",
      "extensao": "Se concluir, escreva outra consulta que responda à mesma pergunta de P2 e compare o resultado previsto. Aguarde a coleta antes de consultar soluções.",
      "refs": [
        "conceitos",
        "sql",
        "select",
        "null",
        "join",
        "grupos",
        "subconsultas"
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
          "codigo": "CREATE TABLE leitores (\n  id INT NOT NULL PRIMARY KEY,\n  nome VARCHAR(80) NOT NULL,\n  turma VARCHAR(20) NOT NULL\n);"
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
            "Use SELECT com a mesma condição para conferir o alcance antes de um UPDATE ou DELETE no esquema de estudo. O professor demonstrará confirmação e desfazimento conforme o SGBD escolhido, incluindo as regras próprias para DML e DDL."
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
      "curiosidade": "No o SGBD definido em aula, uma FK protege a referência e NOT NULL protege a obrigatoriedade. São regras diferentes. Confira a versão instalada antes de adotar restrições com comportamento dependente de versão.",
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
            "Pratique o controle de transações conforme a sintaxe do SGBD confirmado. Demonstre uma cópia e restauração no ambiente de teste, conferindo estrutura e dados. O script de consultas não substitui um backup."
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
        "Diagnóstico de conhecimentos",
        "Prof. Fabrício Rodrigues"
      ],
      "label": "19 DE OUTUBRO DE 2026"
    },
    {
      "titulo": "O foco deste encontro",
      "texto": [
        "Conceitos de banco de dados e leitura das tabelas.",
        "Consultas SQL: previsão, explicação e escrita.",
        "SGBD da turma: a confirmar. Não precisamos instalar ou conectar um banco."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO"
    },
    {
      "titulo": "Respostas individuais",
      "texto": [
        "Abrir a ficha no portal e preencher nome, turma e experiência.",
        "Responder F1 a D2 antes de consultar referências ou soluções.",
        "Registrar a hipótese e a familiaridade. Guardar a cópia inicial antes da prática."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO"
    },
    {
      "titulo": "Base inicial: livros",
      "texto": [],
      "label": "DADOSLAB / DIAGNÓSTICO",
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
      ]
    },
    {
      "titulo": "Base inicial: leitores e empréstimos",
      "texto": [
        "A ficha mostra quatro leitores e cinco empréstimos.",
        "Cada empréstimo tem livro, leitor e datas. NULL na devolução indica que ela ainda não foi registrada.",
        "Todas as questões usam a base inicial. Cada alteração hipotética começa dessa base."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO"
    },
    {
      "titulo": "F1 - Banco, SGBD e SQL",
      "texto": [
        "Explique a diferença entre banco de dados, SGBD, SQL e editor/cliente. Fechar o editor apaga os dados já gravados? Justifique sem depender do nome de um programa."
      ],
      "label": "FUNDAMENTOS",
      "codigo": "Uma biblioteca guarda dados em um banco.\nUm programa gerencia esses dados.\nUma pessoa escreve SQL em um editor.",
      "refs": [
        "conceitos",
        "sql"
      ]
    },
    {
      "titulo": "F2 - Efeito dos comandos",
      "texto": [
        "Descreva o efeito de cada comando. Qual apenas consulta? Considerando a sequência na base fictícia, quantos leitores ficam ao final e qual é a turma de Duda?"
      ],
      "label": "FUNDAMENTOS",
      "codigo": "SELECT nome FROM leitores;\nINSERT INTO leitores (id, nome, turma)\nVALUES (5, 'Eva', '1A');\nUPDATE leitores SET turma = '1C' WHERE id = 4;\nDELETE FROM leitores WHERE id = 5;",
      "refs": [
        "select",
        "insert",
        "update"
      ]
    },
    {
      "titulo": "F3 - Linhas, campos e valores",
      "texto": [
        "Quantos registros e campos há em livros? Dê um exemplo de campo textual e de campo numérico. O NULL do empréstimo 101 equivale a zero ou a uma data vazia? Explique o significado neste cenário."
      ],
      "label": "LEITURA DE TABELAS",
      "codigo": "Observe livros e emprestimos na base inicial.\nO título do livro 1 é Redes de Computadores.\nA devolução do empréstimo 101 é NULL.",
      "refs": [
        "conceitos",
        "null"
      ]
    },
    {
      "titulo": "Q1 - Filtros e ordem do resultado",
      "texto": [
        "Quais IDs aparecem e em que ordem? Explique o papel dos parênteses e o critério de desempate. O que pode mudar se retirarmos os parênteses?"
      ],
      "label": "CONSULTAS",
      "codigo": "SELECT id, titulo, quantidade\nFROM livros\nWHERE (area = 'Redes' OR area = 'Web')\n  AND quantidade >= 2\nORDER BY quantidade DESC, id;",
      "refs": [
        "select"
      ]
    },
    {
      "titulo": "Q2 - Comparação com NULL",
      "texto": [
        "A intenção é listar empréstimos sem devolução registrada. Essa comparação atende? Corrija a condição e liste os IDs esperados. Explique por que a mudança importa."
      ],
      "label": "CONSULTAS",
      "codigo": "SELECT id\nFROM emprestimos\nWHERE data_devolucao = NULL\nORDER BY id;",
      "refs": [
        "null"
      ]
    },
    {
      "titulo": "Q3 - Leitura de JOIN",
      "texto": [
        "Escreva as linhas esperadas. Por que um título ou um nome pode se repetir? Se retirarmos a condição que liga leitores a emprestimos e combinarmos todos os leitores com cada empréstimo selecionado, quantas linhas aparecerão?"
      ],
      "label": "CONSULTAS",
      "codigo": "SELECT e.id, l.titulo, r.nome\nFROM emprestimos e\nJOIN livros l ON l.id = e.livro_id\nJOIN leitores r ON r.id = e.leitor_id\nWHERE e.data_devolucao IS NULL\nORDER BY e.id;",
      "refs": [
        "join"
      ]
    },
    {
      "titulo": "Q4 - LEFT JOIN e contagem",
      "texto": [
        "A intenção é contar todos os empréstimos de cada leitor, incluindo quem tem zero. Qual total essa consulta mostra para Duda? Corrija a contagem e escreva o total correto dos quatro leitores."
      ],
      "label": "CONSULTAS",
      "codigo": "SELECT r.nome, COUNT(*) AS total\nFROM leitores r\nLEFT JOIN emprestimos e ON e.leitor_id = r.id\nGROUP BY r.id, r.nome\nORDER BY r.id;",
      "refs": [
        "join",
        "grupos",
        "null"
      ]
    },
    {
      "titulo": "Q5 - Agrupamento e filtros",
      "texto": [
        "Qual linha aparece? Explique a diferença entre titulos e exemplares. Para considerar somente livros com quantidade >= 2 antes do agrupamento, onde entraria esse filtro? Por que HAVING e WHERE têm papéis diferentes?"
      ],
      "label": "CONSULTAS",
      "codigo": "SELECT area, COUNT(*) AS titulos,\n       SUM(quantidade) AS exemplares\nFROM livros\nGROUP BY area\nHAVING COUNT(*) >= 2\nORDER BY area;",
      "refs": [
        "grupos"
      ]
    },
    {
      "titulo": "Q6 - Repetições e DISTINCT",
      "texto": [
        "Quais livros aparecem? Quantas linhas haveria sem DISTINCT? Explique por que contar empréstimos pode dar um número diferente de contar livros que já foram emprestados."
      ],
      "label": "CONSULTAS",
      "codigo": "SELECT DISTINCT l.id, l.titulo\nFROM livros l\nJOIN emprestimos e ON e.livro_id = l.id\nORDER BY l.id;",
      "refs": [
        "select",
        "join"
      ]
    },
    {
      "titulo": "Q7 - Subconsulta e média",
      "texto": [
        "Calcule a média usada na condição e liste os IDs selecionados. O que a consulta interna devolve e como a consulta externa usa esse valor?"
      ],
      "label": "CONSULTAS",
      "codigo": "SELECT id, quantidade\nFROM livros\nWHERE quantidade > (\n  SELECT AVG(quantidade) FROM livros\n)\nORDER BY id;",
      "refs": [
        "subconsultas",
        "grupos"
      ]
    },
    {
      "titulo": "D1 - Alcance de UPDATE",
      "texto": [
        "Sem executar, indique quantos registros cada comando alcança e como ficam as turmas. Qual comando corresponde a alterar somente Duda? Explique o papel de WHERE."
      ],
      "label": "INTERPRETAÇÃO DE ALTERAÇÕES",
      "codigo": "A: UPDATE leitores SET turma = '1C' WHERE id = 4;\nB: UPDATE leitores SET turma = '1C';\nConsidere A e B separadamente na base inicial.",
      "refs": [
        "update"
      ]
    },
    {
      "titulo": "D2 - Erro de coluna e erro de resultado",
      "texto": [
        "Qual consulta usa um campo que não existe na base? Corrija-a. A consulta B pode funcionar e ainda responder errado ao pedido? Corrija e informe os IDs que deveriam aparecer, sem exigir a ordem."
      ],
      "label": "ANÁLISE DE ERROS",
      "codigo": "A: SELECT titulo FROM livros WHERE categoria = 'Web';\nB: SELECT titulo FROM livros WHERE quantidade > 2;\nPedido de B: livros com pelo menos dois exemplares.",
      "refs": [
        "select"
      ]
    },
    {
      "titulo": "Cópia inicial do diagnóstico",
      "texto": [
        "Selecionar “Tentativa inicial” e baixar o TXT.",
        "Conferir o arquivo em Downloads e manter a ficha aberta.",
        "Depois desse registro, começar as tarefas P1 a P3."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO"
    },
    {
      "titulo": "Arquivos da prática e VS Code",
      "texto": [
        "Baixar e extrair o ZIP: somente dois arquivos.",
        "Abrir 01-base-referencia.html no navegador e 02-diagnostico.sql no VS Code.",
        "Escrever o SQL e prever resultados. Não é necessário executar ou instalar um SGBD."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO"
    },
    {
      "titulo": "P1 - Filtro com resultado previsto",
      "texto": [
        "Escreva uma consulta que mostre id, titulo e quantidade dos livros com pelo menos dois exemplares. Ordene por quantidade decrescente e, nos empates, por id crescente. Antes de consultar qualquer material, registre os IDs na ordem esperada.",
        "Registrar a tentativa, a previsão e o apoio recebido."
      ],
      "label": "PRODUÇÃO DE SQL"
    },
    {
      "titulo": "P2 - Relatório com zeros",
      "texto": [
        "Escreva uma consulta com nome e total de empréstimos sem devolução registrada por leitor, incluindo leitores com zero. Ordene pelo id do leitor. Preveja os quatro totais e explique onde colocou a condição de devolução.",
        "Registrar a tentativa, a previsão e o apoio recebido."
      ],
      "label": "PRODUÇÃO DE SQL"
    },
    {
      "titulo": "P3 - Alteração descrita em SQL",
      "texto": [
        "Somente no papel ou no arquivo SQL, escreva o comando para mudar a turma de Duda (id 4) de 1B para 1C. Indique a linha antes e depois e explique como restringiu a alteração. Considere a base inicial e não execute esse comando nesta atividade.",
        "Registrar a tentativa, a previsão e o apoio recebido."
      ],
      "label": "PRODUÇÃO DE SQL"
    },
    {
      "titulo": "Entrega dos registros",
      "texto": [
        "Salvar o SQL com nome e turma.",
        "Na ficha, registrar a prática e a dúvida final. Selecionar “Versão final” e baixar o TXT.",
        "Entregar TXT inicial, TXT final e SQL ao professor na aula. Em papel, entregar a ficha identificada."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO"
    },
    {
      "titulo": "Retomadas a partir das respostas",
      "texto": [
        "Conceitos: diferença entre dados, SGBD, SQL e ferramenta.",
        "Consultas: o que cada linha significa e como conferir o resultado.",
        "Escrita: transformar uma pergunta em SQL e explicar uma correção."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO"
    }
  ],
  "sgbd": "A confirmar",
  "versao": "Diagnóstico sem SGBD definido - 18/10/2026",
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
  "baseNota": "Dados fictícios. quantidade é o total cadastrado, não o saldo disponível. NULL em data_devolucao significa que a devolução ainda não foi registrada. Use a base inicial em todas as questões e tarefas; considere cada alteração isoladamente.",
  "praticas": [
    {
      "id": "P1",
      "titulo": "Filtro com resultado previsto",
      "enunciado": "Escreva uma consulta que mostre id, titulo e quantidade dos livros com pelo menos dois exemplares. Ordene por quantidade decrescente e, nos empates, por id crescente. Antes de consultar qualquer material, registre os IDs na ordem esperada."
    },
    {
      "id": "P2",
      "titulo": "Relatório com zeros",
      "enunciado": "Escreva uma consulta com nome e total de empréstimos sem devolução registrada por leitor, incluindo leitores com zero. Ordene pelo id do leitor. Preveja os quatro totais e explique onde colocou a condição de devolução."
    },
    {
      "id": "P3",
      "titulo": "Alteração descrita em SQL",
      "enunciado": "Somente no papel ou no arquivo SQL, escreva o comando para mudar a turma de Duda (id 4) de 1B para 1C. Indique a linha antes e depois e explique como restringiu a alteração. Considere a base inicial e não execute esse comando nesta atividade."
    }
  ],
  "saida": "Que decisão de SQL você consegue justificar agora? Qual dúvida precisa retomar?",
  "rascunhoSQL": "-- DADOSLAB - Diagnóstico de Banco de Dados - 19/10/2026\n-- Nome:\n-- Turma:\n-- SGBD da turma: a confirmar.\n-- Escreva suas tentativas e as previsões. Não é preciso executar.\n\n-- P1 - Filtro com resultado previsto\n-- Minha tentativa:\n\n\n-- Resultado previsto / justificativa:\n\n\n-- P2 - Relatório com zeros\n-- Minha tentativa:\n\n\n-- Resultado previsto / justificativa:\n\n\n-- P3 - Alteração descrita em SQL\n-- Minha tentativa:\n\n\n-- Resultado previsto / justificativa:\n\n-- P3: somente escrita e previsão. Não executar.\n"
};
