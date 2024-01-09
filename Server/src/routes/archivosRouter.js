const express = require("express");
const router = express.Router();

const { getGenres } = require("../controllers/archivosControllers");

router.get("/", getGenres);

module.exports = router;
