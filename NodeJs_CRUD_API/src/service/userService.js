// Responsável pelas regras de negócio.
// Aqui você valida, transforma dados, antes de chamar o repository.

const usuarioRepository = require('../repository/userRepository');

function criarUsuario(nome, phoneNumber) {
    if (!nome || !phoneNumber) {
        throw new Error('Nome e phoneNumber são obrigatórios');
    }

    const id = usuarioRepository.criar(nome, phoneNumber);
    return { id, nome, phoneNumber };
}

function buscarTodos() {
    return usuarioRepository.buscarTodos();
}

function buscarPorId(id) {
    const usuario = usuarioRepository.buscarPorId(id);
    if (!usuario) throw new Error('Usuário não encontrado');
    return usuario;
}

function atualizarUsuario(id, nome, phoneNumber) {
    if (!nome || !phoneNumber) throw new Error('Nome e phoneNumber são obrigatórios');
    const alteracoes = usuarioRepository.atualizar(id, nome, phoneNumber);
    if (alteracoes === 0) throw new Error('Usuário não encontrado');
    return { id: Number(id), nome, phoneNumber };
}

function deletarUsuario(id) {
    const alteracoes = usuarioRepository.deletar(id);
    if (alteracoes === 0) throw new Error('Usuário não encontrado');
}

module.exports = { criarUsuario, buscarTodos, buscarPorId, atualizarUsuario, deletarUsuario };
