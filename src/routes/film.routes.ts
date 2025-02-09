import { Router } from 'express';
import { FilmController } from '../controllers/film.controller';
import { validate } from '../middlewares/joiValidation.middleware';
import { filmIdSchema } from '../validators/film.validators';

const filmController = new FilmController();
export const filmRouter = Router();

filmRouter.get('/details/:id', validate(filmIdSchema, 'params'), filmController.getDetails);
