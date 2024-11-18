// src/routes/rolRoutes.js
import express from 'express';// Importa express para crear el enrutador
import { crearRol, obtenerRoles, actualizarRol, borrarRol } from '../controllers/rolController.js';
import { validacionRol } from '../middleware/validarDatos.js'; // Importa los controladores de rol
const router = express.Router(); // Crea una instancia de Router

/**
 * @swagger
 * /rol:
 *   post:
 *     summary: Crea un nuevo rol
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del rol
 *                 example: "admin"
 *               descripcion:
 *                 type: string
 *                 description: Descripción del rol
 */

/**
 * @swagger
 * /rol:
 *   get:
 *     summary: Obtiene todos los roles
 *     responses:
 *       20:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID del rol
 *                   nombre:
 *                     type: string
 *                     description: Nombre del rol
 *                   descripcion:
 *                     type: string
 *                     description: Descripción del rol
 *                   createdAt:
 *                     type: string
 *                     description: Fecha de creación del rol
 */

/**
 * @swagger
 * /rol/{id}:
 *   put:
 *     summary: Actualiza un rol por su ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del rol
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del rol
 *                 example: "admin"
 */

/**
 * @swagger
 * /rol/{id}:
 *   delete:
 *     summary: Elimina un rol por su ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del rol
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rol eliminado correctamente
 */

// Ruta para crear un nuevo rol
router.post('/', crearRol, validacionRol);

// Ruta para obtener todos los roles
router.get('/', obtenerRoles);

//4. Creamos la ruta para ACTUALIZAR un documento en la colection users
router.put("/users/:id", actualizarRol);

//5. Creamos la ruta para BORRAR UN DOCUMENTO de mi bdd en la colection users
router.delete("/users/:id", borrarRol);


// Exporta el enrutador para usarlo en otros archivos
export default router;