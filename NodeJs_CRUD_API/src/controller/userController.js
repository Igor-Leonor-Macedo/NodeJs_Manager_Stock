// Responsável por receber a requisição HTTP e devolver a resposta.

const express = require('express');
const router = express.Router();
const usuarioService = require('../service/userService');

router.post('/', (req, res) => {
    try {
        const { nome, phoneNumber } = req.body;
        const user = usuarioService.criarUsuario(nome, phoneNumber);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

module.exports = router;