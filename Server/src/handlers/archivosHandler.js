const {
  getArById,
  getAllAr,
  postAr,
  updateArById,
} = require("../controllers/archivosControllers");

const getArchivosById = (req, res) => {
  try {
    const response = getArById();
    res.status(200).json({ data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllArchivos = (req, res) => {
  try {
    const response = getAllAr();
    res.status(200).json({ data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateArchivoById = (req, res) => {
  try {
    const response = updateArById();
    res.status(200).json({ data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const postArchivo = (req, res) => {
  try {
    const response = postAr();
    res.status(200).json({ data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getArchivosById,
  getAllArchivos,
  updateArchivoById,
  postArchivo,
};
