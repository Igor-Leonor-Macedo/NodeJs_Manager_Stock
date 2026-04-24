const AppError = require('../appError');

class theFieldNotNull extends AppError {
    constructor(campo) {
        super(`O campo '${campo}' é obrigatório`, 400);
    }
}

module.exports = theFieldNotNull;