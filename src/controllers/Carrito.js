const CarritoCompras = require("../models/carrito");

const CarritoGet = async (req, res) => {
  try {
    const carritos = await CarritoCompras.findAll();
    res.json(carritos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const CarritoPost = async (req, res) => {
  const { estado_carrito, id_usuario } = req.body;

  try {
    const newCarrito = await CarritoCompras.create({
      estado_carrito,
      id_usuario,
    });
    res.status(201).json(newCarrito);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const CarritoPut = async (req, res) => {
  const { id_carrito } = req.params;
  const { estado_carrito, id_usuario } = req.body;

  try {
    const carrito = await CarritoCompras.findByPk(id_carrito);
    if (carrito) {
      carrito.estado_carrito = estado_carrito;
      carrito.id_usuario = id_usuario;
      await carrito.save();
      res.json(carrito);
    } else {
      res.status(404).json({ message: "Carrito no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const CarritoDelete = async (req, res) => {
  const { id_carrito } = req.params;

  try {
    const carrito = await CarritoCompras.findByPk(id_carrito);
    if (carrito) {
      await carrito.destroy();
      res.json({ message: "Carrito eliminado" });
    } else {
      res.status(404).json({ message: "Carrito no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { CarritoGet, CarritoPost, CarritoPut, CarritoDelete };
