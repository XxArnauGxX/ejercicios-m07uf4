import Joi from 'joi';

export const filmIdSchema = Joi.object({
  id: Joi.string().required(),
});

export const filmListSchema = Joi.object({
  start: Joi.number().integer().min(0),
  end: Joi.number().integer().min(0),
}).with('start', 'end').with('end', 'start');