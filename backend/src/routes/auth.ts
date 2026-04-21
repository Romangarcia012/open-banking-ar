import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types';

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretjwt';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '3600';

// Almacén mock de tokens revocados
const revokedTokens = new Set<string>();

// POST /token — emitir token JWT (mock)
router.post('/token', (req: Request, res: Response) => {
  const { clientId, clientSecret, scope } = req.body;

  // Validación básica mock
  if (!clientId) {
    res.status(400).json({ error: 'client_id requerido' });
    return;
  }

  const payload: TokenPayload = {
    sub: `user-${Date.now()}`,
    clientId: clientId || 'default-client',
    scope: scope || 'accounts:read payments:write',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + parseInt(JWT_EXPIRES_IN, 10),
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: parseInt(JWT_EXPIRES_IN, 10) });

  res.json({
    access_token: token,
    token_type: 'Bearer',
    expires_in: parseInt(JWT_EXPIRES_IN, 10),
    scope: payload.scope,
  });
});

// POST /authorize — endpoint de autorización OAuth (mock)
router.post('/authorize', (req: Request, res: Response) => {
  const { responseType, clientId, redirectUri, scope, state } = req.body;

  if (!clientId || !redirectUri) {
    res.status(400).json({ error: 'client_id y redirect_uri son requeridos' });
    return;
  }

  // Genera código de autorización mock
  const authCode = `code-${Date.now()}-${Math.random().toString(36).substring(2)}`;

  res.json({
    code: authCode,
    state: state || '',
    redirectUri,
    message: 'Código de autorización generado. Usar para obtener access_token.',
  });
});

// POST /revoke — revocar un token
router.post('/revoke', (req: Request, res: Response) => {
  const { token } = req.body;

  if (!token) {
    res.status(400).json({ error: 'token requerido' });
    return;
  }

  revokedTokens.add(token);

  res.json({ message: 'Token revocado exitosamente' });
});

export { revokedTokens };
export default router;
