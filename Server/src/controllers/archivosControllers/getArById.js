const { Archivos } = require("../../db");
const changeFormat = require("../../utils/changeFormat");

const getArById = async (id) => {
  try {
    const archivo = await Archivos.findByPk(id);

    if (!archivo) {
      throw new Error(`No se encontró un archivo con el ID: ${id}`);
    }

    const archivoFormated = changeFormat([archivo])[0];

    return archivoFormated;
  } catch (error) {
    throw new Error(`Error al obtener archivo por ID: ${error.message}`);
  }
};

module.exports = getArById;
