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
  const { id_venta, id_factura, fecha_venta } = req.body;

  try {
    const NewVenta = await Venta.create({
      id_venta,
      id_factura,
      fecha_venta,
    });
    res.status(200).json(NewVenta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const VentasPut = async (req, res) => {
  const { id_venta } = req.params;
  const { id_factura, fecha_venta } = req.body;

  try {
 
    const venta = await Venta.findByPk(id_venta);

    if (!venta) {
      return res.status(400).json({ message: "Venta no encontrada" });
    }

    // Actualizar la venta
    const updatedVenta = await venta.update({
      id_factura,
      fecha_venta,
    });

    res.status(200).json(updatedVenta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const VentasDelete = async (req, res) => {
  const { id_venta } = req.params;

  try {
  
    const venta = await Venta.findByPk(id_venta);

    if (!venta) {
      return res.status(400).json({ message: "Venta no encontrada" });
    }

  
    await venta.destroy();

    res.status(200).send(); // No content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { VentasGet, VentasPost, VentasPut, VentasDelete };
