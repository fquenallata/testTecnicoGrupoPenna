const cloudinary = require("../../utils/cloudinary");

const postAr = async (titulo, arhivoPath) => {
  try {
    const cloudinary_image = await cloudinary.uploader.upload(arhivoPath, {
      folder: "archivosPenna",
    });

    //guardar en base de datos
    /**
     *imagen:{ 
    public_id:cloudinary_image.public_id
    url:cloudinary_image.secure_url
     }
     */

    return cloudinary_image.secure_url;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = postAr;
