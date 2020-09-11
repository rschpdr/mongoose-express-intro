const { Schema, model } = require("mongoose");

// Schema - serie de regras que devem ser seguidas para a criacao do documento

const CatSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
  breed: { type: String, default: "SRD" },
  color: { type: String, maxlength: 50 },
  age: { type: Number, min: 0, max: 30 },
  sex: { type: String, enum: ["macho", "femea"] },
});

// Model - Modelo de documentos a serem salvos no db (precisam estar de acordo com as regras do Schema)

const Cat = model("Cat", CatSchema);

module.exports = Cat;
