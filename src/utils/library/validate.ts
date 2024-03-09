import { NextFunction, Request, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

const validateRequest = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.array.length) break;
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors,
    });
  };
};

const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
    errors,
  });
};

const requiredValidation = (column: string, name: string) => {
  return body(column).exists().withMessage(`${name} is required`);
};

const requiredObjectValidation = (column: string, name: string) => {
  return requiredValidation(column, name).custom((value) => {
    return Object.keys(value).length !== 0;
  });
};

export {
  requiredValidation,
  validateBody,
  requiredObjectValidation,
  validateRequest,
};
