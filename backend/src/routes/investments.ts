import { Router, Request, Response } from 'express';
import { Investment } from '../types';

const router = Router();

// Datos mock de inversiones (instrumentos financieros argentinos)
const mockInvestments: Investment[] = [
  {
    id: 'inv-001',
    type: 'plazo_fijo',
    name: 'Plazo Fijo 30 días — Galicia',
    amount: 500000.00,
    currency: 'ARS',
    startDate: new Date('2024-04-01'),
    maturityDate: new Date('2024-05-01'),
    interestRate: 110.00,
    annualReturn: 110.00,
    status: 'active',
    institution: 'Banco Galicia',
  },
  {
    id: 'inv-002',
    type: 'fci',
    name: 'FCI Renta Mixta — Santander',
    amount: 200000.00,
    currency: 'ARS',
    startDate: new Date('2024-03-15'),
    interestRate: undefined,
    annualReturn: 95.50,
    status: 'active',
    institution: 'Santander Argentina',
  },
  {
    id: 'inv-003',
    type: 'bono',
    name: 'Bono AL30 — Mercado Pago',
    amount: 150000.00,
    currency: 'ARS',
    startDate: new Date('2024-01-10'),
    maturityDate: new Date('2030-07-09'),
    interestRate: 8.75,
    annualReturn: 12.30,
    status: 'active',
    institution: 'Mercado Pago',
  },
  {
    id: 'inv-004',
    type: 'accion',
    name: 'YPF S.A. — YPFD',
    amount: 75000.00,
    currency: 'ARS',
    startDate: new Date('2024-02-20'),
    interestRate: undefined,
    annualReturn: 45.80,
    status: 'active',
    institution: 'Brubank',
  },
  {
    id: 'inv-005',
    type: 'letra_tesoro',
    name: 'LEDE — Letra del Tesoro',
    amount: 300000.00,
    currency: 'ARS',
    startDate: new Date('2023-09-01'),
    maturityDate: new Date('2024-03-01'),
    interestRate: 118.00,
    annualReturn: 118.00,
    status: 'matured',
    institution: 'Ualá',
  },
];

/**
 * GET /api/v1/investments
 * Lista todas las inversiones del usuario autenticado.
 */
router.get('/', (_req: Request, res: Response) => {
  res.json({
    data: mockInvestments,
    total: mockInvestments.length,
    page: 1,
    pageSize: 10,
  });
});

/**
 * GET /api/v1/investments/:id
 * Retorna el detalle de una inversión por su identificador.
 */
router.get('/:id', (req: Request, res: Response) => {
  const investment = mockInvestments.find((inv) => inv.id === req.params.id);
  if (!investment) {
    res.status(404).json({ error: 'Inversión no encontrada' });
    return;
  }
  res.json({ data: investment });
});

/**
 * POST /api/v1/investments
 * Crea una nueva posición de inversión.
 */
router.post('/', (req: Request, res: Response) => {
  const { type, name, amount, currency, startDate, maturityDate, interestRate, annualReturn, institution } = req.body;

  // Validaciones
  if (!type) {
    res.status(400).json({ error: 'El campo "type" es requerido' });
    return;
  }

  const validTypes = ['plazo_fijo', 'fci', 'bono', 'accion', 'letra_tesoro'];
  if (!validTypes.includes(type)) {
    res.status(400).json({
      error: `Tipo de inversión inválido. Valores permitidos: ${validTypes.join(', ')}`,
    });
    return;
  }

  if (!amount || typeof amount !== 'number' || amount <= 0) {
    res.status(400).json({ error: 'El campo "amount" debe ser un número mayor a cero' });
    return;
  }

  if (!institution) {
    res.status(400).json({ error: 'El campo "institution" es requerido' });
    return;
  }

  const newInvestment: Investment = {
    id: `inv-${Date.now()}`,
    type: type as Investment['type'],
    name: name || `${type} — ${institution}`,
    amount,
    currency: currency || 'ARS',
    startDate: startDate ? new Date(startDate) : new Date(),
    maturityDate: maturityDate ? new Date(maturityDate) : undefined,
    interestRate: interestRate ?? undefined,
    annualReturn: annualReturn ?? interestRate ?? 0,
    status: 'active',
    institution,
  };

  res.status(201).json({
    data: newInvestment,
    message: 'Posición de inversión creada correctamente.',
  });
});

/**
 * DELETE /api/v1/investments/:id
 * Cierra o liquida una inversión existente.
 */
router.delete('/:id', (req: Request, res: Response) => {
  const investment = mockInvestments.find((inv) => inv.id === req.params.id);
  if (!investment) {
    res.status(404).json({ error: 'Inversión no encontrada' });
    return;
  }

  if (investment.status === 'liquidated') {
    res.status(409).json({ error: 'La inversión ya fue liquidada previamente' });
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
