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
      ${a.id === 'aula-01' ? '<div class="detail-actions"><a class="button primary" href="laboratorio.html">Abrir a prática SQL ↗</a><a class="button secondary" href="Pratica-Banco-de-Dados.zip" download>Baixar os dois arquivos da prática ↓</a></div>' : '<p>Use o ambiente e os arquivos de trabalho indicados pelo professor para este encontro. A configuração do SGBD será confirmada em aula.</p>'}</section>
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
      + '<h3>leitores</h3>' + table(['id', 'nome', 'turma'], D.leitores)
      + '<h3>emprestimos</h3>' + table(['id', 'livro_id', 'leitor_id', 'data_emprestimo', 'data_devolucao'], D.emprestimos);
  }

  if ($('#base-note')) $('#base-note').textContent = D.baseNota;

  if ($('#db-diagnostic')) {
    const options = [
      ['', 'Selecione sua familiaridade'],
      ['nao-estudei', 'Ainda não estudei'],
      ['nao-lembro', 'Já vi, mas não lembro como resolver'],
      ['hipotese', 'Tenho uma hipótese ou resposta parcial'],
      ['justifico', 'Consigo responder e justificar']
    ];
    $('#db-questions').innerHTML = D.perguntas.map((q) => `<fieldset class="diagnostic-question">
      <legend>${esc(q.id)} / ${esc(q.area)} / ${esc(q.titulo)}</legend>
      <pre><code>${esc(q.codigo)}</code></pre><label for="resposta-${esc(q.id)}">${esc(q.enunciado)}</label>
      <textarea id="resposta-${esc(q.id)}" name="${esc(q.id)}" rows="6" placeholder="Minha explicação, resultado previsto ou SQL..."></textarea>
      <label for="familiaridade-${esc(q.id)}">Minha familiaridade com este assunto</label>
      <select id="familiaridade-${esc(q.id)}" name="familiaridade-${esc(q.id)}">${options.map(([v,t]) => `<option value="${v}">${t}</option>`).join('')}</select>
    </fieldset>`).join('');
    $('#db-practice-questions').innerHTML = D.praticas.map((t) => `<fieldset class="diagnostic-question">
      <legend>${esc(t.id)} / ${esc(t.titulo)}</legend><p>${esc(t.enunciado)}</p>
      <label for="exec-${t.id}">Condição da tentativa</label><select id="exec-${t.id}" name="exec-${t.id}">
        <option value="nao-informado">Ainda não registrei</option><option value="escrita-autonoma">Escrevi e previ o resultado com autonomia</option>
        <option value="escrita-com-apoio">Escrevi parte ou tudo com apoio</option>
        <option value="hipotese">Registrei somente uma hipótese ou previsão</option>
        <option value="nao-soube">Não soube elaborar a consulta</option></select>
      <label for="pratica-${t.id}">SQL escrito, resultado previsto, justificativa e apoio recebido</label>
      <textarea id="pratica-${t.id}" name="pratica-${t.id}" rows="8"></textarea></fieldset>`).join('');
    $('#db-diagnostic').addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const nome = String(data.get('nome') || '').trim();
      const turma = String(data.get('turma') || '').trim();
      if (!nome || !turma) {
        $('#diagnostic-status').textContent = 'Informe nome e turma antes de baixar.';
        return;
      }
      const etapa = data.get('etapa') === 'final' ? 'final' : 'inicial';
      const text = ['DADOSLAB - DIAGNÓSTICO DE CONHECIMENTOS EM BANCO DE DADOS',
        '19/10/2026 - Prof. Fabrício Rodrigues', 'Cópia: ' + etapa,
        'Nome: ' + nome, 'Turma: ' + turma, 'Experiência: ' + (data.get('experiencia') || '(sem registro)'), '',
        ...D.perguntas.flatMap((q) => [q.id + ' - ' + q.titulo, q.codigo, q.enunciado,
          'Minha resposta: ' + String(data.get(q.id) || '(sem resposta)'),
          'Familiaridade declarada: ' + (data.get('familiaridade-' + q.id) || '(não informada)'), '']),
        'PRODUÇÃO DE SQL', ...D.praticas.flatMap((t) => [t.id + ' - ' + t.enunciado,
          'Condição: ' + (data.get('exec-' + t.id) || '(não informada)'),
          String(data.get('pratica-' + t.id) || '(sem registro)'), '']),
        'APOIO RECEBIDO: ' + (data.get('apoio') || '(sem registro)'),
        'DECISÃO JUSTIFICADA E DÚVIDA: ' + (data.get('saida') || '(sem registro)')].join('\n');
      const name = `diagnostico-${etapa}-bd-${slug(turma)}-${slug(nome)}.txt`;
      save(name, text);
      $('#diagnostic-status').textContent = `Cópia ${etapa} preparada: ${name}. Confira em Downloads e entregue ao professor na aula. Não há envio automático.`;
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

  if ($('#db-practice-tasks')) {
    $('#db-practice-tasks').innerHTML = D.praticas.map((t) =>
      `<section><h3>${esc(t.id)} · ${esc(t.titulo)}</h3><p>${esc(t.enunciado)}</p></section>`).join('');
  }
  if ($('#sql-editor')) {
    $('#sql-editor').value = D.rascunhoSQL;
    $('#save-sql').addEventListener('click', () => {
      const nome = $('#nome-lab').value.trim();
      const turma = $('#turma-lab').value.trim();
      if (!nome || !turma) {
        $('#db-status').textContent = 'Informe nome e turma para identificar o SQL.';
        return;
      }
      const comments = (text) => String(text).split('\n').map((x) => '-- ' + x);
      const text = ['-- DADOSLAB - BANCO DE DADOS - 19/10/2026', ...comments('Nome: ' + nome),
        ...comments('Turma: ' + turma), ...comments('Ambiente de escrita/apoio: ' + ($('#ambiente-lab').value || 'não informado')),
        '-- SGBD a confirmar. Diagnóstico por leitura, previsão e escrita; execução não exigida.', '',
        $('#sql-editor').value, '', '-- REGISTRO DE EVIDÊNCIAS DA TENTATIVA',
        ...comments($('#sql-evidence').value || '(sem registro)')].join('\n');
      const name = `tentativa-bd-${slug(turma)}-${slug(nome)}.sql`;
      save(name, text);
      $('#db-status').textContent = `Arquivo preparado: ${name}. Entregue o SQL e os TXT da ficha ao professor.`;
    });
  }
})();
