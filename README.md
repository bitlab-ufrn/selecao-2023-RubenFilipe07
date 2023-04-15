## Acesso
<a href="https://detector-ofensas.web.app/">(Aplicação) https://detector-ofensas.web.app/</a> <br/>

<p>
<b>Login de administrador</b> <br/>
Email: <code>ruben@segurancaonline.com</code> <br/>
Senha: <code>SecOn2023!</code>
</p>

<a href="https://api-detector-ofensas.fly.dev/">(API) https://api-detector-ofensas.fly.dev/</a>

<p>

Key: <code>api-key</code> <br/>
Value: <code>JhQwXXztY1s5OsSKgj3mMoJ</code>

Visualize com: </br>
<a href="https://www.postman.com">
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"/>
</a> 
</p>

## Contexto
Para resolver o problema de um de seus clientes e também vender seu produto para novos clientes, a empresa Segurança Online criou um sistema de detecção de palavras impróprias, com capacidade de detectar até mesmo palavras que possuam caracteres especiais e acentos. Além disso, o sistema conta com um gerenciamento dinâmico das palavras armazenadas no banco de dados, permitindo que qualquer administrador logado possa visualizar, criar, alterar ou remover as palavras.

![demo_remover](https://user-images.githubusercontent.com/53026536/232175798-ae7bc908-2a28-4fff-a264-efa3549d7763.gif)  ![demo_caracteres](https://user-images.githubusercontent.com/53026536/232175581-f6d66e8c-7e52-4c27-9ec1-59d8b75699b3.gif) 

## Desafio
<a href="https://github.com/bitlab-ufrn/selecao-2023-RubenFilipe07/blob/main/DESAFIO.md">DESAFIO.md</a>
  
<h3>Como instalar o projeto</h3>

<ol>
  <li>Clone o repositório com o comando: <code>git clone https://github.com/bitlab-ufrn/selecao-2023-RubenFilipe07/</code> </li>
</ol>

<h5>Para rodar o projeto React</h5>
<ol>
  <li>Certifique-se de ter o node.js instalado na sua máquina, caso não tenha, baixe aqui: <a href="https://nodejs.org/en/">nodejs.org</a></li>
  <li>Na raiz do projeto <code>/detector-ofensas</code> digite <code>npm i</code> no terminal para baixar as dependências</li>
  <li>Digite <code>npm run dev</code> para iniciar o servidor e o acesse pelo link: <code>http://localhost:8080/</code></li>
</ol>

<h5>arquivo .ENV</h5>
<code>API_KEY:</code>: Chave de autenticação que autoriza a utilização da API.<br/>
<code>VITE_API_KEY :</code>: Chave de autenticação autoriza o request da API do lado do cliente.<br/>
<code>DATABASE_URL</code>:  URL que faz conexão com banco de dados. <br/>
<code>JWT_SECRET</code>:  Uma chave secreta usada para assinar tokens JWT (JSON Web Tokens) usados para autenticar usuários. <br/>

<h5>Para rodar o projeto Node</h5>
<ol>
  <li>Na raiz do projeto em  <code>/backend</code>  execute<code>npm i</code> para instalar as dependências</li>
  <li>Crie um arquivo .ENV e adicione as variáveis de ambiente (descritas acima)</li>
  <li>Instale o PostgreSQL.js: <a href="https://www.postgresql.org/download/">postgresql.org</a> </li>
  <li>Execute <code>node index.js</code> para iniciar a aplicação</li>
  <li>O projeto rodará em: <code>https://localhost:8080/</code></li>
</ol>
  
<h3>Endpoints</h3>
<code>GET /adiciona-palavras-arquivo:</code> lê um arquivo bd_seed.txt que contém uma lista de palavras ofensivas e adiciona cada uma delas no banco de dados.  <br/>
<code>POST /palavras-ofensivas:</code> adiciona uma nova palavra à tabela palavras_ofensivas no banco de dados. <br/>
<code>GET /palavras-ofensivas:</code> retorna todas as palavras ofensivas cadastradas na tabela palavras_ofensivas no banco de dados. <br/>
<code>GET /palavras-ofensivas/:id:</code> retorna a palavra cujo ID é especificado na URL da requisição. <br/>
<code>DELETE /palavras-ofensivas/:id:</code> exclui a palavra cujo ID é especificado na URL da requisição. <br/>
<code>PUT /palavras-ofensivas/:id:</code> atualiza a palavra cujo ID é especificado na URL da requisição.  <br/>
<code>POST /cadastro-admin:</code> cadastra um novo administrador na tabela admins do banco de dados.  <br/>
<code>POST /login-admin:</code> autentica um administrador a partir de seu email e senha.  <br/>
<code>POST /verifica-texto:</code> verifica se um texto contém alguma palavra ofensiva. 
  
  
## Tecnologias utilizadas

<h3>Front-end</h3>


  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  </a> <br/>
  
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React.jS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  </a> <br/>
  
  <a href="https://reactrouter.com/en/main">
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  </a> <br/>
  
  <a href="https://axios-http.com/docs/intro">
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  </a> <br/>
 
  <a href="https://ant.design">
    <img src="https://img.shields.io/badge/Ant%20design-007DB8?style=for-the-badge&logo=antdesign&logoColor=white" />
  </a> <br/>
  
  <a href="https://ant.design/docs/spec/icon">
    <img src="https://img.shields.io/badge/Ant%20design%20Icons-007DB8?style=for-the-badge&logo=antdesign&logoColor=white" />
  </a> <br/>

 <h3>Back-end</h3>

<a href="https://nodejs.org/">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
</a> <br/>

<a href="https://expressjs.com/">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
</a> <br/>

<a href="https://www.npmjs.com/package/jsonwebtoken">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"/>
</a> <br/>


<a href="https://www.npmjs.com/package/cors">
  <img src="https://img.shields.io/badge/Cors-000000?style=for-the-badge"/>
</a> <br/>

<a href="https://www.npmjs.com/package/dotenv">
  <img src="https://img.shields.io/badge/dotenv-000000?style=for-the-badge"/>
</a> <br/>

 <h3>Banco de dados</h3>
 
  <a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  </a> <br/>
   

 <h3>Hospedagem</h3>
 
  <a href="https://firebase.google.com/">
    <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
  </a> <br/>
  
  <a href="https://fly.io/">
    <img src="https://img.shields.io/badge/Fly.IO-9c31e2?style=for-the-badge" />
  </a> <br/>
  
 
