const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".pdf"];
    const ext = path.extname(file.originalname).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      cb(
        new Error(
          "El formato de archivo no está soportado. Por favor, suba una imagen (jpg, jpeg, png) o un archivo PDF."
        )
      );
      return;
    }

    cb(null, true);
  },
});
