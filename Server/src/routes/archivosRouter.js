const { Router } = require("express");
const archivosRouter = Router();

const {
  getArchivosById,
  getAllArchivos,
  postArchivo,
  updateArchivoById,
} = require("../handlers/archivosHandler");

archivosRouter.get("/", getArchivosById);
archivosRouter.get("/all", getAllArchivos);
archivosRouter.post("/", postArchivo);
archivosRouter.put("/", updateArchivoById);

module.exports = archivosRouter;
