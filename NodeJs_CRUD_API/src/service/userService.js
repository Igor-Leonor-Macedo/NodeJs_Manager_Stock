const usuarioRepository = require('../repository/userRepository'); // ajuste o caminho conforme sua estrutura
const userNotFound = require('../exceptions/error/userNotFound');
const userAlreadyExists      = require('../exceptions/error/userAlreadyExists');
const theFieldNotNull     = require('../exceptions/error/theFieldNotNull');

function criarUsuario(nome, phoneNumber) {
    if (!nome) throw new theFieldNotNull('nome');
    if (!phoneNumber) throw new theFieldNotNull('phoneNumber');

    const existente = usuarioRepository.buscarPorEmail(phoneNumber);
    if (existente) throw new userAlreadyExists();

    const id = usuarioRepository.criar(nome, phoneNumber);
    return { id, nome, phoneNumber };
}

function buscarTodos() {
    return usuarioRepository.buscarTodos();
}

function buscarPorId(id) {
    const usuario = usuarioRepository.buscarPorId(id);
    if (!usuario) throw new userNotFound();
    return usuario;
}

function atualizarUsuario(id, nome, phoneNumber) {
    if (!nome) throw new theFieldNotNull('nome');
    if (!phoneNumber) throw new theFieldNotNull('phoneNumber');
    const alteracoes = usuarioRepository.atualizar(id, nome, phoneNumber);
    if (alteracoes === 0) throw new userNotFound();
    return { id: Number(id), nome, phoneNumber };
}

function deletarUsuario(id) {
    const alteracoes = usuarioRepository.deletar(id);
    if (alteracoes === 0) throw new userNotFound();
}

module.exports = { // 👈 faltava isso
    criarUsuario,
    buscarTodos,
    buscarPorId,
    atualizarUsuario,
    deletarUsuario
};