# AVALIAÇÃO NODE-EXPRESS
## TUTORIAL PARA FAZER FUNCIONAR

### 1. LISTA DE SOFTWARE NESCESSARIOS 
- Windows: https://www.microsoft.com/pt-br/software-download/windows11
- Visual Studio code: https://code.visualstudio.com/download
- Node.JS: https://nodejs.org/en/download/
- Insonmia: https://insomnia.rest/download

### 3. EXECULTANDO O PROJETO
- clone o repositório em alguma pasta usando o comando: git clone + a url desse repositório.
- Abra o teminal e instale as dependências usando o comando: npm install
- Abra o Terminal do VsCode e use o comando: npm start, para iniciar o projeto.
- Verifique se a Porta esta em 8001.
- inicie o insonmia e importe o Arquivo Insonmia(insonmia_ projeto)


### 4. ROTAS PARA TESTE DE API

- use o link http://localhost:8001 

/carrinho:<br>
GET: para buscar a lista de produtos do carrinho do usuário<br>
POST: para adicionar um item no carrinho do usuário
/carrinho/:id do produto<br>
PUT: para editar algum produto do carrinho do usuário<br>
**ao enviar a requisicao utilizar o numero do id na URL: http://localhost:8001/carrinho/:id<br>

/comentario/:id do produto:<br>
GET: para listar comentários de um produtos expecifico
**filtrar os comentarios pelo id do produto na URL: http://localhost:8001/comentario/:id

 /produtos e /promocoes<br>
 GET: Para buscar lista com todos os produtos disponíveis no e-commerce.<br>
 GET: Para buscar os produtos com desconto (os produtos com desconto são os ultimos dois da lista normal).

**produtos cadastrados com id de 1 a 10




