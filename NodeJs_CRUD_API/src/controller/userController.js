// Responsável por receber a requisição HTTP e devolver a resposta.

const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.post('/', (req, res, next) => {
    try {
        const { nome, phoneNumber } = req.body;
        const usuario = userService.criarUsuario(nome, phoneNumber);
        res.status(201).json(usuario);
    } catch (err) { next(err); }
});

router.get('/', (req, res, next) => {
    try {
        res.status(200).json(userService.buscarTodos());
    } catch (err) { next(err); }
});

router.get('/:id', (req, res, next) => {
    try {
        res.status(200).json(userService.buscarPorId(req.params.id));
    } catch (err) { next(err); }
});

router.put('/:id', (req, res, next) => {
    try {
        const { nome, phoneNumber } = req.body;
        res.status(200).json(userService.atualizarUsuario(req.params.id, nome, phoneNumber));
    } catch (err) { next(err); }
});

router.delete('/:id', (req, res, next) => {
    try {
        userService.deletarUsuario(req.params.id);
        res.status(200).json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (err) { next(err); }
});

module.exports = router;