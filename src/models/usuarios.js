const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Usuarios = sequelize.define(
  "usuarios",
  {
    uid_usuario: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
    },
    nombre_completo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    correo_electronico: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    estado_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    schema: "proyecto_final",
    timestamps: false,
  }
);

module.exports = Usuarios;
