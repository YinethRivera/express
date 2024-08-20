const FacturaVentas = require("../models/factura_ventas");
const Usuario = require("../models/usuarios"); // Asegúrate de importar el modelo Usuario si lo necesitas

const FacturaGet = async (req, res) => {
  try {
    const facturas = await FacturaVentas.findAll({
      include: [{ model: Usuario, as: "usuario" }], // Incluye la relación con Usuario
    });
    res.json(facturas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const FacturaPost = async (req, res) => {
  const { estado_factura, fecha_pedido, id_usuario, precio_total } = req.body;

  try {
    const newFactura = await FacturaVentas.create({
      estado_factura,
      fecha_pedido,
      id_usuario,
      precio_total,
    });
    res.status(201).json(newFactura);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const FacturaPut = async (req, res) => {
  const { id_factura } = req.params;
  const { estado_factura, fecha_pedido, id_usuario, precio_total } = req.body;

  try {
    const factura = await FacturaVentas.findByPk(id_factura);
    if (factura) {
      factura.estado_factura = estado_factura;
      factura.fecha_pedido = fecha_pedido;
      factura.id_usuario = id_usuario;
      factura.precio_total = precio_total;
      await factura.save();
      res.json(factura);
    } else {
      res.status(404).json({ message: "Factura no encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const FacturaDelete = async (req, res) => {
  const { id_factura } = req.params;

  try {
    const factura = await FacturaVentas.findByPk(id_factura);
    if (factura) {
      await factura.destroy();
      res.json({ message: "Factura eliminada" });
    } else {
      res.status(404).json({ message: "Factura no encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { FacturaGet, FacturaPost, FacturaPut, FacturaDelete };
