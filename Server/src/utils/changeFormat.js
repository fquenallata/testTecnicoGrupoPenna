const moment = require("moment");

const changeFormat = (arArray) => {
  if (arArray.length) {
    arArray = arArray.map((archivo) => {
      const { ultimaModificacion, ...archivoProps } = archivo.toJSON();
      const newFormat = moment(ultimaModificacion).format("DD/MM/YYYY HH:mm");
      return {
        ...archivoProps,
        ultimaModificacion: newFormat,
      };
    });
  }
  return arArray;
};

module.exports = changeFormat;
