const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Archivos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cloudinaryUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ultimaModificacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
};
