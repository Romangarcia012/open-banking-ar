import { Router, Request, Response } from 'express';
import accountsRouter from './accounts';
import paymentsRouter from './payments';
import consentRouter from './consent';
import authRouter from './auth';

const router = Router();

// Health check
router.get('/api/v1/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Montaje de rutas por dominio
router.use('/api/v1/accounts', accountsRouter);
router.use('/api/v1/payments', paymentsRouter);
router.use('/api/v1/consent', consentRouter);
router.use('/api/v1/auth', authRouter);

export default router;
