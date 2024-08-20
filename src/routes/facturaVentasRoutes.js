const express = require("express");
const { FacturaGet, FacturaPost, FacturaPut, FacturaDelete } = require("../controllers/FacturasControllers");
const router = express.Router();

router.get("/factura_ventas", FacturaGet);
router.post("/factura_ventas", FacturaPost);
router.put("/factura_ventas/:id_factura", FacturaPut);
router.delete("/factura_ventas/:id_factura", FacturaDelete);

module.exports = router;
