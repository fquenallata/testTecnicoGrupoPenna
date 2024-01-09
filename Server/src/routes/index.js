const express = require("express");
const router = express.Router();

const archivos = require("./archivosRouter.js");

router.use("/archivos", archivos);

module.exports = router;
