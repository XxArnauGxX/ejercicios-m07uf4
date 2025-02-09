import Joi from 'joi';

export const filmIdSchema = Joi.object({
  id: Joi.string().required(),
});

export const filmListSchema = Joi.object({
  start: Joi.number().integer().min(0),
  end: Joi.number().integer().min(0),
}).with('start', 'end').with('end', 'start');

export const filmCreateSchema = Joi.object({
  title: Joi.string()
    .alphanum()
    .min(2)
    .max(50)
    .required(),
  sinopsis: Joi.string()
    .min(2)
    .max(120)
    .required(),
  director: Joi.string()
    .pattern(/^[A-Za-z\s]+$/)
    .min(3)
    .max(20)
    .required(),
  releasedDate: Joi.date().required(),
  actors: Joi.array()
    .items(
      Joi.object({
        firstName: Joi.string()
          .pattern(/^[A-Za-z\s]+$/)
          .min(3)
          .max(20)
          .required(),
        lastName: Joi.string()
          .pattern(/^[A-Za-z\s]+$/)
          .min(3)
          .max(20)
          .required(),
      })
    )
    .required(),
});
