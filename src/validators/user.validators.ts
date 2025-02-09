// Defines Joi schemas for validating user-related requests.
// Ensures that incoming data adheres to the required structure and rules.

import Joi from 'joi';

export const userCreateSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(20).required(),
  email: Joi.string().email().min(5).max(30).required(),
});

export const userIdSchema = Joi.object({
  id: Joi.string().required(),
});

export const userUpdateSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(20).optional(),
  email: Joi.string().email().min(5).max(30).optional(),
});
