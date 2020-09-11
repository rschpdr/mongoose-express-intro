// Importando pacote mongoose para interagir com o Mongo

const mongoose = require("mongoose");

// Exportando uma funcao que retorna um Promise. Quando essa Promise resolve, e criada uma conexao com o banco.

module.exports = function () {
  return mongoose.connect("mongodb://localhost/cats", {
    // Configuracoes padrao da conexao com o Mongo
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
// .catch(err => console.error('Error connecting to mongo', err));
