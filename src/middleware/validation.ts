import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";


//valida los datos de entrada y evita que lleguen datos 
// incorrectos al backend, devolviendo los errores de forma 
// limpia antes de que se procese la lógica principal.
export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
