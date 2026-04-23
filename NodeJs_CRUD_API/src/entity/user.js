// Representa a estrutura da tabela no banco.
// No Node.js não há anotações — é só um objeto que define e cria a tabela.

const db = require('../database');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    phoneNumber TEXT NOT NULL
  )
`);

module.exports = {}; // a tabela já está criada ao importar este arquivo