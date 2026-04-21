import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretjwt';

// Extiende la interfaz de Request para incluir el usuario autenticado
declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

/**
 * Middleware de autenticación JWT.
 * Verifica el token en el header Authorization: Bearer <token>
 */
const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      error: 'No autorizado',
      message: 'Se requiere token de autenticación (Authorization: Bearer <token>)',
    });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({
      error: 'Token inválido',
      message: 'El token JWT es inválido o ha expirado',
    });
  }
};

export default authMiddleware;
