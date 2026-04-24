import { Router, Request, Response } from 'express';
import { Investment } from '../types';

const router = Router();

// Datos mock de inversiones argentinas
const mockInvestments: Investment[] = [
  {
    id: 'inv-001',
    type: 'Plazo Fijo',
    amount: 500000.00,
    currency: 'ARS',
    startDate: new Date('2024-04-01'),
    maturityDate: new Date('2024-07-01'),
    interestRate: 97.5,
    status: 'active',
    institution: 'Banco Galicia',
    ownerId: 'user-001',
  },
  {
    id: 'inv-002',
    type: 'FCI',
    amount: 200000.00,
    currency: 'ARS',
    startDate: new Date('2024-03-15'),
    maturityDate: new Date('2025-03-15'),
    interestRate: 85.0,
    status: 'active',
    institution: 'Fondo Delta Pesos',
    ownerId: 'user-001',
  },
  {
    id: 'inv-003',
    type: 'Bono',
    amount: 1000.00,
    currency: 'USD',
    startDate: new Date('2023-09-01'),
    maturityDate: new Date('2027-09-01'),
    interestRate: 6.25,
    status: 'active',
    institution: 'Banco Nación',
    ownerId: 'user-001',
  },
  {
    id: 'inv-004',
    type: 'Acción',
    amount: 150000.00,
    currency: 'ARS',
    startDate: new Date('2024-01-10'),
    maturityDate: new Date('2024-12-31'),
    interestRate: 0,
    status: 'active',
    institution: 'Invertir Online',
    ownerId: 'user-001',
  },
  {
    id: 'inv-005',
    type: 'Letra del Tesoro',
    amount: 300000.00,
    currency: 'ARS',
    startDate: new Date('2024-02-20'),
    maturityDate: new Date('2024-05-20'),
    interestRate: 91.0,
    status: 'matured',
    institution: 'Banco Supervielle',
    ownerId: 'user-001',
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
 * Retorna el detalle de una inversión por ID.
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
  const { type, amount, currency, startDate, maturityDate, interestRate, institution } = req.body;

  // Validaciones
  if (!type) {
    res.status(400).json({ error: 'El campo "type" es requerido' });
    return;
  }

  const validTypes = ['Plazo Fijo', 'FCI', 'Bono', 'Acción', 'Letra del Tesoro'];
  if (!validTypes.includes(type)) {
    res.status(400).json({
      error: 'Tipo de inversión inválido',
      message: `El tipo debe ser uno de: ${validTypes.join(', ')}`,
    });
    return;
  }

  if (!amount || typeof amount !== 'number' || amount <= 0) {
    res.status(400).json({
      error: 'El campo "amount" debe ser un número mayor a 0',
    });
    return;
  }

  const validCurrencies = ['ARS', 'USD'];
  if (!currency || !validCurrencies.includes(currency)) {
    res.status(400).json({
      error: 'El campo "currency" es requerido',
      message: `Debe ser uno de: ${validCurrencies.join(', ')}`,
    });
    return;
  }

  if (!institution) {
    res.status(400).json({ error: 'El campo "institution" es requerido' });
    return;
  }

  const newInvestment: Investment = {
    id: `inv-${Date.now()}`,
    type,
    amount,
    currency,
    startDate: startDate ? new Date(startDate) : new Date(),
    maturityDate: maturityDate ? new Date(maturityDate) : new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    interestRate: interestRate ?? 0,
    status: 'active',
    institution,
    ownerId: 'user-001',
  };

  mockInvestments.push(newInvestment);

  res.status(201).json({
    data: newInvestment,
    message: 'Inversión creada correctamente.',
  });
});

/**
 * DELETE /api/v1/investments/:id
 * Cierra/liquida una inversión por ID.
 */
router.delete('/:id', (req: Request, res: Response) => {
  const index = mockInvestments.findIndex((inv) => inv.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: 'Inversión no encontrada' });
    return;
  }

  const investment = mockInvestments[index];

  if (investment.status === 'liquidated') {
    res.status(400).json({ error: 'La inversión ya fue liquidada previamente' });
    return;
  }

  investment.status = 'liquidated';

  res.json({
    data: investment,
    message: 'Inversión liquidada correctamente.',
  });
});

export default router;
