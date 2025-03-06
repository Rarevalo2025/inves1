 
const Joi = require('joi');


exports.registerSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'El nombre es obligatorio',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'El correo debe ser válido',
    'any.required': 'El correo es obligatorio',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'La contraseña debe tener al menos 6 caracteres',
    'any.required': 'La contraseña es obligatoria',
  }),
});


exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});