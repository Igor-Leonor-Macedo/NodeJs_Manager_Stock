// Responsável apenas por falar com o banco de dados.

const db = require('../database');

function criar(nome, phoneNumber) {
    const stmt = db.prepare('INSERT INTO users (nome, phoneNumber) VALUES (?, ?)');
    const result = stmt.run(nome, phoneNumber);
    return result.lastInsertRowid;
}

module.exports = { criar };