const { Sequelize}= require("sequelize")

const sequelize = new Sequelize("Proyecto_Final", "karina", "yinethkarina", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
const ConexionDB =() =>{
    sequelize
    .sync()
    .then(()=>console.log("conectado a la base de datos"))
    .catch((err)=>console.log("error al conectar con la base de datos", err))
}

module.exports = {sequelize, ConexionDB}