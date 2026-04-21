import { Router, Request, Response } from 'express';
import { Payment } from '../types';

const router = Router();

// POST /initiate — iniciar un pago
router.post('/initiate', (req: Request, res: Response) => {
  const { amount, currency, debtorCbu, creditorCbu, creditorName, description } = req.body;

  const payment: Payment = {
    id: `pay-${Date.now()}`,
    amount: amount || 1000.00,
    currency: currency || 'ARS',
    debtorCbu: debtorCbu || '0070000020000000000001',
    creditorCbu: creditorCbu || '0290000030000000000099',
    creditorName: creditorName || 'Destinatario de prueba',
    description: description || 'Pago iniciado via Open Banking',
    status: 'pending',
    consentId: `con-${Date.now()}`,
    createdAt: new Date(),
  };

  res.status(201).json({
    data: payment,
    message: 'Pago iniciado correctamente. Pendiente de autorización.',
  });
});

// GET /:id/status — estado de un pago
router.get('/:id/status', (req: Request, res: Response) => {
  // Datos mock del estado del pago
  const paymentStatus = {
    id: req.params.id,
    status: 'completed',
    amount: 1000.00,
    currency: 'ARS',
    executedAt: new Date(),
    transactionId: `txn-${Date.now()}`,
  };

  res.json({ data: paymentStatus });
});

export default router;
