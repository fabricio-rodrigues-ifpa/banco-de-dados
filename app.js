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
      ${a.id === 'aula-01' ? '<a class="button primary" href="slides.html">Abrir os slides ↗</a><a class="button primary" href="diagnostico.html">Responder ao diagnóstico ↗</a>' : a.id === 'aula-02' ? '<a class="button primary" href="slides-dml.html">Abrir slides de DML ↗</a><a class="button primary" href="Aula-02-DML-Pratica.zip" download>Baixar prática · 2 SQL ↓</a><a class="button secondary" href="bases.html">Bases SQL e importação ↗</a>' : ''}</div>
    </header>
    <div class="detail-layout"><article class="lesson-content">
      <section id="objetivos"><h2>O que vamos aprender</h2><ul>${a.objetivos.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      <div class="soft-box"><h3>Ponto de partida</h3><p>${esc(a.retomada)}</p></div></section>
      <section id="conteudo-aula">${a.secoes.map((s) => `<section><h2>${esc(s.titulo)}</h2>
        ${s.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
        ${s.tabela ? table(s.tabela[0], s.tabela.slice(1)) : ''}
        ${s.mapa ? `<ol class="dml-map">${s.mapa.map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}${s.codigo ? `<pre><code>${esc(s.codigo)}</code></pre>` : ''}${s.esperado ? `<p class="dml-expected"><strong>Conferência:</strong> ${esc(s.esperado)}</p>` : ''}</section>`).join('')}</section>
      <section id="atividade"><h2>Prática da aula</h2><ol>${a.atividade.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>
      <p><strong>Resultado esperado:</strong> ${esc(a.produto)}</p>
      ${a.id === 'aula-01' ? '<div class="detail-actions"><a class="button primary" href="laboratorio.html">Consulta opcional ↗</a><a class="button secondary" href="Pratica-Banco-de-Dados.zip" download>Projeto opcional de dois arquivos ↓</a></div>' : a.id === 'aula-02' ? '<div class="soft-box"><h3>Como começar e entregar</h3><ol><li>Baixe e extraia Aula-02-DML-Pratica.zip.</li><li>No Workbench conectado ao MySQL, abra e execute 01-base-dml.sql inteiro uma vez. Ele recria somente a tabela fictícia de treino dadoslab_dml.livros.</li><li>Confira seis registros. Abra 02-pratica-dml.sql e execute só a instrução indicada pelo professor.</li><li>Responda P1–P4 e B1–B4 no SQL; salve como aula02-dml-TURMA-NOME.sql e entregue na aula.</li></ol><p>Não há envio automático. Reimportar a base apaga as alterações dessa tabela de treino.</p></div><div class="detail-actions"><a class="button primary" href="Aula-02-DML-Pratica.zip" download>Baixar prática · 2 SQL ↓</a><a class="button secondary" href="Caderno-Aula-02-DML.pdf">Caderno de DML em PDF ↗</a><a class="button secondary" href="bases.html">Importar e explorar outras bases ↗</a></div>' : '<p>Use os arquivos de trabalho indicados pelo professor. A prática do período utiliza MySQL e Workbench; confira a conexão do laboratório.</p>'}</section>
      ${a.etapas ? `<section><h2>Etapas da aula</h2><ol>${a.etapas.map((x) => `<li>${esc(x)}</li>`).join('')}</ol></section>` : ''}
      <section id="conferencia"><h2>Checklist de conferência</h2><div class="checklist">${a.checklist.map((x) => `<label class="check-item"><input type="checkbox"><span>${esc(x)}</span></label>`).join('')}</div><p class="storage-note">As marcações não são salvas e não enviam uma entrega.</p></section>
      <section class="soft-box"><h3>Uma descoberta útil</h3><p>${esc(a.curiosidade)}</p></section>
      <section><h2>Para ir além</h2><p>${esc(a.extensao)}</p></section>
      <section id="referencias"><h2>Referências para consultar</h2>${referenceList(a.refs)}<p>${a.id === 'aula-01' ? 'Consulte depois da primeira tentativa do diagnóstico.' : 'Use os links para revisar a sintaxe e tirar dúvidas.'} Alguns materiais estão em inglês.</p></section>
      <div class="detail-actions"><a class="button secondary" href="index.html#encontros">← Voltar às aulas</a>${next ? `<a class="button primary" href="aulas.html?id=${esc(next.id)}">Próxima aula · ${esc(next.dataCurta)} →</a>` : ''}</div>
    </article><aside class="detail-aside">
      <p class="eyebrow">AULA ${esc(a.numero)} / ${esc(a.dataCurta)}</p>
      <a class="button primary" href="${a.id === 'aula-02' ? 'Caderno-Aula-02-DML.pdf' : 'Caderno-do-Estudante-BD.pdf'}">Caderno em PDF ↗</a>${a.id === 'aula-02' ? '<a class="button secondary" href="Slides-Aula-02-DML.pdf">Slides em PDF ↗</a><a class="button secondary" href="Aula-02-DML-Pratica.zip" download>Prática · dois SQL ↓</a>' : ''}
      <a class="button secondary" href="guia.html">Como usar e entregar ↗</a>
      <button class="button secondary" id="print-lesson">Imprimir esta aula</button>
      <nav class="lesson-nav" aria-label="Sumário da aula"><a href="#objetivos">Objetivos</a><a href="#conteudo-aula">Conteúdo e exemplos</a><a href="#atividade">Atividade</a><a href="#conferencia">Checklist</a><a href="#referencias">Referências com links</a></nav>
      <p class="storage-note">${esc(D.planejamento)}</p>
    </aside></div>`;
    $('#print-lesson').addEventListener('click', () => window.print());
  }

  if ($('#db-references')) $('#db-references').innerHTML = referenceList(D.referencias.map((r) => r.id));
  if ($('#db-base')) $('#db-base').innerHTML = table(['id', 'titulo', 'quantidade'], D.baseDiagnostico);

  if ($('#base-note')) $('#base-note').textContent = D.baseNota;

  if ($('#db-diagnostic')) {
    $('#db-questions').innerHTML = D.perguntas.map((q) => `<fieldset class="diagnostic-question">
      <legend>${esc(q.id)}. ${esc(q.titulo)}</legend><p>${esc(q.enunciado)}</p>
      ${q.id === '2' ? D.topicos.map(([id, title]) => `<label for="topico-${id}">${esc(title)}</label>
        <select id="topico-${id}" name="topico-${id}"><option value="">Selecione</option>
        ${D.niveis.map(([value, label]) => `<option value="${value}">${esc(label)}</option>`).join('')}</select>`).join('') :
        `${q.id === '4' ? table(['id', 'titulo', 'quantidade'], D.baseDiagnostico) : ''}
        <label class="db-label" for="resposta-${q.id}">Minha resposta</label><textarea id="resposta-${q.id}" name="${q.id}" rows="${q.id === '4' ? '4' : '2'}" placeholder="${q.id === '4' ? 'Meu SQL, explicação ou dificuldade...' : 'Resposta curta...'}"></textarea>`}
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
      const text = ['DADOSLAB - DIAGNÓSTICO BREVE DE BANCO DE DADOS',
        '19/10/2026 - Prof. Fabrício Rodrigues', 'Nome: ' + nome, 'Turma: ' + turma, '',
        ...D.perguntas.flatMap((q) => [q.id + '. ' + q.titulo, q.enunciado,
          ...(q.id === '4' ? ['Tabela livros: id | titulo | quantidade',
            ...D.baseDiagnostico.map((row) => row.join(' | '))] : []),
          ...(q.id === '2' ? D.topicos.map(([id, title]) => title + ': ' +
            (D.niveis.find(([value]) => value === data.get('topico-' + id))?.[1] || '(não informado)')) :
            [String(data.get(q.id) || '(sem resposta)')]), '']),
        'SGBD da turma: a confirmar. Entregar este TXT ao professor na aula.'].join('\n');
      const name = `diagnostico-breve-${slug(turma)}-${slug(nome)}.txt`;
      save(name, text);
      $('#diagnostic-status').textContent = `Arquivo preparado: ${name}. Confira em Downloads e entregue ao professor. Não há envio automático.`;
    });
  }

  if ($('#db-slide') && D.slides) {
    const slides = location.pathname.endsWith('slides-dml.html') ? D.slidesAula02 : D.slides;
    let index = Math.min(slides.length - 1, Math.max(0, Number(location.hash.slice(1)) - 1 || 0));
    const show = () => {
      const s = slides[index];
      const visual = s.visualId && window.DADOSLAB_SLIDES_DML?.[s.visualId];
      if (visual) {
        $('#db-slide').classList.add('dml-visual-deck');
        $('#db-slide').innerHTML = `<img class="dml-slide-image" src="${visual}" width="1280" height="720" alt="Slide ${index + 1}: ${esc(s.titulo)}. IFPA Campus Breves.">
          <div class="slide-readable"><h1>${esc(s.titulo)}</h1>${(s.texto || []).map(x => `<p>${esc(x)}</p>`).join('')}${s.codigo ? `<pre>${esc(s.codigo)}</pre>` : ''}${s.visualTabela ? table(s.visualTabela[0], s.visualTabela.slice(1)) : s.tabela ? table(s.tabela[0], s.tabela.slice(1)) : ''}</div>`;
      } else {
      $('#db-slide').innerHTML = `<p class="eyebrow">${esc(s.label || 'DADOSLAB')}</p><h1>${esc(s.titulo)}</h1>
        ${(s.texto || []).map((x) => `<p>${esc(x)}</p>`).join('')}
        ${s.tabela ? table(s.tabela[0], s.tabela.slice(1)) : ''}
        ${s.mapa ? `<ol class="dml-map">${s.mapa.map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}${s.codigo ? `<pre><code>${esc(s.codigo)}</code></pre>` : ''}${s.esperado ? `<p class="dml-expected"><strong>Conferência:</strong> ${esc(s.esperado)}</p>` : ''}`;
      }
      $('#slide-counter').textContent = `${index + 1} de ${slides.length}`;
      $('#slide-prev').disabled = index === 0;
      $('#slide-next').disabled = index === slides.length - 1;
    };
    const move = (delta) => {
      index = Math.max(0, Math.min(slides.length - 1, index + delta));
      show();
    };
    if ($('#dml-present')) {
      const main = document.querySelector('.dml-presentation');
      let previousOverflow = '';
      let previousScroll = 0;
      const setPresenting = (active) => {
        if (active) { previousOverflow = document.body.style.overflow; previousScroll = window.scrollY; }
        main.classList.toggle('is-presenting', active);
        document.body.style.overflow = active ? 'hidden' : previousOverflow;
        $('#dml-present').textContent = active ? 'Sair da apresentação' : 'Apresentar';
        $('#dml-present').setAttribute('aria-pressed', String(active));
        if (!active) window.scrollTo(0, previousScroll);
      };
      $('#dml-present').addEventListener('click', () => setPresenting(!main.classList.contains('is-presenting')));
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && main.classList.contains('is-presenting')) setPresenting(false);
      });
    }
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
      $('#db-status').textContent = `Arquivo preparado: ${name}. Copie sua tentativa na pergunta 4 e entregue somente o TXT do diagnóstico ao professor.`;
    });
  }
})();
