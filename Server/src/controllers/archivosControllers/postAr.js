const cloudinary = require("../../utils/cloudinary");
const { Archivos } = require("../../db");

const postAr = async (titulo, arhivoPath) => {
  try {
    const archivoCloudinary = await cloudinary.uploader.upload(arhivoPath, {
      folder: "archivosPenna",
      public_id: titulo,
    });

    const { dataValues } = await Archivos.create({
      titulo,
      cloudinaryUrl: archivoCloudinary.secure_url,
    });

    return dataValues;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = postAr;
