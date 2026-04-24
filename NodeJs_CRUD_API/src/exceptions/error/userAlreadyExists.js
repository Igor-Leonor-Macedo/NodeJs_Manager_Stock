const AppError = require('../appError');

class userAlreadyExists extends AppError {
    constructor() {
        super('Usuário já cadastrado', 409);
    }
}

module.exports = userAlreadyExists;