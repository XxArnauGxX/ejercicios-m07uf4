import Joi from 'joi';

export const viajeSchema = Joi.object({
  aeropuertoOrigen: Joi.string()
    .pattern(/^[a-zA-Z\s]+$/)
    .max(10)
    .required(),
  aeropuertoDestino: Joi.string()
    .pattern(/^[a-zA-Z\s]+$/)
    .max(10)
    .required(),
  fechaSalida: Joi.date().required(),
  fechaLlegada: Joi.date().required(),
  precio: Joi.number().min(0).max(9999.99).required(),
  nombrePasajero: Joi.string()
    .pattern(/^[a-zA-Z\s]+$/)
    .max(300)
    .required(),
});
