const Venta = require("../models/ventas");

const VentasGet = async (req, res) => {
  try {
    const ventas = await Venta.findAll();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const VentasPost = async (req, res) => {
  const { id_factura, fecha_venta } = req.body;

  try {
    const NewVenta = await Venta.create({
      id_factura,
      fecha_venta,
    });
    res.status(200).json(NewVenta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { VentasGet, VentasPost };
