const fs = require('fs');

let carrinho = JSON.parse(fs.readFileSync(__dirname + "/carrinho.json"));

function addCarrinho(dados) {

    let identificadores = carrinho.map(item => item.id);
    let novoId = Math.max(...identificadores) + 1;

    let novoItem = {
        id: novoId,
        produto: dados.produto,
        quantidade: dados.quantidade,
    }
    carrinho.push(novoItem);
    fs.writeFileSync(__dirname + '/carrinho.json', JSON.stringify(carrinho));
    return novoItem;
}

module.exports = {
    addCarrinho
}