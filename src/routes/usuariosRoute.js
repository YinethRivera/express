const express = require("express");
const {
  UsuariosGet,
  UsuariosPost,
  UsuariosPut,
  UsuariosDelete,
} = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", UsuariosGet);
router.post("/", UsuariosPost);
router.put("/:uid_usuario", UsuariosPut);
router.delete("/:uid_usuario", UsuariosDelete);

router.get("/:uid_usuario", async (req, res) => {
  const { uid_usuario } = req.params;
  try {
    const usuario = await Usuario.findByPk(uid_usuario);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
