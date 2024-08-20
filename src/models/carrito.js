const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");
const Usuario = require("./usuarios");

const CarritoCompras = sequelize.define(
  "CarritoCompra",
  {
    id_carrito: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    estado_carrito: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.STRING(255),
      references: {
        model: Usuario,
        key: "uid_usuario",
      },
    },
  },
  {
    tableName: "carrito_compras",
    schema: "proyecto_final",
    timestamps: false,
  }
);

// Definir la relación entre CarritoCompra y Usuario
CarritoCompras.belongsTo(Usuario, { foreignKey: "id_usuario" });

module.exports = CarritoCompras;
