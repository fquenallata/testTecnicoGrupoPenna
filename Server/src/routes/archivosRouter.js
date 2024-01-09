const { Router } = require("express");
const archivosRouter = Router();

const { getArchivosById } = require("../handlers/archivosHandler");

router.get("/", getArchivosById);

module.exports = archivosRouter;
