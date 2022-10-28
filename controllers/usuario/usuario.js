const fs = require('fs')

let usuarios = JSON.parse(fs.readFileSync('controllers/usuario/usuario.json'));


function listar() {
    resultado = usuarios.map(us => {
        return {
        id: us.id,
        nome: us.nome,
        idade: us.idade,
        cidade: us.cidade
    }})

    return JSON.stringify(resultado)
}

function buscar(id) {
    let usuario = usuarios.filter(us => us.id == id).map(us => {
        return {
        id: us.id,
        nome: us.nome,
        idade: us.idade,
        cidade: us.cidade
        }
    });
    return JSON.stringify(usuario[0])
}

function autenticar(email, senhaReq) {
    let usuario = usuarios.filter(us => us.email === email);

    if(usuario.length === 0) {
        return "Usuário não encontrado"
    }

    if(usuario[0].senha !== senhaReq) {
        return "Senha incorreta"
    }

    let token = "Y89o1" + usuario[0].senha + "ISAf3" + usuario[0].cidade
    token = token.split("").reverse().join("")

    usuarios = usuarios.map(us=>{
        if (us.id === usuario[0].id) {
            us.token = token
        }
        return us
    })
    fs.writeFileSync('controllers/usuario/usuario.json', JSON.stringify(usuarios));

    return token
}

function usuarioLogado (token) {
    let usuario = usuarios.filter(cadaUm => cadaUm.token === token)
    return usuario[0] || false
}


module.exports = {
    listar,
    buscar, 
    autenticar,
    usuarioLogado
}