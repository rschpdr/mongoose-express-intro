// Criando um roteador do Express
const router = require("express").Router();

// Importando nosso model criado previamente
const Cat = require("../models/Cat.model");

// Rota para criar um documento de gato no banco
router.get("/cat/create", async (req, res) => {
  try {
    // Criando o objeto manualmente por ora. No futuro, isso sera recebido de um formulario.
    const cat = {
      name: "   Amy  ",
      color: "Branco e cinza",
      age: 10,
      sex: "femea",
    };

    // Metodo de criacao de documentos no Mongo
    const result = await Cat.create(cat);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
});

router.get("/cat/create-many", async (req, res) => {
  try {
    const cats = [
      {
        name: "Xaninho",
        breed: "vira-lata",
        color: "Branco e preto",
        age: 3,
      },
      {
        name: "Chorao",
        breed: "frajola",
        color: "Branco e preto",
        age: 1,
      },
      {
        name: "Luna",
        breed: "vira-lata",
        color: "Preto",
        age: 1,
      },
      {
        name: "Dara",
        breed: "vira-lata",
        color: "Amarelo",
        age: 10,
      },
      {
        name: "Salsa",
        breed: "frajola",
        color: "Preto e branco",
        age: 0,
      },
    ];

    const result = await Cat.insertMany(cats);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
});

router.get("/cats", async (req, res) => {
  try {
    const result = await Cat.find();

    // Apos receber a lista de documentos do banco, repassamos ela para a view do hbs e retornamos a resposta para o navegador
    res.render("catList", { cats: result });
  } catch (err) {
    console.error(err);
    res.send("<h1>Internal server error</h1>");
  }
});

router.get("/cat/update", async (req, res) => {
  try {
    const result = await Cat.updateOne(
      { _id: "5f5baf501296573374cd884a" },
      { $set: { name: "Otacilio" } }
    );

    console.log(result);
  } catch (err) {
    console.error(err);
  }
});

router.get("/cat/delete", async (req, res) => {
  try {
    const result = await Cat.deleteMany({ name: "Dara" });

    console.log(result);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
