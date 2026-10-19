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
      "id": "1",
      "titulo": "Programa utilizado",
      "enunciado": "Qual programa vocês usaram nas aulas de banco de dados? Se não lembrar, escreva “não lembro”."
    },
    {
      "id": "2",
      "titulo": "Conteúdos já estudados",
      "enunciado": "Para cada conteúdo, marque: não estudei; já estudei e preciso revisar; consigo fazer."
    },
    {
      "id": "3",
      "titulo": "O que já fizeram em aula",
      "enunciado": "Qual atividade com banco de dados você já fez? Cite algo que consegue fazer sozinho."
    },
    {
      "id": "4",
      "titulo": "Uma consulta simples",
      "enunciado": "Na tabela livros abaixo, como listar somente os títulos com quantidade >= 2? Escreva o SQL ou explique os passos. Se não souber, registre isso."
    },
    {
      "id": "5",
      "titulo": "Principal dúvida",
      "enunciado": "Qual conteúdo você precisa revisar primeiro?"
    }
  ],
  "aulas": [
    {
      "id": "aula-01",
      "numero": "01",
      "data": "2026-10-19",
      "dataCurta": "19/10",
      "eixo": "Diagnóstico",
      "titulo": "O que a turma já estudou?",
      "subtitulo": "Diagnóstico breve de conteúdos e experiências anteriores",
      "produto": "Um TXT ou uma ficha identificada com cinco respostas e a marcação dos conteúdos já estudados.",
      "objetivos": [
        "Identificar os conteúdos já abordados nas aulas anteriores.",
        "Registrar o programa utilizado e as atividades que os alunos já fizeram.",
        "Observar uma consulta simples para orientar a retomada."
      ],
      "retomada": "Responda com sinceridade, sem consultar materiais. O objetivo é conhecer o percurso da turma e escolher o que precisamos revisar.",
      "secoes": [
        {
          "titulo": "Cinco perguntas diretas",
          "texto": [
            "Informe o programa utilizado, marque os conteúdos já estudados e conte uma atividade que já fez. Depois tente uma consulta simples e indique sua principal dúvida.",
            "Você pode escrever “não lembro”, “não estudei” ou explicar os passos com suas palavras. O diagnóstico não recebe nota."
          ]
        },
        {
          "titulo": "Como responder e entregar",
          "texto": [
            "Abra a ficha, preencha nome e turma e responda às cinco perguntas. Ao terminar, baixe um único TXT e entregue ao professor durante a aula. Em papel, entregue a ficha identificada.",
            "O SGBD da turma ainda será confirmado. Não é preciso instalar ou executar um banco de dados. A consulta pode ser escrita na ficha. O projeto com dois arquivos é opcional para quem preferir escrever no VS Code."
          ]
        },
        {
          "titulo": "Depois da coleta",
          "texto": [
            "A turma conversa sobre as atividades anteriores e retoma os conteúdos mais indicados nas respostas. O professor confirma o ambiente utilizado antes das próximas práticas."
          ]
        }
      ],
      "atividade": [
        "Preencher nome e turma.",
        "Responder às cinco perguntas e marcar os conteúdos estudados.",
        "Baixar o TXT e entregar ao professor na aula; em papel, entregar a ficha.",
        "Participar da retomada dos conteúdos mais citados."
      ],
      "checklist": [
        "Informei o programa usado ou registrei que não lembro.",
        "Marquei os conteúdos e relatei uma atividade anterior.",
        "Tentei a consulta simples ou indiquei minha dificuldade.",
        "Entreguei um único TXT ou a ficha identificada."
      ],
      "curiosidade": "Lembrar o nome de um comando e conseguir usá-lo são informações diferentes. Uma pequena tentativa ajuda a escolher a revisão.",
      "extensao": "Depois da entrega, explique ao professor um exemplo de atividade que já fez.",
      "refs": [
        "conceitos",
        "sql",
        "select"
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
        "O que a turma já estudou?",
        "Prof. Fabrício Rodrigues"
      ],
      "label": "DADOSLAB / DIAGNÓSTICO BREVE"
    },
    {
      "titulo": "Programa utilizado",
      "texto": [
        "Qual programa vocês usaram nas aulas de banco de dados? Se não lembrar, escreva “não lembro”.",
        "A ficha está no portal. Preencha nome e turma."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO BREVE"
    },
    {
      "titulo": "Conteúdos já estudados",
      "texto": [
        "Não estudei / Já estudei, preciso revisar / Consigo fazer"
      ],
      "label": "DADOSLAB / DIAGNÓSTICO BREVE",
      "tabela": [
        [
          "Conteúdo",
          "Minha situação na ficha"
        ],
        [
          "Banco de dados e SGBD",
          "Marcar uma opção"
        ],
        [
          "Tabelas, linhas e colunas",
          "Marcar uma opção"
        ],
        [
          "Tipos de dados",
          "Marcar uma opção"
        ],
        [
          "Criar tabelas (CREATE TABLE)",
          "Marcar uma opção"
        ],
        [
          "Inserir dados (INSERT)",
          "Marcar uma opção"
        ],
        [
          "Consultar dados (SELECT)",
          "Marcar uma opção"
        ],
        [
          "Filtrar e ordenar (WHERE / ORDER BY)",
          "Marcar uma opção"
        ],
        [
          "Alterar e excluir (UPDATE / DELETE)",
          "Marcar uma opção"
        ],
        [
          "Consultar mais de uma tabela (JOIN)",
          "Marcar uma opção"
        ],
        [
          "Agrupar e contar (GROUP BY / COUNT)",
          "Marcar uma opção"
        ]
      ]
    },
    {
      "titulo": "Atividades anteriores",
      "texto": [
        "Qual atividade com banco de dados você já fez? Cite algo que consegue fazer sozinho.",
        "Pode ser criar uma tabela, cadastrar dados ou fazer uma consulta."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO BREVE"
    },
    {
      "titulo": "Uma consulta simples",
      "texto": [
        "Na tabela livros abaixo, como listar somente os títulos com quantidade >= 2? Escreva o SQL ou explique os passos. Se não souber, registre isso.",
        "SQL ou explicação dos passos são aceitos. Não é preciso executar."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO BREVE",
      "tabela": [
        [
          "id",
          "titulo",
          "quantidade"
        ],
        [
          1,
          "Redes de Computadores",
          2
        ],
        [
          2,
          "Banco de Dados",
          1
        ],
        [
          3,
          "HTML e CSS",
          3
        ]
      ]
    },
    {
      "titulo": "Dúvida e entrega",
      "texto": [
        "Qual conteúdo você precisa revisar primeiro?",
        "Ao terminar, baixar um único TXT e entregar ao professor na aula.",
        "Em papel, entregar a ficha com nome e turma."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO BREVE"
    },
    {
      "titulo": "Retomada da aula",
      "texto": [
        "Quais conteúdos apareceram mais nas respostas?",
        "Uma atividade anterior da turma como ponto de partida.",
        "Programa de banco de dados utilizado: a confirmar."
      ],
      "label": "DADOSLAB / DIAGNÓSTICO BREVE"
    }
  ],
  "sgbd": "A confirmar",
  "versao": "Diagnóstico resumido de conteúdos estudados - 18/10/2026",
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
  "baseNota": "Tabela fictícia livros. Use somente os dados abaixo na pergunta 4. Não é necessário instalar ou executar um SGBD.",
  "praticas": [],
  "saida": "Qual conteúdo você precisa revisar primeiro?",
  "rascunhoSQL": "-- DADOSLAB - Diagnóstico resumido - 19/10/2026\n-- Nome:\n-- Turma:\n-- SGBD da turma: a confirmar. Não é necessário executar.\n\n-- Pergunta 4: listar somente os títulos com quantidade >= 2.\n-- Consulte a tabela livros em 01-base-referencia.html.\n\n-- Minha tentativa SQL ou explicação:\n\n\n\n-- Registre esta tentativa na ficha e entregue um único TXT ao professor.\n",
  "topicos": [
    [
      "T1",
      "Banco de dados e SGBD"
    ],
    [
      "T2",
      "Tabelas, linhas e colunas"
    ],
    [
      "T3",
      "Tipos de dados"
    ],
    [
      "T4",
      "Criar tabelas (CREATE TABLE)"
    ],
    [
      "T5",
      "Inserir dados (INSERT)"
    ],
    [
      "T6",
      "Consultar dados (SELECT)"
    ],
    [
      "T7",
      "Filtrar e ordenar (WHERE / ORDER BY)"
    ],
    [
      "T8",
      "Alterar e excluir (UPDATE / DELETE)"
    ],
    [
      "T9",
      "Consultar mais de uma tabela (JOIN)"
    ],
    [
      "T10",
      "Agrupar e contar (GROUP BY / COUNT)"
    ]
  ],
  "niveis": [
    [
      "nao-estudei",
      "Não estudei"
    ],
    [
      "preciso-revisar",
      "Já estudei, preciso revisar"
    ],
    [
      "consigo-fazer",
      "Consigo fazer"
    ]
  ],
  "baseDiagnostico": [
    [
      1,
      "Redes de Computadores",
      2
    ],
    [
      2,
      "Banco de Dados",
      1
    ],
    [
      3,
      "HTML e CSS",
      3
    ]
  ]
};
