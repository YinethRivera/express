const Usuario = require("../models/usuarios");

const UserGet = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

const UserPost = async (req, res) => {
  try {
    const {
      uid_usuario,
      nombre_completo,
      correo_electronico,
      telefono,
      direccion,
      estado_cuenta,
    } = req.body;

    const newUsuario = await Usuario.create({
      uid_usuario,
      nombre_completo,
      correo_electronico,
      telefono,
      direccion,
      estado_cuenta,
    });
    res.status(201).json(newUsuario);
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario" });
  }
};

const UserPut = async (req, res) => {
  try {
    const { uid_usuario } = req.params;
    const {
      nombre_completo,
      correo_electronico,
      telefono,
      direccion,
      estado_cuenta,
    } = req.body;

    const usuario = await Usuario.findByPk(uid_usuario);
    if (usuario) {
      usuario.nombre_completo = nombre_completo;
      usuario.correo_electronico = correo_electronico;
      usuario.telefono = telefono;
      usuario.direccion = direccion;
      usuario.estado_cuenta = estado_cuenta;
      await usuario.save();
      res.json(usuario);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

const UserDelete = async (req, res) => {
  try {
    const { uid_usuario } = req.params;
    const usuario = await Usuario.findByPk(uid_usuario);
    if (usuario) {
      await usuario.destroy();
      res.json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar usuario" });
  }
};

module.exports = { UserGet, UserPost, UserPut, UserDelete };
