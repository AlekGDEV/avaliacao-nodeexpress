const fs = require('fs');

let carrinho = JSON.parse(fs.readFileSync(__dirname + "/carrinho.json"));

function addCarrinho(dados) {

    let identificadores = carrinho.map(item => item.id);
    // let novoId = Math.max(...identificadores) + 1;
    let novoId = identificadores.length + 1;

    let novoItem = {
        id: novoId,
        produto: dados.produto,
        quantidade: dados.quantidade,
    }
    carrinho.push(novoItem);
    fs.writeFileSync(__dirname + '/carrinho.json', JSON.stringify(carrinho));
    return novoItem;
}

function editarItemCarrinho(dados) {
    const itemModificado = {}
    carrinho.map((cada_item) => {
    if (cada_item.id == dados.id) {
        if (dados.produto) {
            dados.produto == cada_item.produto
        }
        if (dados.quantidade) {
            dados.quantidade == cada_item.quantidade
        }

        itemModificado = cada_item
        
    }



    }) 

    return itemModificado
    
}

module.exports = {
    addCarrinho,
    editarItemCarrinho
}