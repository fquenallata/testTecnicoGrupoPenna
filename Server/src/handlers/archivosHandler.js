const {
  getArById,
  getAllAr,
  postAr,
  updateArById,
} = require("../controllers/archivosControllers");

const getArchivosById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getArById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllArchivos = async (req, res) => {
  try {
    const response = await getAllAr();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateArchivoById = async (req, res) => {
  try {
    const { id, titulo } = req.body;
    console.log(titulo);
    const response = await updateArById(id, titulo, req.file);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const postArchivo = async (req, res) => {
  try {
    const { titulo } = req.body;
    if (!req.file) {
      throw new Error("Porfavor selecione una imagen para subir");
    }
    const response = await postAr(titulo, req.file.path);
    res.status(200).json(response);
  } catch (error) {
    res.status(422).json({ message: error.message });
  }
};

module.exports = {
  getArchivosById,
  getAllArchivos,
  updateArchivoById,
  postArchivo,
};
