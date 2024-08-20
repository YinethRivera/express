const express = require("express");
const { CarritoGet, CarritoPost, CarritoPut, CarritoDelete } = require("../controllers/Carrito");
const router = express.Router();

// Rutas para CarritoCompras
router.get("/carrito_compras", CarritoGet);
router.post("/carrito_compras", CarritoPost);
router.put("/carrito_compras/:id_carrito", CarritoPut);
router.delete("/carrito_compras/:id_carrito", CarritoDelete);

module.exports = router;
