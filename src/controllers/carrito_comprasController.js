const CarritoCompra = require("../models/carrito_compras");

const CarritoGet = async (req, res) => {
  try {
    const carritos = await CarritoCompra.findAll();
    res.json(carritos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const CarritoPost = async (req, res) => {
  const { id_carrito, id_producto, id_usuario } = req.body;

  try {
    const nuevoCarrito = await CarritoCompra.create({
      id_carrito,
      id_producto,
      id_usuario,
    });
    res.status(200).json(nuevoCarrito);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const CarritoPut = async (req, res) => {
  const { id_carrito } = req.params;
  const { id_producto, id_usuario } = req.body;

  try {
    const carrito = await CarritoCompra.findByPk(id_carrito);
    if (!carrito) {
      return res.status(400).json({ message: "Carrito no encontrado" });
    }

    carrito.id_producto = id_producto;
    carrito.id_usuario = id_usuario;

    await carrito.save();
    res.status(200).json(carrito);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const CarritoDelete = async (req, res) => {
  const { id_carrito } = req.params;

  try {
    const carrito = await CarritoCompra.findByPk(id_carrito);
    if (!carrito) {
      return res.status(400).json({ message: "Carrito no encontrado" });
    }

    await carrito.destroy();
    res.status(200).json({ message: "Carrito eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { CarritoGet, CarritoPost, CarritoPut, CarritoDelete };
