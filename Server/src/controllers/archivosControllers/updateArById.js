const { Archivos } = require("../../db");

const updateArById = async (id, archivosData) => {
  try {
    const allowedFields = ["titulo", "cloudinaryUrl"];
    const updateFields = Object.keys(archivosData);

    const invalidFields = updateFields.filter(
      (field) => !allowedFields.includes(field)
    );

    if (invalidFields.length > 0)
      throw Error(
        `Campos de actualización inválidos: ${invalidFields.join(", ")}`
      );

    await Archivos.update(archivosData, { where: { id } });

    return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = updateArById;
