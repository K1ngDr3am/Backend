import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Cars } from "../entities/Cars"

const CarsRepository = AppDataSource.getRepository(Cars);

// GET - Obtener Todos los Autos
export const getAllCars = async(red: Request, res: Response) => {
    try {
      const Cars = await CarsRepository.find();
      res.json(Cars);
    } catch(error) {
      res.status(500).json({ message: "Error al obtener productos." });
    }
  };

// GET by ID - Obtener Auto por ID
export const getCarsById = async(req: Request, res: Response) => {
    try {
        const Cars = await CarsRepository.findOneBy({
          id: parseInt(req.params.id),
        });
    
        if(Cars) {
          res.json(Cars);
        } else {
          res.status(404).json({ message: " no encontrado" });
        }
      } catch(error) {
        res.status(500).json({ message: "Error al obtener el Auto." });
      }
    };

// POST - Crear un nuevo lugar para el Auto

export const createCars = async(req: Request, res: Response) => {
    try {
        const { name, description, price } = req.body;
        const cars = new Cars();
        cars.type = name;
        cars.description = description;
        cars.price = price;

        await CarsRepository.save(cars);
        res.status(201).json(Cars);
    } catch(error) {
        res.json(500).json({ message: "Error al crear el lugar del auto"})
    }
};

// PUT - Actualizar un Auto existente
export const updateCars = async(req: Request, res: Response) => {
    try {
        const { name, description, price } = req.body;
        const Cars = await CarsRepository.findOneBy({
          id: parseInt(req.params.id),
        });
    
        if(Cars) {
          Cars.type = name ?? Cars.type;
          Cars.description = description ?? Cars.description;
          Cars.price = price ?? Cars.price;
    
          await CarsRepository.save(Cars);
          res.json(Cars);
        } else {
          res.status(404).json({ message: "Auto no encontrado" });
        }
      } catch(error) {
        res.status(500).json({ message: "Error al actualizar el Auto." });
      }
    };

// DELETE - Borrar un Auto
export const deleteCars = async(req: Request, res: Response) => {
    try {
        const Cars = await CarsRepository.findOneBy({
            id: parseInt(req.params.id),
        });

        if (Cars) {
            await CarsRepository.remove(Cars);
            res.json({ message: "Auto eliminado" });
        } else {
            res.status(404).json({ message: "Auto no encontrado"});
        }
    } catch(error) {
        res.status(500).json({ message: "Error al eliminar el Auto"})
    }
};
