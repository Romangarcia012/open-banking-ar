import { Router, Request, Response } from 'express';
import { Consent } from '../types';

const router = Router();

// Almacén mock de consentimientos en memoria
const consentStore: Map<string, Consent> = new Map();

// POST / — crear un nuevo consentimiento
router.post('/', (req: Request, res: Response) => {
  const { userId, permissions, expiresAt } = req.body;

  const consent: Consent = {
    id: `con-${Date.now()}`,
    userId: userId || 'user-001',
    permissions: permissions || ['READ_ACCOUNTS', 'READ_TRANSACTIONS'],
    status: 'active',
    expiresAt: expiresAt ? new Date(expiresAt) : new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    createdAt: new Date(),
  };

  consentStore.set(consent.id, consent);

  res.status(201).json({
    data: consent,
    message: 'Consentimiento creado exitosamente',
  });
});

// GET /:id — obtener un consentimiento
router.get('/:id', (req: Request, res: Response) => {
  const consent = consentStore.get(req.params.id);

  if (!consent) {
    // Devuelve datos mock si no existe en memoria
    const mockConsent: Consent = {
      id: req.params.id,
      userId: 'user-001',
      permissions: ['READ_ACCOUNTS', 'READ_TRANSACTIONS'],
      status: 'active',
      expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
    };
    res.json({ data: mockConsent });
    return;
  }

  res.json({ data: consent });
});

// DELETE /:id — revocar un consentimiento
router.delete('/:id', (req: Request, res: Response) => {
  const consent = consentStore.get(req.params.id);

  if (consent) {
    consent.status = 'revoked';
    consentStore.set(consent.id, consent);
  }

  res.json({
    message: `Consentimiento ${req.params.id} revocado exitosamente`,
    revokedAt: new Date(),
  });
});

export default router;
