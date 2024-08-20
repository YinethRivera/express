const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const routerUsuarios = require("../src/routes/usuariosRoutes");
const routerVentas = require("../src/routes/ventasRoutes");
const routerFacturas = require("../src/routes/facturaVentasRoutes");
const routerCarrito = require("../src/routes/carritoComprasRoutes");
const { ConexionDB } = require("./config/database");

// const { ConexionDB } = require("./src/config/database");

ConexionDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/usuarios", routerUsuarios);
app.use("/ventas", routerVentas);
app.use("/facturas", routerFacturas);
app.use("/carritos", routerCarrito);

app.listen(port, () => {
  console.log(`Ejecutando en http://localhost:${port}`);
});
