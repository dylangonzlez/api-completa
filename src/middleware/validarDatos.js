// Middleware para validar los datos de las solicitudes
import { validationResult, check } from'express-validator';

export const validarCampos = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  next();
};

export const validacionUsuario = [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'Debe ser un email válido').isEmail(),
  check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
  check('rol', 'El rol es obligatorio').not().isEmpty(),
  validarCampos,
];

export const validacionRol = [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  validarCampos,
];

export default { validacionRol, validacionUsuario };