// Responsável apenas por falar com o banco de dados.

const db = require('../database');

function criar(nome, phoneNumber) {
    const stmt = db.prepare('INSERT INTO users (nome, phoneNumber) VALUES (?, ?)');
    const result = stmt.run(nome, phoneNumber);
    return result.lastInsertRowid;
}

function buscarTodos() {
    return db.prepare('SELECT * FROM users').all();
}

function buscarPorId(id) {
    return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}

function atualizar(id, nome, phoneNumber) {
    const stmt = db.prepare('UPDATE users SET nome = ?, phoneNumber = ? WHERE id = ?');
    const result = stmt.run(nome, phoneNumber, id);
    return result.changes; // retorna 1 se atualizou, 0 se não encontrou
}

function deletar(id) {
    const result = db.prepare('DELETE FROM users WHERE id = ?').run(id);
    return result.changes; // retorna 1 se deletou, 0 se não encontrou
}

module.exports = { criar, buscarTodos, buscarPorId, atualizar, deletar };
