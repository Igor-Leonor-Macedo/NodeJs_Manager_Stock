const AppError          = require('./AppError');
const ErrorResponse     = require('./ErrorResponse');
const UsuarioNaoEncontrado = require('./error/userNotFound');
const UsuarioJaExiste      = require('./error/userAlreadyExists');
const CampoObrigatorio     = require('./error/theFieldNotNull');

function globalExceptionHandler(err, req, res, next) {

    // 404 — Not Found
    if (err instanceof UsuarioNaoEncontrado) {
        return res.status(404).json(new ErrorResponse(404, err.message));
    }

    // 409 — Conflict
    if (err instanceof UsuarioJaExiste) {
        return res.status(409).json(new ErrorResponse(409, err.message));
    }

    // 400 — Bad Request
    if (err instanceof CampoObrigatorio) {
        return res.status(400).json(new ErrorResponse(400, err.message));
    }

    // 500 — Internal Server Error (erro inesperado)
    console.error(err);
    return res.status(500).json(new ErrorResponse(500, 'Erro interno do servidor'));
}

module.exports = globalExceptionHandler;