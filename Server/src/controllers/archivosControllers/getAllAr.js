const { Archivos } = require("../../db");

const getAllAr = async () => {
  try {
    return await Archivos.findAll();
  } catch (error) {
    throw new Error(`Error al obtener archivos: ${error.message}`);
  }
};

module.exports = getAllAr;
