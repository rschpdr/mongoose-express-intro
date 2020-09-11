// Importando express para nosso arquivo
const express = require("express");

// Biblioteca de resolucao de caminhos de arquivo relativos do Node
const path = require("path");

// Nosso arquivo de rotas do Express
const router = require("./routes/cats.routes");

// A funcao para conectar no Mongo
const connect = require("./config/db.config");

// A porta que nosso servidor Express vai escutar por requisicoes
const PORT = 3001;

// Instanciando um novo App do Express
const app = express();

// Configurando o Express para retornar HTML atraves do Handlebars
app.set("view engine", "hbs");

// Configurando para servidor conteudo estatico a partir da pasta public
app.use(express.static(path.resolve(__dirname, "public")));

// Configurando o Express para procurar por arquivos de view na pasta views
app.set("views", path.resolve(__dirname, "views"));

// Configurando o Express para reencaminhar todas as requisicoes para o roteador
app.use("/", router);

// IIFE que executa a conexao com o banco
(async function connectToDB() {
  try {
    const connection = await connect();

    console.log(connection.connections[0].name);

    // Caso a conexao tenha sido bem sucedida, inicializar o servidor web
    app.listen(PORT, () =>
      console.log(`Server up and running at port ${PORT}`)
    );
  } catch (err) {
    console.error("FAILED TO CONNECT TO MONGODB", err);
  }
})();
