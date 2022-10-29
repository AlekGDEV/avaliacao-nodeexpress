const router = require('express').Router();
const controller = require('./carrinho');

router.get('/carrinho', (req, res) => {
    
    res.send(
        controller.buscarCarrinhoDoUsuario(req.body)
    )
})
module.exports = router;