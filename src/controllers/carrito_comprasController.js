const CarritoCompra = require("../models/carrito_compra");

const CarritoGet = async (req, res) => {
  try {
    const carrito = await CarritoCompra.findAll();
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const CarritoGetByUsuario = async (req, res) => {
  try {
    const { uid_usuario } = req.params;
    console.log(uid_usuario);
    const carritos = await CarritoCompra.findOne({
      where: { id_usuario: uid_usuario },
    });
    res.json(carritos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const CarritoPost = async (req, res) => {
  const { id_producto, id_usuario } = req.body;

  try {
    const nuevoCarrito = await CarritoCompra.create({
      id_producto,
      id_usuario,
    });
    res.status(200).json(nuevoCarrito);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const CarritoPut = async (req, res) => {
  const { id_carritoCompras } = req.params;
  const { id_producto } = req.body;

  try {
    const carrito = await CarritoCompra.findByPk(parseInt(id_carritoCompras));
    if (!carrito) {
      return res.status(400).json({ message: "Carrito no encontrado" });
    }

    carrito.id_producto = id_producto;

    await carrito.save();
    res.status(200).json(carrito);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const CarritoDelete = async (req, res) => {
  const { uid_carritoCompras } = req.params;

  try {
    const carrito = await CarritoCompra.findByPk(uid_carritoCompras);
    if (!carrito) {
      return res.status(400).json({ message: "Carrito no encontrado" });
    }

    await carrito.destroy();
    res.status(200).json({ message: "Carrito eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  CarritoGet,
  CarritoPost,
  CarritoGetByUsuario,
  CarritoPut,
  CarritoDelete,
};
