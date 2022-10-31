const fs = require('fs');

function listar(){
     return JSON.parse(fs.readFileSync('controllers/produto/produto.json').toString())
}

function listarPromo() {
  let desconto = 2;
  let produtos = listar();
  let promo = produtos.slice(-2, produtos.lenght).map((prod) => {
    return {
      ...prod,
      valorPromocional: prod.valor / desconto,
    };
  });
  return promo;
}

module.exports = {
  listar,
  listPromo: listarPromo,
};
