const express = require("express");
const router = express.Router();

const archivos = require("./archivos.js");

router.use("/archivos", archivos);

module.exports = router;
