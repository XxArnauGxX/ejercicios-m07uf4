import { Router } from 'express';
import { viajeController } from '../controllers/viaje.controller';
import { validate } from '../middlewares/joiValidation.middleware';
import { viajeSchema } from '../validators/viaje.validators';

const router = Router();

// CRAER
router.post('/', validate(viajeSchema, 'body'), (req, res) => viajeController.create(req, res));

// LEER
router.get('/', (req, res) => viajeController.getAll(req, res));

// LEER by ID
router.get('/:id', (req, res) => viajeController.getById(req, res));

// ACTUALIZAR
router.put('/:id', validate(viajeSchema, 'body'), (req, res) => viajeController.update(req, res));

// ELIMNAR
router.delete('/:id', (req, res) => viajeController.delete(req, res));

export default router;
