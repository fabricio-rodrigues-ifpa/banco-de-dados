'use strict';
importScripts('sqlite.js');
let database;
self.onmessage = async ({ data }) => {
  if (data.type === 'init') {
    try {
      const SQL = await initSqlJs();
      database = new SQL.Database();
      database.run(data.sql);
      self.postMessage({ type: 'ready' });
    } catch (error) {
      self.postMessage({ type: 'fatal', error: error.message });
    }
    return;
  }
  if (data.type !== 'run' || !database) return;
  try {
    const results = [];
    let statementCount = 0;
    for (const statement of database.iterateStatements(data.sql)) {
      if (++statementCount > 50) throw new Error('Limite de 50 comandos por execução.');
      const columns = statement.getColumnNames();
      const values = [];
      let truncated = false;
      while (statement.step()) {
        if (values.length === 200) {
          truncated = true;
          break;
        }
        values.push(statement.get());
      }
      if (columns.length) results.push({ columns, values, truncated });
    }
    self.postMessage({ type: 'result', results });
  } catch (error) {
    self.postMessage({ type: 'error', error: error.message });
  }
};
