const express = require("express");
const route = express.Router();

const produto = require("./produto");

route.get("/promocoes", (req, res) => {
  res.send(produto.listPromo());
});





module.exports = route;