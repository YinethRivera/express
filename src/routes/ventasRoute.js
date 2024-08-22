const express = require("express");
const {
  VentasGet,
  VentasPost,
  VentasPut,
  VentasDelete,
} = require("../controllers/ventasController");

const router = express.Router();

router.get("/", VentasGet);
router.post("/", VentasPost);
router.put("/:id_venta", VentasPut);
router.delete("/:id_venta", VentasDelete);

module.exports = router;
