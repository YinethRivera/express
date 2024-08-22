const express = require("express");
const {
  CarritoGet,
  CarritoPost,
  CarritoPut,
  CarritoDelete,
} = require("../controllers/carrito_comprasController");

const router = express.Router();

router.get("/", CarritoGet);
router.post("/", CarritoPost);
router.put("/:id_carrito", CarritoPut);
router.delete("/:id_carrito", CarritoDelete);

module.exports = router;
