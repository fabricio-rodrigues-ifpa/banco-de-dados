window.WEBLAB_BD = {
  "titulo": "Banco de Dados",
  "professor": "Fabrício Rodrigues",
  "inicio": "2026-10-19",
  "fim": "2026-12-14",
  "semAula": "2026-11-02",
  "avaliacao": "2026-12-07",
  "planejamento": "Proposta ajustável conforme o diagnóstico e o calendário da turma.",
  "referencias": [
    {
      "id": "conceitos",
      "titulo": "PostgreSQL: conceitos relacionais (em inglês)",
      "url": "https://www.postgresql.org/docs/current/tutorial-concepts.html"
    },
    {
      "id": "tabelas",
      "titulo": "PostgreSQL: criação de tabelas (em inglês)",
      "url": "https://www.postgresql.org/docs/current/ddl-basics.html"
    },
    {
      "id": "chaves",
      "titulo": "PostgreSQL: restrições e chaves (em inglês)",
      "url": "https://www.postgresql.org/docs/current/ddl-constraints.html"
    },
    {
      "id": "select",
      "titulo": "SQLite: SELECT e consultas (em inglês)",
      "url": "https://sqlite.org/lang_select.html"
    },
    {
      "id": "null",
      "titulo": "SQLite: expressões, operadores e NULL (em inglês)",
      "url": "https://sqlite.org/lang_expr.html"
    },
    {
      "id": "insert",
      "titulo": "SQLite: INSERT (em inglês)",
      "url": "https://sqlite.org/lang_insert.html"
    },
    {
      "id": "update",
      "titulo": "SQLite: UPDATE (em inglês)",
      "url": "https://sqlite.org/lang_update.html"
    },
    {
      "id": "mysql",
      "titulo": "MySQL: manual de SELECT (em inglês)",
      "url": "https://dev.mysql.com/doc/refman/8.4/en/select.html"
    },
    {
      "id": "sqlite",
      "titulo": "SQLite: primeiros passos (em inglês)",
      "url": "https://sqlite.org/quickstart.html"
    },
    {
      "id": "sqljs",
      "titulo": "sql.js: SQLite no navegador e licença",
      "url": "https://github.com/sql-js/sql.js"
    },
    {
      "id": "feriado",
      "titulo": "Calendário oficial de feriados de 2026",
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
    ]
  ],
  "emprestimos": [
    [
      101,
      1,
      "Ana",
      "2026-10-10",
      null
    ],
    [
      102,
      3,
      "Bruno",
      "2026-10-11",
      "2026-10-15"
    ],
    [
      103,
      1,
      "Caio",
      "2026-10-12",
      null
    ]
  ],
  "perguntas": [
    {
      "id": "D1",
      "area": "Dados e organização",
      "titulo": "Dado e informação",
      "codigo": "Registro: livro_id = 1\nPergunta: quais livros estão emprestados sem devolução?",
      "enunciado": "O que esse registro informa sozinho? Que outros dados você consultaria para responder à pergunta?"
    },
    {
      "id": "D2",
      "area": "Dados e organização",
      "titulo": "Campos e registros",
      "codigo": "Tabela livros: id | titulo | area | quantidade\nExemplo: 1 | Redes de Computadores | Redes | 2",
      "enunciado": "O que representa uma linha? O que representa uma coluna? Quantos registros de livros aparecem na base da aula?"
    },
    {
      "id": "D3",
      "area": "Dados e organização",
      "titulo": "Identificação de um registro",
      "codigo": "livros(id, titulo, area, quantidade)",
      "enunciado": "Qual campo você escolheria para identificar um registro sem ambiguidade? Por que só o título pode não bastar?"
    },
    {
      "id": "M1",
      "area": "Modelagem e relações",
      "titulo": "Repetição de dados",
      "codigo": "Imagine copiar titulo e area do livro\nem cada linha de emprestimo.",
      "enunciado": "Que problema pode ocorrer se o nome da área mudar? Como você organizaria os dados para evitar cópias inconsistentes?"
    },
    {
      "id": "M2",
      "area": "Modelagem e relações",
      "titulo": "Ligação entre tabelas",
      "codigo": "livros.id = 1\nemprestimos.livro_id = 1",
      "enunciado": "Como essas colunas ligam um empréstimo a um livro? O que significa tentar cadastrar livro_id = 99, se esse livro não existe?"
    },
    {
      "id": "M3",
      "area": "Modelagem e relações",
      "titulo": "Ausência de valor",
      "codigo": "Campo: data_devolucao\nValor exibido: NULL",
      "enunciado": "Nesta base, o que foi combinado que NULL em data_devolucao representa? Você o trataria como uma data de verdade? Explique."
    },
    {
      "id": "Q1",
      "area": "Leitura de SQL",
      "titulo": "Seleção e filtro",
      "codigo": "SELECT titulo\nFROM livros\nWHERE area = 'Redes';",
      "enunciado": "Qual coluna aparece no resultado e quais registros entram? Escreva o resultado que espera encontrar."
    },
    {
      "id": "Q2",
      "area": "Leitura de SQL",
      "titulo": "Condição e ordenação",
      "codigo": "SELECT titulo, quantidade\nFROM livros\nWHERE quantidade >= 2\nORDER BY quantidade DESC, titulo;",
      "enunciado": "Quais livros entram e em que ordem? O que >= e DESC mudam nessa consulta?"
    },
    {
      "id": "Q3",
      "area": "Leitura de SQL",
      "titulo": "Consulta com relacionamento",
      "codigo": "SELECT l.titulo, e.leitor\nFROM livros AS l\nJOIN emprestimos AS e ON e.livro_id = l.id\nWHERE e.data_devolucao IS NULL\nORDER BY e.id;",
      "enunciado": "O que o JOIN combina? Por que o mesmo título pode aparecer em duas linhas? Se conseguir, escreva o resultado."
    }
  ],
  "aulas": [
    {
      "id": "aula-01",
      "numero": "01",
      "data": "2026-10-19",
      "dataCurta": "19/10",
      "eixo": "Diagnóstico",
      "titulo": "O que já sabemos sobre dados?",
      "subtitulo": "Diagnóstico individual, leitura de tabelas e consultas e fundamentos de banco de dados",
      "produto": "TXT identificado com respostas, registro da prática e bilhete de saída; consultas em SQL.",
      "objetivos": [
        "Explicar como interpreta dados de uma tabela.",
        "Justificar uma forma de identificar e relacionar registros.",
        "Ler ou construir uma consulta e registrar como verificou o resultado.",
        "Reconhecer a função de um banco de dados e de um SGBD."
      ],
      "retomada": "O diagnóstico verifica a base real da turma. Não presume quais ferramentas ou comandos cada estudante já estudou. Se um assunto for novo, registre isso junto da tentativa.",
      "secoes": [
        {
          "titulo": "Primeira tentativa individual",
          "texto": [
            "Abra a ficha e informe nome e turma. Observe a base fictícia da biblioteca. Responda antes de consultar o material de fundamentos ou discutir as soluções. Esta atividade orienta a continuidade e não recebe nota somativa.",
            "Uma dúvida explicada também é uma evidência útil. Identifique o que você já estudou e justifique o que conseguir. Não invente uma resposta só para preencher tudo."
          ],
          "codigo": ""
        },
        {
          "titulo": "A base da biblioteca",
          "texto": [
            "Cada linha de livros representa um cadastro de livro. quantidade indica exemplares cadastrados, não o saldo disponível depois dos empréstimos. Cada empréstimo guarda o código do livro e uma data de devolução, quando registrada.",
            "Nesta base, NULL em data_devolucao indica que a devolução ainda não foi registrada. Todos os nomes e registros são fictícios."
          ],
          "codigo": "",
          "tabela": [
            [
              "Tabela",
              "Campos"
            ],
            [
              "livros",
              "id, titulo, area, quantidade"
            ],
            [
              "emprestimos",
              "id, livro_id, leitor, data_emprestimo, data_devolucao"
            ]
          ]
        },
        {
          "titulo": "Prática de diagnóstico",
          "texto": [
            "Abra o Laboratório SQL pelo botão da aula. O banco já vem carregado e funciona no navegador. Antes de executar, escreva o que espera encontrar. Depois, compare com o resultado e registre a diferença na ficha.",
            "Corrija a consulta que usa uma coluna inexistente. Em seguida, escreva uma consulta que mostre título e quantidade dos livros com pelo menos dois exemplares. Quem já domina pode relacionar livros e empréstimos em aberto.",
            "Baixe suas consultas em SQL antes de fechar a aba. Os resultados e a digitação não são salvos automaticamente. O laboratório usa SQLite; a instalação e as particularidades do SGBD da turma serão alinhadas pelo professor."
          ],
          "codigo": "SELECT titulo\nFROM livros\nWHERE categoria = 'Redes';"
        },
        {
          "titulo": "Fundamentos: para que serve um banco de dados?",
          "texto": [
            "Um banco de dados organiza dados para que possam ser consultados e mantidos conforme regras. Na biblioteca, precisamos saber quais livros existem e quais empréstimos ainda não têm devolução registrada.",
            "Um SGBD é o software que gerencia o banco. SQLite, MySQL e PostgreSQL são exemplos. A interface de edição é uma ferramenta para trabalhar com o sistema; ela não é a própria coleção de dados."
          ],
          "codigo": ""
        },
        {
          "titulo": "Tabelas, chaves e relações",
          "texto": [
            "No modelo relacional, tabelas organizam registros em campos. Uma chave primária identifica uma linha. Uma chave estrangeira referencia um registro de outra tabela e permite aplicar uma regra de integridade.",
            "livros.id ← emprestimos.livro_id: um livro cadastrado pode participar de vários empréstimos, e cada empréstimo desta base corresponde a um livro. O título pode aparecer mais de uma vez em um relatório porque os empréstimos são diferentes."
          ],
          "codigo": ""
        },
        {
          "titulo": "O caminho de uma consulta",
          "texto": [
            "Pergunta sobre a biblioteca → consulta SQL → processamento pelo SGBD → tabela de resultado → interpretação.",
            "SELECT escolhe o que será apresentado, FROM indica a origem e WHERE define uma condição. SQL também tem comandos para criar estruturas e alterar dados. Nesta primeira aula, a prática prioriza consultas."
          ],
          "codigo": "SELECT titulo, area\nFROM livros\nWHERE quantidade >= 2\nORDER BY titulo;"
        }
      ],
      "atividade": [
        "Responder individualmente às nove questões da ficha.",
        "Abrir o laboratório, prever um resultado e executar a consulta inicial.",
        "Corrigir a consulta com categoria e escrever a consulta com quantidade >= 2.",
        "Registrar consulta, previsão, resultado e uma dúvida na ficha.",
        "Baixar o TXT identificado e suas consultas SQL; entregar os arquivos na aula."
      ],
      "checklist": [
        "Expliquei como interpretei uma tabela.",
        "Justifiquei uma identificação ou relação entre registros.",
        "Comparei minha previsão com o resultado de uma consulta.",
        "Baixei minhas respostas e consultas antes de fechar."
      ],
      "curiosidade": "Um resultado com títulos repetidos pode estar correto quando cada linha corresponde a um empréstimo diferente. A pergunta determina o que cada linha do relatório deve representar.",
      "extensao": "Relacionar os empréstimos sem devolução registrada com o título do livro e o nome fictício do leitor.",
      "refs": [
        "conceitos",
        "select",
        "chaves",
        "sqlite"
      ],
      "etapas": [
        "Acolhida e abertura da ficha, nome e turma.",
        "Primeira tentativa individual nas nove questões.",
        "Prática no laboratório e registro dos testes.",
        "Discussão de estratégias e evidências.",
        "Fundamentos de banco, SGBD, tabelas e consultas.",
        "Bilhete de saída, download e entrega."
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
          "codigo": "CREATE TABLE leitores (\n  id INTEGER PRIMARY KEY,\n  nome VARCHAR(80) NOT NULL,\n  turma VARCHAR(20) NOT NULL\n);"
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
            "UPDATE e DELETE devem ser discutidos em um banco de estudo. Antes de alterar, use SELECT com a mesma condição para conferir quais linhas seriam atingidas. O laboratório do portal é temporário e pode ser reiniciado."
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
      "curiosidade": "Declarar uma regra e verificar que o SGBD a aplica são etapas diferentes. No SQLite do laboratório, as chaves estrangeiras ficam ativadas explicitamente.",
      "extensao": "Acrescentar uma restrição para quantidade não negativa e testá-la.",
      "refs": [
        "tabelas",
        "chaves",
        "insert",
        "update"
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
        "null",
        "mysql"
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
          "codigo": "SELECT l.titulo, e.leitor\nFROM livros AS l\nJOIN emprestimos AS e ON e.livro_id = l.id\nORDER BY e.id;"
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
        "select",
        "null",
        "chaves"
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
        "select",
        "chaves",
        "sqlite"
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
        "sqlite",
        "conceitos"
      ]
    }
  ],
  "baseSQL": "PRAGMA foreign_keys = ON;\nCREATE TABLE livros (\n  id INTEGER PRIMARY KEY,\n  titulo TEXT NOT NULL,\n  area TEXT NOT NULL,\n  quantidade INTEGER NOT NULL CHECK (quantidade >= 0)\n);\nCREATE TABLE emprestimos (\n  id INTEGER PRIMARY KEY,\n  livro_id INTEGER NOT NULL REFERENCES livros(id),\n  leitor TEXT NOT NULL,\n  data_emprestimo TEXT NOT NULL,\n  data_devolucao TEXT\n);\nINSERT INTO livros (id, titulo, area, quantidade) VALUES\n  (1, 'Redes de Computadores', 'Redes', 2),\n  (2, 'Banco de Dados', 'Dados', 1),\n  (3, 'HTML e CSS', 'Web', 3),\n  (4, 'Lógica de Programação', 'Programação', 2);\nINSERT INTO emprestimos\n  (id, livro_id, leitor, data_emprestimo, data_devolucao) VALUES\n  (101, 1, 'Ana', '2026-10-10', NULL),\n  (102, 3, 'Bruno', '2026-10-11', '2026-10-15'),\n  (103, 1, 'Caio', '2026-10-12', NULL);\n",
  "slides": [
    {
      "titulo": "Banco de Dados",
      "texto": [
        "Diagnóstico e fundamentos",
        "Prof. Fabrício Rodrigues"
      ],
      "label": "WEBLAB / 19 DE OUTUBRO DE 2026"
    },
    {
      "titulo": "Etapas do nosso encontro",
      "texto": [
        "Primeira tentativa individual",
        "Prática com tabelas e consultas",
        "Conversa sobre as estratégias",
        "Fundamentos e percurso do período",
        "Download e entrega dos arquivos"
      ]
    },
    {
      "titulo": "Como registrar o que você sabe",
      "texto": [
        "Responda com suas palavras.",
        "Se um assunto for novo, registre isso.",
        "Na prática, compare previsão e resultado.",
        "Baixar um arquivo não envia a atividade ao professor."
      ]
    },
    {
      "titulo": "A biblioteca desta atividade",
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
        ]
      ],
      "label": "BASE FICTÍCIA / TABELA LIVROS"
    },
    {
      "titulo": "Dado e informação",
      "texto": [
        "O que esse registro informa sozinho? Que outros dados você consultaria para responder à pergunta?"
      ],
      "codigo": "Registro: livro_id = 1\nPergunta: quais livros estão emprestados sem devolução?",
      "label": "DIAGNÓSTICO / D1 / DADOS E ORGANIZAÇÃO"
    },
    {
      "titulo": "Campos e registros",
      "texto": [
        "O que representa uma linha? O que representa uma coluna? Quantos registros de livros aparecem na base da aula?"
      ],
      "codigo": "Tabela livros: id | titulo | area | quantidade\nExemplo: 1 | Redes de Computadores | Redes | 2",
      "label": "DIAGNÓSTICO / D2 / DADOS E ORGANIZAÇÃO"
    },
    {
      "titulo": "Identificação de um registro",
      "texto": [
        "Qual campo você escolheria para identificar um registro sem ambiguidade? Por que só o título pode não bastar?"
      ],
      "codigo": "livros(id, titulo, area, quantidade)",
      "label": "DIAGNÓSTICO / D3 / DADOS E ORGANIZAÇÃO"
    },
    {
      "titulo": "Repetição de dados",
      "texto": [
        "Que problema pode ocorrer se o nome da área mudar? Como você organizaria os dados para evitar cópias inconsistentes?"
      ],
      "codigo": "Imagine copiar titulo e area do livro\nem cada linha de emprestimo.",
      "label": "DIAGNÓSTICO / M1 / MODELAGEM E RELAÇÕES"
    },
    {
      "titulo": "Ligação entre tabelas",
      "texto": [
        "Como essas colunas ligam um empréstimo a um livro? O que significa tentar cadastrar livro_id = 99, se esse livro não existe?"
      ],
      "codigo": "livros.id = 1\nemprestimos.livro_id = 1",
      "label": "DIAGNÓSTICO / M2 / MODELAGEM E RELAÇÕES"
    },
    {
      "titulo": "Ausência de valor",
      "texto": [
        "Nesta base, o que foi combinado que NULL em data_devolucao representa? Você o trataria como uma data de verdade? Explique."
      ],
      "codigo": "Campo: data_devolucao\nValor exibido: NULL",
      "label": "DIAGNÓSTICO / M3 / MODELAGEM E RELAÇÕES"
    },
    {
      "titulo": "Seleção e filtro",
      "texto": [
        "Qual coluna aparece no resultado e quais registros entram? Escreva o resultado que espera encontrar."
      ],
      "codigo": "SELECT titulo\nFROM livros\nWHERE area = 'Redes';",
      "label": "DIAGNÓSTICO / Q1 / LEITURA DE SQL"
    },
    {
      "titulo": "Condição e ordenação",
      "texto": [
        "Quais livros entram e em que ordem? O que >= e DESC mudam nessa consulta?"
      ],
      "codigo": "SELECT titulo, quantidade\nFROM livros\nWHERE quantidade >= 2\nORDER BY quantidade DESC, titulo;",
      "label": "DIAGNÓSTICO / Q2 / LEITURA DE SQL"
    },
    {
      "titulo": "Consulta com relacionamento",
      "texto": [
        "O que o JOIN combina? Por que o mesmo título pode aparecer em duas linhas? Se conseguir, escreva o resultado."
      ],
      "codigo": "SELECT l.titulo, e.leitor\nFROM livros AS l\nJOIN emprestimos AS e ON e.livro_id = l.id\nWHERE e.data_devolucao IS NULL\nORDER BY e.id;",
      "label": "DIAGNÓSTICO / Q3 / LEITURA DE SQL"
    },
    {
      "titulo": "Prática no Laboratório SQL",
      "texto": [
        "1. Abra o laboratório em outra aba.",
        "2. Preveja e execute a consulta inicial.",
        "3. Investigue a coluna categoria e escreva uma consulta.",
        "4. Registre o teste e baixe suas consultas SQL."
      ]
    },
    {
      "titulo": "Evidências para nossa conversa",
      "texto": [
        "Que diferença apareceu entre sua previsão e o resultado?",
        "Como você identificou o problema da consulta?",
        "O que cada linha do resultado representa?",
        "Qual mudança você consegue explicar?"
      ]
    },
    {
      "titulo": "Para que serve um banco de dados?",
      "texto": [
        "Organiza dados para consulta e manutenção.",
        "Mantém registros conforme regras.",
        "Ajuda a responder perguntas sobre uma situação.",
        "Na biblioteca: quais empréstimos ainda estão abertos?"
      ],
      "refs": [
        "conceitos"
      ]
    },
    {
      "titulo": "Banco, SGBD e ferramenta",
      "texto": [
        "Banco: a coleção organizada de dados.",
        "SGBD: o software que gerencia o banco.",
        "Ferramenta: a interface usada para trabalhar com ele.",
        "No laboratório do portal, usamos SQLite."
      ],
      "refs": [
        "conceitos",
        "sqlite"
      ]
    },
    {
      "titulo": "Campos e registros",
      "texto": [],
      "tabela": [
        [
          "Elemento",
          "Papel na biblioteca"
        ],
        [
          "Tabela livros",
          "Conjunto de registros de livros"
        ],
        [
          "Uma linha",
          "Um registro cadastrado"
        ],
        [
          "Coluna titulo",
          "Um campo do registro"
        ],
        [
          "Resultado de SELECT",
          "Linhas e colunas produzidas pela consulta"
        ]
      ],
      "refs": [
        "conceitos",
        "select"
      ]
    },
    {
      "titulo": "Chaves e relacionamentos",
      "texto": [
        "PK: identifica um registro sem ambiguidade.",
        "FK: referencia um registro de outra tabela.",
        "livros.id ← emprestimos.livro_id",
        "Um livro cadastrado pode participar de vários empréstimos."
      ],
      "refs": [
        "chaves"
      ]
    },
    {
      "titulo": "O caminho de uma consulta",
      "texto": [
        "Pergunta → SQL → SGBD → resultado",
        "O que queremos descobrir?",
        "Quais colunas, origem e condição expressam a pergunta?",
        "Como vamos conferir o significado do resultado?"
      ],
      "refs": [
        "select"
      ]
    },
    {
      "titulo": "SELECT no laboratório",
      "texto": [
        "Escolha as colunas, a origem e a condição."
      ],
      "codigo": "SELECT titulo, area\nFROM livros\nWHERE area = 'Dados'\nORDER BY titulo;",
      "refs": [
        "select"
      ]
    },
    {
      "titulo": "Mapa do período",
      "texto": [],
      "tabela": [
        [
          "Segunda",
          "Tema"
        ],
        [
          "19/10",
          "Diagnóstico e fundamentos"
        ],
        [
          "26/10",
          "Cada dado no lugar certo"
        ],
        [
          "09/11",
          "O modelo vira tabelas"
        ],
        [
          "16/11",
          "Perguntas que viram consultas"
        ],
        [
          "23/11",
          "As tabelas contam uma história"
        ],
        [
          "30/11",
          "Uma biblioteca pronta para testar"
        ],
        [
          "07/12",
          "Avaliação prática da biblioteca"
        ],
        [
          "14/12",
          "Corrigir, recuperar e concluir"
        ]
      ]
    },
    {
      "titulo": "Arquivos e entrega",
      "texto": [
        "TXT: identificação, respostas e registro da prática.",
        "SQL: suas consultas e o histórico da tentativa.",
        "Confira os dois arquivos na pasta Downloads.",
        "Entregue os arquivos ao professor durante a aula."
      ]
    },
    {
      "titulo": "Bilhete de saída",
      "texto": [
        "Uma facilidade de hoje.",
        "Uma dúvida para a próxima aula.",
        "O que uma chave primária identifica?",
        "Baixe o TXT final e entregue os arquivos."
      ]
    }
  ]
};
