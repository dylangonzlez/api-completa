// src/controllers/rolController.js
import rolSchema from "../models/Rol.js";// Importa el modelo de Rol
import { validatorHandler } from "../middleware/validator.handler.js";
import {
    createRolSchema,
    getRolSchema,
    updateRolSchema,
    deleteRolSchema,
} from "../validators/rolvalidador.js";

//   res.send("Esta ruta esta pensada para crear un usuario nuevo");
export const crearRol = [
  validatorHandler(createRolSchema, "body"),
  async (req, res) => {
    const user = new userSchema(req.body);
    await user
      .save()
      .then((data) => res.status(201).json(data)) // Cambio el código de estado a 201 para indicar que se creó un nuevo recurso
      .catch((error) => res.status(500).json({ message: error.message })); // Asegúrate de enviar `error.message` para obtener un mensaje más claro
  },
];

export const obtenerRoles = (req, resp) => {
  rolSchema
    .find() //Metodo usado para buscar todos los docs de una coleccion
    .then((data) => resp.json(data))
    .catch((error) => resp.json({ message: error }));
};

export const getUserById = [
  validatorHandler(getRolSchema, "params"),
  async (req, resp) => {
    const { id } = req.params;
    try {
      const user = await RolSchema.findById(id); //Metodo usado para buscar un documento de una coleccion
      if (!user) {
        return resp.status(404).json({
          message: "Usuario no encontrado",
        });
      }
      resp.json(user);
    } catch (error) {
      resp.status(500).json({
        message: error.message,
      });
    }
  },
];

export const actualizarRol = [
  validatorHandler(getRolSchema, "params"),
  validatorHandler(updateRolSchema, "body"),
  async (req, resp) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
      const rolUpdate = await RolSchema.updateOne(
        { _id: id },
        { $set: { nombre, descripcion } }
      );
      if (rolUpdate.matchedCount === 0) {
        return resp.status(404).json({ message: "Usuario no encontrado" });
      }
      if (rolUpdate.modifiedCount === 0) {
        return resp.status(400).json({ message: "No se realizaron cambios" });
      }
      resp.status(200).json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
      resp.status(500).json({ message: error.message });
    }
  },
];

export const borrarRol = [
  validatorHandler(deleteRolSchema, "params"),

  async (req, resp) => {
    const { id } = req.params;
    try {
      const result = RolSchema.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
        resp.status(404).json({ message: "Usuario no encontrado" });
      }
      resp.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      resp.status(500).json({ message: error.message });
    }
  },
];


// Exporta los controladores
