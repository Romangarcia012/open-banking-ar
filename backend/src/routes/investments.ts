import { Router, Request, Response } from 'express';
import { Investment } from '../types';

const router = Router();

// Datos mock de inversiones
const mockInvestments: Investment[] = [
  {
    id: 'inv-001',
    type: 'Plazo Fijo',
    name: 'PF Galicia 30d',
    institution: 'Banco Galicia',
    amount: 50000,
    currency: 'ARS',
    interestRate: 72,
    annualReturn: 72,
    startDate: '2026-03-25',
    maturityDate: '2026-04-24',
    status: 'active',
  },
  {
    id: 'inv-002',
    type: 'FCI',
    name: 'FCI Mercado Pago',
    institution: 'Mercado Pago',
    amount: 150000,
    currency: 'ARS',
    interestRate: 85,
    annualReturn: 85,
    startDate: '2026-01-01',
    maturityDate: null,
    status: 'active',
  },
  {
    id: 'inv-003',
    type: 'Cedear',
    name: 'AAPL Cedear',
    institution: 'Balanz',
    amount: 120000,
    currency: 'ARS',
    interestRate: null,
    annualReturn: 15.4,
    startDate: '2025-11-01',
    maturityDate: null,
    status: 'active',
  },
  {
    id: 'inv-004',
    type: 'Bono',
    name: 'AL30 Bono Soberano',
    institution: 'IOL',
    amount: 100000,
    currency: 'ARS',
    interestRate: null,
    annualReturn: 9.1,
    startDate: '2025-09-15',
    maturityDate: null,
    status: 'active',
  },
];

// GET / — listar inversiones del usuario
router.get('/', (_req: Request, res: Response) => {
  res.json({
    data: mockInvestments,
    total: mockInvestments.length,
    page: 1,
    pageSize: 10,
  });
});

// GET /:id — detalle de una inversión
router.get('/:id', (req: Request, res: Response) => {
  const investment = mockInvestments.find((i) => i.id === req.params.id);
  if (!investment) {
    res.status(404).json({ error: 'Inversión no encontrada' });
    return;
  }
  res.json({ data: investment });
});

// POST / — crear una nueva inversión
router.post('/', (req: Request, res: Response) => {
  const { type, name, institution, amount, currency, interestRate, annualReturn, startDate, maturityDate } = req.body;

  if (!type) {
    res.status(400).json({ error: 'El campo "type" es requerido' });
    return;
  }
  if (!name) {
    res.status(400).json({ error: 'El campo "name" es requerido' });
    return;
  }
  if (!institution) {
    res.status(400).json({ error: 'El campo "institution" es requerido' });
    return;
  }
  if (amount == null || amount <= 0) {
    res.status(400).json({ error: 'El monto debe ser mayor a cero' });
    return;
  }
  if (!startDate) {
    res.status(400).json({ error: 'El campo "startDate" es requerido' });
    return;
  }

  const investment: Investment = {
    id: `inv-${Date.now()}`,
    type,
    name,
    institution,
    amount,
    currency: currency || 'ARS',
    interestRate: interestRate ?? null,
    annualReturn: annualReturn || 0,
    startDate,
    maturityDate: maturityDate || null,
    status: 'active',
  };

  res.status(201).json({
    data: investment,
    message: 'Inversión creada correctamente.',
  });
});

// DELETE /:id — liquidar una inversión
router.delete('/:id', (req: Request, res: Response) => {
  const investment = mockInvestments.find((i) => i.id === req.params.id);
  if (!investment) {
    res.status(404).json({ error: 'Inversión no encontrada' });
    return;
  }

  const liquidated: Investment = {
    ...investment,
    status: 'liquidated',
  };

  res.json({
    data: liquidated,
    message: 'Inversión liquidada correctamente.',
  });
});

export default router;
