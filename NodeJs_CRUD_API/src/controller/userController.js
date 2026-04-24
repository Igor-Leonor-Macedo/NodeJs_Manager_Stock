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

router.get('/', (req, res) => {
    const usuarios = usuarioService.buscarTodos();
    res.status(200).json(usuarios);
});

router.get('/:id', (req, res) => {
    try {
        const usuario = usuarioService.buscarPorId(req.params.id);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(404).json({ erro: error.message });
    }
});

router.put('/:id', (req, res) => {
    try {
        const { nome, phoneNumber } = req.body;
        const usuario = usuarioService.atualizarUsuario(req.params.id, nome, phoneNumber);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

router.delete('/:id', (req, res) => {
    try {
        usuarioService.deletarUsuario(req.params.id);
        res.status(200).json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(404).json({ erro: error.message });
    }
});

module.exports = router;