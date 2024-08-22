const FacturaVenta = require("../models/factura_ventas");

const FacturasGet = async (req, res) => {
  try {
    const facturas = await FacturaVenta.findAll();
    res.json(facturas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const FacturasPost = async (req, res) => {
  const {
    id_factura,
    estado_factura,
    fecha_pedido,
    id_usuario,
    id_producto,
    precio_total,
  } = req.body;

  try {
    const NewFacture = await FacturaVenta.create({
      id_factura,
      estado_factura,
      fecha_pedido,
      id_usuario,
      id_producto,
      precio_total,
    });
    res.status(200).json(NewFacture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const FacturasPut = async (req, res) => {
  const { id_factura } = req.params;
  const {
    estado_factura,
    fecha_pedido,
    id_usuario,
    id_producto,
    precio_total,
  } = req.body;

  try {
    const factura = await FacturaVenta.findByPk(id_factura);
    if (!factura) {
      return res.status(400).json({ message: "Factura no encontrada" });
    }

    await factura.update({
      estado_factura,
      fecha_pedido,
      id_usuario,
      id_producto,
      precio_total,
    });

    res.status(200).json(factura);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const FacturasDelete = async (req, res) => {
  const { id_factura } = req.params;

  try {
    const factura = await FacturaVenta.findByPk(id_factura);
    if (!factura) {
      return res.status(400).json({ message: "Factura no encontrada" });
    }

    await factura.destroy();
    res.status(200).json({ message: "Factura eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { FacturasGet, FacturasPost, FacturasPut, FacturasDelete };
