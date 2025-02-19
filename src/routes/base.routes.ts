// Main router file that configures and combines all API routes.
// Includes middleware and error handling for the application.

import express, { Router } from 'express';
import { errorMiddleware } from '../middlewares/error.middleware';
import { userRouter } from './user.routes';
import { filmRouter } from './film.routes';
import viajeRoutes from './viaje.routes';

export const baseRouter = Router();

baseRouter.use(express.json());

baseRouter.use('/users', userRouter);
baseRouter.use('/films', filmRouter);

baseRouter.use(errorMiddleware);

baseRouter.use('/viajes', viajeRoutes);



