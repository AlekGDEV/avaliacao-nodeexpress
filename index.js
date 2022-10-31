const express = require('express')
const app = express()
const port = 8001

const produtoRota = require("./controllers/produto/router.js")
const carrinhoRota = require('./controllers/carrinho/router.js');
const comentarioRouter = require("./controllers/comentarios/router.js");
const usuarioRouter = require('./controllers/usuario/router.js');



app.get('/', (req, res) => {
  res.send('A documentação da api')
})

app.use(express.json())

app.use('/', produtoRota)
app.use('/', carrinhoRota)
app.use('/', comentarioRouter)
app.use('/', usuarioRouter)




app.use((req, res) => {
  res.status(404).send("{message: rota não encontrada}")
})

app.listen(port, () => {
  console.log(`Rodando no link http://localhost:${port}`)
})