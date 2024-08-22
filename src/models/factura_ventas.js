const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const FacturaVenta = sequelize.define(
  "factura_venta",
  {
    id_factura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado_factura: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha_pedido: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.STRING(255),
      references: {
        model: "usuarios",
        key: "uid_usuario",
      },
      allowNull: true,
    },
    id_producto: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    precio_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "factura_ventas",
    schema: "proyecto_final",
    timestamps: false,
  }
);

module.exports = FacturaVenta;
