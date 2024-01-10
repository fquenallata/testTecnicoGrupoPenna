const { Archivos } = require("../../db");

const getArById = async (id) => {
  try {
    const archivo = await Archivos.findByPk(id);

    if (!archivo) {
      throw new Error(`No se encontró un archivo con el ID: ${id}`);
    }

    return archivo;
  } catch (error) {
    throw new Error(`Error al obtener archivo por ID: ${error.message}`);
  }
};

module.exports = getArById;
