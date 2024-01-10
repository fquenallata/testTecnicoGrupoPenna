const { Router } = require("express");
const archivosRouter = Router();
const upload = require("../utils/multer");

const {
  getArchivosById,
  getAllArchivos,
  postArchivo,
  updateArchivoById,
} = require("../handlers/archivosHandler");

archivosRouter.get("/:id", getArchivosById);
archivosRouter.get("/all", getAllArchivos);
archivosRouter.put("/", updateArchivoById);
archivosRouter.post("/", upload.single("archivo"), postArchivo);

module.exports = archivosRouter;
