const express = require("express");
const {
  CarritoGet,
  CarritoPost,
  CarritoPut,
  CarritoGetByUsuario,
  CarritoDelete,
} = require("../controllers/carrito_comprasController");

const router = express.Router();

router.get("/", CarritoGet);
router.post("/", CarritoPost);

router.put("/id/:id_carritoCompras", CarritoPut);
router.get("/uid_usuario/:uid_usuario", CarritoGetByUsuario);
router.delete("/uid/:id_carrito", CarritoDelete);

module.exports = router;
