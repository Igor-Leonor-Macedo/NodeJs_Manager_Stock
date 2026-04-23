const Database = require('better-sqlite3');

// Cria (ou abre) o banco de dados — o arquivo "banco.db" será criado automaticamente
const db = new Database('USERS');

// Cria uma tabela
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    phoneNumber TEXT NOT NULL
  )
`);

// Insere um registro
const inserir = db.prepare('INSERT INTO users (nome, phoneNumber) VALUES (?, ?)');
inserir.run('Maria Silva', '62 3878-5198');

// Busca todos os registros
const users = db.prepare('SELECT * FROM users').all();
console.log(users);