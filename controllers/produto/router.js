const express = require("express");
const route = express.Router();

const produto = require("./produto");

route.get("/produto", (req, res) => {
  res.send(produto.listar());
});

route.get("/promocoes", (req, res) => {
  res.send(produto.listPromo());
});
