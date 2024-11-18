import Joi from 'joi';

const id = Joi.string()
  .pattern(/^[0-9a-fA-F]{24}$/)
  .required()
  .messages({
    "string.pattern.base":
      "El campo ID debe ser un ObjectId válido de 24 caracteres hexadecimales.",
    "any.required": "El campo ID es requerido.",
  });



const nombre = Joi.string()
  .min(3)
  .max(90)
  .required()
  .pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/)
  .messages({
    "string.base": "El nombre debe ser un texto",
    "string.empty": "El nombre no puede estar vacío.",
    "string.min": "El nombre debe tener al menos 3 caracteres.",
    "string.max": "El nombre no puede exceder los 90 caracteres.",
    "string.pattern.base": "El nombre solo puede contener letras y espacios.",
    "any.required": "El nombre es un campo requerido",
  });

const descripcion = Joi.string().max(255).optional().messages({
  'string.base': 'La descripción debe ser un texto',
  'string.max': 'La descripción no puede superar los 255 caracteres',
});

export const createRolSchema = Joi.object({
  nombre: Joi.string().min(3).max(30).required().messages({
    'string.base': 'El nombre debe ser un texto',
    'string.empty': 'El nombre no puede estar vacío',
    'string.min': 'El nombre debe tener al menos 3 caracteres',
    'string.max': 'El nombre no puede tener más de 30 caracteres',
    'any.required': 'El nombre es obligatorio',
  }),
  
  descripcion: Joi.string().max(255).optional().messages({
    'string.base': 'La descripción debe ser un texto',
    'string.max': 'La descripción no puede superar los 255 caracteres',
  }),

  
});

const updateRolSchema = Joi.object({
  nombre: nombre.required(),
  descripcion: descripcion.optional(),
})

const getRolSchema = Joi.object({
  id: id.required(),
})

const deleteRolSchema = Joi.object({
  id: id.required(),
})


export {  updateRolSchema, getRolSchema, deleteRolSchema };