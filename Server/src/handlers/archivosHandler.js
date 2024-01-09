const { getA_ById } = require("../controllers/archivosControllers");

const getArchivosById = async (req, res) => {
  try {
    const response = await getA_ById();
    res.status(200).json({ data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getArchivosById,
};
