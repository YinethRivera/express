const Usuario = require("../models/usuarios");

const UsuariosGet = async (req, res) => {
  try {
    const users = await Usuario.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UsuariosPost = async (req, res) => {
  const {
    uid_usuario,
    nombre_completo,
    correo_electronico,
    telefono,
    direccion,
    estado_cuenta,
  } = req.body;

  try {
    const NewUsuario = await Usuario.create({
      uid_usuario,
      nombre_completo,
      correo_electronico,
      telefono,
      direccion,
      estado_cuenta,
    });
    res.status(200).json(NewUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const UsuariosPut = async (req, res) => {
  const { uid_usuario } = req.params;
  const {
    nombre_completo,
    correo_electronico,
    telefono,
    direccion,
    estado_cuenta,
  } = req.body;

  try {
    const usuario = await Usuario.findByPk(uid_usuario);

    if (!usuario) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const updatedUsuario = await usuario.update({
      nombre_completo,
      correo_electronico,
      telefono,
      direccion,
      estado_cuenta,
    });

    res.status(200).json(updatedUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const UsuariosDelete = async (req, res) => {
  const { uid_usuario } = req.params;

  try {
    const usuario = await Usuario.findByPk(uid_usuario);

    if (!usuario) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    await usuario.destroy();

    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { UsuariosGet, UsuariosPost, UsuariosPut, UsuariosDelete };
