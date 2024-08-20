const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");
const Usuario = require("./usuarios");

const FacturaVentas = sequelize.define(
  "FacturaVenta",
  {
    id_factura: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    estado_factura: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    fecha_pedido: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.STRING(255),
      references: {
        model: Usuario,
        key: "uid_usuario",
      },
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

// Definir la relación entre FacturaVenta y Usuario
FacturaVentas.belongsTo(Usuario, { foreignKey: "id_usuario" });

module.exports = FacturaVentas;
