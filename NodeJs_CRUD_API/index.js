const globalExceptionHandler = require('./src/exceptions/globalExceptionHandler');

require('./src/entity/user'); // garante que a tabela existe

const express = require('express');
const app = express();

app.use(express.json()); // habilita leitura do corpo JSON da requisição

const usuarioController = require('./src/controller/userController');
app.use('/users', usuarioController);

app.use(globalExceptionHandler); // deve ser o último middleware

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});