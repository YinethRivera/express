const express = require("express");
const {
  UsuariosGet,
  UsuariosPost,
  UsuariosPut,
  UsuariosDelete,
  UsuarioGet,
} = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", UsuariosGet);
router.post("/", UsuariosPost);
router.put("/:uid_usuario", UsuariosPut);
router.delete("/:uid_usuario", UsuariosDelete);
router.get("/uid/:uid_usuario", UsuarioGet);

module.exports = router;
