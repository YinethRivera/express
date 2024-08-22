const express = require("express");
const {
  FacturasGet,
  FacturasPost,
  FacturasPut,
  FacturasDelete,
} = require("../controllers/factura_ventasController");

const router = express.Router();

router.get("/", FacturasGet);
router.post("/", FacturasPost);
router.put("/:id_factura", FacturasPut);
router.delete("/:id_factura", FacturasDelete);

module.exports = router;
