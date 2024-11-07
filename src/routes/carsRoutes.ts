import { Router } from "express"
import {
    getAllCars,
    getCarsById,
    createCars,
    updateCars,
    deleteCars,
} from "../controllers/CarsControllers"

const carsRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: CRUD relacionado con autos
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *      summary: Obtener todos los autos
 *      tags: [Autos]
 *      responses:
 *        200:
 *          description: Lista de autos
 */
carsRoutes.get("/", getAllCars);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Autos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Detalles del producto
 *       404:
 *         description: Producto no encontrado
 */
carsRoutes.get("/:id", getCarsById);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crear un nuevo auto
 *     tags: [Autos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto creado
 *       500:
 *         description: Error en el servidor
 */
carsRoutes.post("/", createCars);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Actualizar un auto existente
 *     tags: [Autos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del auto
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Auto actualizado
 *       404:
 *         description: Auto no encontrado
 *       500:
 *         description: Error en el servidor
 */
carsRoutes.put("/:id", updateCars);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Eliminar un auto
 *     tags: [Autos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
carsRoutes.delete("/:id", deleteCars);

export default carsRoutes;