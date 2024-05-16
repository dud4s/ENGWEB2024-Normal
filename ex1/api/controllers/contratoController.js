const mongoose = require("mongoose");
const Contrato = require("../models/contratoModel");

// devolve a lista com todos os contratos
module.exports.list = () => {
  return Contrato.find().exec();
};

// devolve o contrato com o id fornecido
module.exports.findById = (id) => {
  return Contrato.findOne({ _id: id }).exec();
};

// devolve a lista de contratos da entidade fornecida
module.exports.findByEntidade = (entidade) => {
  return Contrato.find({ NIPC_entidade_comunicante: entidade }).exec();
};

// devolve a lista de contratos do tipo fornecido
module.exports.findByTipo = (tipo) => {
  return Contrato.find({ tipoprocedimento: tipo }).exec();
};

// devolve a lista de entidades ordenada alfabeticamente e sem repeticoes
module.exports.listEntidades = () => {
  return Contrato.distinct("entidade_comunicante").sort().exec();
};

// devolve a lista de tipos de procedimento ordenada alfabeticamente e sem repeticoes
module.exports.listTipos = () => {
  return Contrato.distinct("tipoprocedimento").sort().exec();
};

// insere um novo contrato
module.exports.insert = async (contrato) => {
  console.log(contrato);
  if (contrato._id == null) {
    throw new Error("ID is required");
  }
  const contratoExists = await Contrato.findOne({ _id: contrato._id });
  if (contratoExists) {
    throw new Error("ID already exists");
  }

  var newContrato = new Contrato(contrato);
  return newContrato.save();
};

// remove um contrato
module.exports.remove = async (id) => {
  const contratoExists = await Contrato.findOne({ _id: id });
  if (!contratoExists) {
    throw new Error("ID not found");
  }
  return Contrato.deleteOne({ _id: id });
};

// atualiza um contrato
module.exports.update = async (id, contrato) => {
  return Contrato.findOneAndUpdate({ _id: id }, contrato, { new: true });
};
