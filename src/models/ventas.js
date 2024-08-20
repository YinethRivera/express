const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Venta = sequelize.define(
  "venta",
  {
    id_venta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_factura: {
      type: DataTypes.INTEGER,
      references: {
        model: "factura_ventas",
        key: "id_factura",
      },
      allowNull: true,
    },
    fecha_venta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "ventas",
    schema: "proyecto_final",

    timestamps: false,
  }
);

module.exports = Venta;
