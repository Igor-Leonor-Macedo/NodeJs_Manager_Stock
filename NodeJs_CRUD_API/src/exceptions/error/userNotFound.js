const AppError = require('../appError');

class userNotFound extends AppError {
    constructor() {
        super('Usuário não encontrado', 404);
    }
}

module.exports = userNotFound;