const cors = require("cors");
const express = require("express");
const port = 3000;

const routerUsuarios = require("./routes/usuariosRoute");
const routerVentas = require("./routes/ventasRoute");
const routerFacturas = require("./routes/facturaVentasRoute");
const routerCarrito = require("./routes/carritoComprasRoute");
const { ConexionDB } = require("./config/database");
const loggerMiddelware = require("./middelwares/loggerMiddelware");

ConexionDB();

const app = express();
app.use(loggerMiddelware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/usuarios", routerUsuarios);
app.use("/ventas", routerVentas);
app.use("/facturas", routerFacturas);
app.use("/carrito", routerCarrito);

app.listen(port, () => {
  console.log(`Ejecutando en http://localhost:${port}`);
});
