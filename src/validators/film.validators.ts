import Joi from 'joi';

export const filmIdSchema = Joi.object({
  id: Joi.string().required(),
});
