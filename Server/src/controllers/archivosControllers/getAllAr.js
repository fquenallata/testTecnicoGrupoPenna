const { Archivos } = require("../../db");
const changeFormat = require("../../utils/changeFormat");

const getAllAr = async () => {
  try {
    const allAr = await Archivos.findAll();

    const allArFormated = changeFormat(allAr);

    return allArFormated;
  } catch (error) {
    throw new Error(`Error al obtener archivos: ${error.message}`);
  }
};

module.exports = getAllAr;
