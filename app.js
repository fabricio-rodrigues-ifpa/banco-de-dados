(() => {
  'use strict';
  const D = window.WEBLAB_BD;
  if (!D) return;
  const $ = (selector) => document.querySelector(selector);
  const esc = (value) => String(value ?? 'NULL').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const slug = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, 55);
  const table = (headers, rows) => `<div class="db-table-wrap"><table class="db-table">
    <thead><tr>${headers.map((x) => `<th scope="col">${esc(x)}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((r) => `<tr>${r.map((x) => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`;
  const referenceList = (ids) => `<ul>${ids.map((id) => D.referencias.find((r) => r.id === id))
    .filter(Boolean).map((r) => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.titulo)} ↗</a></li>`).join('')}</ul>`;
  const save = (name, text, type = 'text/plain;charset=utf-8') => {
    const url = URL.createObjectURL(new Blob(['\uFEFF' + text], { type }));
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  if ($('#db-lessons')) {
    $('#db-lessons').innerHTML = D.aulas.map((a) => `<a class="course-row" href="aulas.html?id=${esc(a.id)}">
      <span class="lesson-date"><strong>${esc(a.dataCurta)}</strong><small>SEGUNDA-FEIRA</small></span>
      <span class="lesson-name"><small>AULA ${esc(a.numero)} / ${esc(a.eixo)}</small><h3>${esc(a.titulo)}</h3><p>${esc(a.subtitulo)}</p></span>
      <span class="lesson-row-arrow" aria-hidden="true">↗</span>
    </a>`).join('');
  }

  if ($('#db-lesson')) {
    const id = new URLSearchParams(location.search).get('id') || 'aula-01';
    const a = D.aulas.find((item) => item.id === id);
    if (!a) {
      $('#db-lesson').innerHTML = '<h1>Aula não encontrada</h1><p>Volte ao calendário e escolha um encontro.</p>';
      return;
    }
    document.title = `${a.dataCurta} · ${a.titulo} · DadosLab`;
    const next = D.aulas[D.aulas.indexOf(a) + 1];
    $('#db-lesson').innerHTML = `<header class="detail-hero">
      <p class="eyebrow">AULA ${esc(a.numero)} / ${esc(a.dataCurta)}/2026 / ${esc(a.eixo)}</p>
      <h1>${esc(a.titulo)}</h1><p class="lead">${esc(a.subtitulo)}</p>
      <div class="detail-actions"><a class="button secondary" href="index.html#encontros">← Voltar às aulas</a>
      ${a.id === 'aula-01' ? '<a class="button primary" href="slides.html">Abrir os slides ↗</a><a class="button primary" href="diagnostico.html">Responder ao diagnóstico ↗</a>' : ''}</div>
    </header>
    <div class="detail-layout"><article class="lesson-content">
      <section id="objetivos"><h2>O que vamos aprender</h2><ul>${a.objetivos.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      <div class="soft-box"><h3>Ponto de partida</h3><p>${esc(a.retomada)}</p></div></section>
      <section id="conteudo-aula">${a.secoes.map((s) => `<section><h2>${esc(s.titulo)}</h2>
        ${s.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
        ${s.tabela ? table(s.tabela[0], s.tabela.slice(1)) : ''}
        ${s.codigo ? `<pre><code>${esc(s.codigo)}</code></pre>` : ''}</section>`).join('')}</section>
      <section id="atividade"><h2>Prática da aula</h2><ol>${a.atividade.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>
      <p><strong>Resultado esperado:</strong> ${esc(a.produto)}</p>
      <div class="detail-actions"><a class="button primary" href="laboratorio.html">Abrir o Laboratório SQL ↗</a><a class="button secondary" href="Pratica-Banco-de-Dados.zip" download>Baixar os dois scripts SQL ↓</a></div></section>
      ${a.etapas ? `<section><h2>Etapas da aula</h2><ol>${a.etapas.map((x) => `<li>${esc(x)}</li>`).join('')}</ol></section>` : ''}
      <section id="conferencia"><h2>Checklist de conferência</h2><div class="checklist">${a.checklist.map((x) => `<label class="check-item"><input type="checkbox"><span>${esc(x)}</span></label>`).join('')}</div><p class="storage-note">As marcações não são salvas e não enviam uma entrega.</p></section>
      <section class="soft-box"><h3>Uma descoberta útil</h3><p>${esc(a.curiosidade)}</p></section>
      <section><h2>Para ir além</h2><p>${esc(a.extensao)}</p></section>
      <section id="referencias"><h2>Referências para consultar</h2>${referenceList(a.refs)}<p>Consulte depois da primeira tentativa do diagnóstico. Alguns materiais estão em inglês.</p></section>
      <div class="detail-actions"><a class="button secondary" href="index.html#encontros">← Voltar às aulas</a>${next ? `<a class="button primary" href="aulas.html?id=${esc(next.id)}">Próxima aula · ${esc(next.dataCurta)} →</a>` : ''}</div>
    </article><aside class="detail-aside">
      <p class="eyebrow">AULA ${esc(a.numero)} / ${esc(a.dataCurta)}</p>
      <a class="button primary" href="Caderno-do-Estudante-BD.pdf">Caderno em PDF ↗</a>
      <a class="button secondary" href="guia.html">Como usar e entregar ↗</a>
      <button class="button secondary" id="print-lesson">Imprimir esta aula</button>
      <nav class="lesson-nav" aria-label="Sumário da aula"><a href="#objetivos">Objetivos</a><a href="#conteudo-aula">Conteúdo e exemplos</a><a href="#atividade">Atividade</a><a href="#conferencia">Checklist</a><a href="#referencias">Referências com links</a></nav>
      <p class="storage-note">${esc(D.planejamento)}</p>
    </aside></div>`;
    $('#print-lesson').addEventListener('click', () => window.print());
  }

  if ($('#db-references')) $('#db-references').innerHTML = referenceList(D.referencias.map((r) => r.id));
  if ($('#db-base')) {
    $('#db-base').innerHTML = '<h3>livros</h3>' + table(['id', 'titulo', 'area', 'quantidade'], D.livros)
      + '<h3>emprestimos</h3>' + table(['id', 'livro_id', 'leitor', 'data_emprestimo', 'data_devolucao'], D.emprestimos);
  }

  if ($('#db-diagnostic')) {
    $('#db-questions').innerHTML = D.perguntas.map((q) => `<fieldset class="diagnostic-question">
      <legend>${esc(q.id)} / ${esc(q.area)} / ${esc(q.titulo)}</legend>
      <pre><code>${esc(q.codigo)}</code></pre><label for="resposta-${esc(q.id)}">${esc(q.enunciado)}</label>
      <textarea id="resposta-${esc(q.id)}" name="${esc(q.id)}" rows="4"></textarea>
    </fieldset>`).join('');
    $('#db-diagnostic').addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const nome = String(data.get('nome') || '').trim();
      const turma = String(data.get('turma') || '').trim();
      if (!nome || !turma) {
        $('#diagnostic-status').textContent = 'Informe nome e turma antes de baixar.';
        return;
      }
      const text = ['DADOSLAB - DIAGNÓSTICO DE BANCO DE DADOS', '19/10/2026 - Prof. Fabrício Rodrigues',
        'Nome: ' + nome, 'Turma: ' + turma, 'Experiência: ' + (data.get('experiencia') || '(sem registro)'), '',
        ...D.perguntas.flatMap((q) => [q.id + ' - ' + q.enunciado, String(data.get(q.id) || '(sem resposta)'), '']),
        'REGISTRO DA PRÁTICA', String(data.get('pratica') || '(sem registro)'), '',
        'Facilidade: ' + (data.get('facilidade') || ''), 'Dúvida: ' + (data.get('duvida') || ''),
        'O que uma chave primária identifica? ' + (data.get('chave') || '')].join('\n');
      const name = `diagnostico-bd-${slug(turma)}-${slug(nome)}.txt`;
      save(name, text);
      $('#diagnostic-status').textContent = `Download preparado: ${name}. Confira em Downloads e entregue ao professor na aula. Não há envio automático.`;
    });
  }

  if ($('#db-slide') && D.slides) {
    let index = 0;
    const show = () => {
      const s = D.slides[index];
      $('#db-slide').innerHTML = `<p class="eyebrow">${esc(s.label || 'DADOSLAB')}</p><h1>${esc(s.titulo)}</h1>
        ${(s.texto || []).map((x) => `<p>${esc(x)}</p>`).join('')}
        ${s.tabela ? table(s.tabela[0], s.tabela.slice(1)) : ''}
        ${s.codigo ? `<pre><code>${esc(s.codigo)}</code></pre>` : ''}`;
      $('#slide-counter').textContent = `${index + 1} de ${D.slides.length}`;
      $('#slide-prev').disabled = index === 0;
      $('#slide-next').disabled = index === D.slides.length - 1;
    };
    const move = (delta) => {
      index = Math.max(0, Math.min(D.slides.length - 1, index + delta));
      show();
    };
    $('#slide-prev').addEventListener('click', () => move(-1));
    $('#slide-next').addEventListener('click', () => move(1));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
    });
    show();
  }

  if ($('#sql-editor')) {
    let worker;
    let timer;
    let history = [];
    let ready = false;
    let activeSQL = '';
    const status = (message, error = false) => {
      $('#db-status').textContent = message;
      $('#db-status').classList.toggle('db-error', error);
    };
    const enable = (value) => {
      ready = value;
      $('#run-sql').disabled = !value;
      $('#reset-db').disabled = !value;
    };
    const renderHistory = () => {
      $('#db-log').innerHTML = history.map((x) => `<li><pre><code>${esc(x.sql)}</code></pre><p>${esc(x.summary)}</p></li>`).join('');
    };
    const start = () => {
      if (worker) worker.terminate();
      clearTimeout(timer);
      enable(false);
      worker = new Worker('sql-worker.js');
      worker.onmessage = ({ data }) => {
        clearTimeout(timer);
        if (data.type === 'ready') {
          enable(true);
          status('Base pronta: 4 livros e 3 empréstimos fictícios. Escreva sua previsão antes de executar.');
          return;
        }
        if (data.type === 'fatal') {
          enable(false);
          status('O SQLite não carregou. Abra o portal publicado ou use o pacote com Live Server. ' + data.error, true);
          return;
        }
        enable(true);
        if (data.type === 'error') {
          history.push({ sql: activeSQL, summary: 'Erro do SQLite: ' + data.error });
          status('Erro do SQLite: ' + data.error + '. Leia a mensagem e compare com os campos da base.', true);
          $('#db-results').innerHTML = '';
        } else {
          $('#db-results').innerHTML = data.results.length ? data.results.map((r, i) =>
            `<h2>Resultado ${i + 1}</h2>${table(r.columns, r.values)}<p>${r.values.length} linha(s) exibida(s)${r.truncated ? ' — limite de 200 linhas atingido' : ''}.</p>`).join('')
            : '<p>Comando executado sem tabela de resultado. Verifique os efeitos com uma consulta.</p>';
          const summary = data.results.length ? data.results.map((r) => `${r.values.length} linha(s) exibida(s): ` + JSON.stringify(r.values)).join('\n') : 'Comando executado sem tabela de resultado.';
          history.push({ sql: activeSQL, summary });
          status('Execução concluída. Compare com sua previsão e registre o teste na ficha.');
        }
        renderHistory();
      };
      worker.onerror = () => {
        clearTimeout(timer);
        enable(false);
        status('O laboratório não carregou. Use o portal publicado ou abra o pacote com Live Server.', true);
      };
      worker.postMessage({ type: 'init', sql: D.baseSQL });
    };
    $('#run-sql').addEventListener('click', () => {
      if (!ready) return;
      activeSQL = $('#sql-editor').value.trim();
      if (!activeSQL) return status('Escreva uma consulta antes de executar.', true);
      if (activeSQL.length > 20000) return status('Use até 20 mil caracteres por execução.', true);
      enable(false);
      status('Executando…');
      timer = setTimeout(() => {
        history.push({ sql: activeSQL, summary: 'Tempo de execução excedido. A base foi restaurada.' });
        renderHistory();
        start();
        status('Tempo excedido. A base está sendo restaurada; o texto do editor foi mantido.', true);
      }, 4000);
      worker.postMessage({ type: 'run', sql: activeSQL });
    });
    $('#reset-db').addEventListener('click', () => {
      history = [];
      renderHistory();
      $('#db-results').innerHTML = '';
      start();
    });
    $('#save-sql').addEventListener('click', () => {
      const nome = $('#nome-lab').value.trim();
      const turma = $('#turma-lab').value.trim();
      if (!nome || !turma) return status('Informe nome e turma para identificar o arquivo SQL.', true);
      const text = ['-- DADOSLAB - 19/10/2026', '-- Nome: ' + nome, '-- Turma: ' + turma,
        '-- Consultas e histórico da sessão. Entregue este arquivo ao professor.', '',
        ...history.flatMap((h) => [h.sql, ...h.summary.split('\n').map((x) => '-- ' + x), '']),
        '-- Texto atual do editor:', $('#sql-editor').value].join('\n');
      const name = `consultas-bd-${slug(turma)}-${slug(nome)}.sql`;
      save(name, text, 'text/plain;charset=utf-8');
      status(`Download preparado: ${name}. Entregue junto do TXT da ficha durante a aula.`);
    });
    start();
  }
})();
