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

module.exports = { criarUsuario };