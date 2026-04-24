class ErrorResponse {
    constructor(status, mensagem) {
        this.timestamp = new Date().toISOString();
        this.status = status;
        this.mensagem = mensagem;
    }
}

module.exports = ErrorResponse;