const carrinho = [{"id":1,"produto":'xeroverde',"quantidade":3,},
{"id":2,"produto":'arroz',"quantidade":3,},
{"id":3,"produto":'feijao mulatim',"quantidade":3,},
{"id":4,"produto":'carne cozida',"quantidade":3,},
{"id":5,"produto":'batata frita',"quantidade":3,},
{"id":6,"produto":'puré',"quantidade":3,},
{"id":7,"produto":'suco de mangá',"quantidade":3,},]

function buscarCarrinho(){
    return carrinho;
};

function addCarrinho(dados) {

    let identificadores = carrinho.map(item => item.id);
    let novoId = identificadores.length + 1;

    let novoItem = {
        id: novoId,
        produto: dados.produto,
        quantidade: dados.quantidade,
    }

    carrinho.push(novoItem);
    return novoItem;
}

function editarItemCarrinho(dados, id) {
    let itemModificado = {}
    carrinho.map((cadaItem) => {
        if (cadaItem.id == id){
            if (dados.produto){
                cadaItem.produto = dados.produto
            }
            if (dados.quantidade) {
                cadaItem.quantidade = dados.quantidade
            }
            itemModificado = cadaItem
        }
    }) 
    return itemModificado
}

module.exports = {
    buscarCarrinho,
    addCarrinho,
    editarItemCarrinho,
}