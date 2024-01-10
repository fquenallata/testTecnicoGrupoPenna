const { Archivos } = require("../../db");
const cloudinary = require("../../utils/cloudinary");

const updateArById = async (id, titulo, file) => {
  try {
    if (!id || (!titulo && !file)) {
      throw new Error(
        "Se requiere un ID válido y al menos uno de los siguientes: título o archivo."
      );
    }

    const archivosData = {};

    if (titulo) {
      archivosData.titulo = titulo;
    }

    if (file) {
      const archivoCloudinary = await cloudinary.uploader.upload(file.path, {
        folder: "archivosPenna",
      });
      archivosData.cloudinaryUrl = archivoCloudinary.secure_url;
      console.log(archivoCloudinary.secure_url);
    }

    await Archivos.update(archivosData, { where: { id } });

    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = updateArById;
