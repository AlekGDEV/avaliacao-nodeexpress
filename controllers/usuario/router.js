const router = require('express').Router();
const usuarioController = require('./usuario.js');

router.get('/usuarios', (req, res) => {
    res.send(usuarioController.listar())
})

router.get('/usuarios/:id', (req, res) => {
    res.send(usuarioController.buscar(req.params.id))
});

router.post('/login', (req, res) => {
    let {email, senha} = req.body;

    res.send(usuarioController.autenticar(email, senha))
});

router.get('/me', (req, res) => {
    let token = req.headers.authorization;

    res.send(
        usuarioController.usuarioLogado(token)
    );
});


module.exports = router;