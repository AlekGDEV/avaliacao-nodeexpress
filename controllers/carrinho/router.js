const router = require('express').Router();
const controller = require('./carrinho');

router.get('/carrinho', (req,res) =>{
    res.send(
        controller.buscarCarrinho()
    );
})

router.post('/carrinho', (req, res) => {
    
    res.send(
        controller.addCarrinho(req.body)
    );
})

router.put('/carrinho/:id', (req, res) => {
    res.send(
        controller.editarItemCarrinho(req.body, req.params.id)
    );
});

module.exports = router;