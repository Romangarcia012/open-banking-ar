import { Router, Request, Response } from 'express';
import { Transfer } from '../types';

const router = Router();

// Datos mock de transferencias argentinas
const mockTransfers: Transfer[] = [
  {
    id: 'trf-001',
    amount: 15000.00,
    currency: 'ARS',
    originCbu: '0070000020000000000001',
    destinationCbu: '0290000030000000000099',
    destinationName: 'María González',
    description: 'Alquiler marzo',
    status: 'completed',
    createdAt: new Date('2024-05-03T10:30:00'),
    completedAt: new Date('2024-05-03T10:30:45'),
  },
  {
    id: 'trf-002',
    amount: 5000.00,
    currency: 'ARS',
    originCbu: '0070000020000000000001',
    destinationCbu: '0140999903385001234567',
    destinationName: 'EDENOR SA',
    description: 'Pago factura electricidad',
    status: 'completed',
    createdAt: new Date('2024-05-01T14:22:00'),
    completedAt: new Date('2024-05-01T14:22:12'),
  },
  {
    id: 'trf-003',
    amount: 20000.00,
    currency: 'ARS',
    originCbu: '0070000020000000000002',
    destinationCbu: '0110096030009603150002',
    destinationName: 'Carlos Rodríguez',
    description: 'Devolución préstamo',
    status: 'pending',
    createdAt: new Date('2024-05-06T09:00:00'),
  },
];

/**
 * Valida que un CBU/CVU tenga exactamente 22 dígitos numéricos.
 */
function isValidCbuCvu(value: string): boolean {
  return /^\d{22}$/.test(value);
}

/**
 * GET /api/v1/transfers
 * Lista el historial de transferencias del usuario autenticado.
 */
router.get('/', (_req: Request, res: Response) => {
  res.json({
    data: mockTransfers,
    total: mockTransfers.length,
    page: 1,
    pageSize: 10,
  });
});

/**
 * GET /api/v1/transfers/:id
 * Retorna el detalle de una transferencia por ID.
 */
router.get('/:id', (req: Request, res: Response) => {
  const transfer = mockTransfers.find((t) => t.id === req.params.id);
  if (!transfer) {
    res.status(404).json({ error: 'Transferencia no encontrada' });
    return;
  }
  res.json({ data: transfer });
});

/**
 * POST /api/v1/transfers
 * Inicia una nueva transferencia (CBU/CVU, estándar BCRA).
 */
router.post('/', (req: Request, res: Response) => {
  const { amount, currency, originCbu, destinationCbu, destinationName, description } = req.body;

  // Validación: amount
  if (amount === undefined || amount === null) {
    res.status(400).json({ error: 'El campo "amount" es requerido' });
    return;
  }
  if (typeof amount !== 'number' || amount <= 0) {
    res.status(400).json({
      error: 'El campo "amount" debe ser un número mayor a 0',
    });
    return;
  }

  // Validación: currency
  const validCurrencies = ['ARS', 'USD'];
  if (!currency || !validCurrencies.includes(currency)) {
    res.status(400).json({
      error: 'El campo "currency" es requerido',
      message: `Debe ser uno de: ${validCurrencies.join(', ')}`,
    });
    return;
  }

  // Validación: originCbu
  if (!originCbu) {
    res.status(400).json({ error: 'El campo "originCbu" es requerido' });
    return;
  }
  if (!isValidCbuCvu(originCbu)) {
    res.status(400).json({
      error: 'CBU/CVU de origen inválido',
      message: 'El CBU/CVU debe tener exactamente 22 dígitos numéricos',
    });
    return;
  }

  // Validación: destinationCbu
  if (!destinationCbu) {
    res.status(400).json({ error: 'El campo "destinationCbu" es requerido' });
    return;
  }
  if (!isValidCbuCvu(destinationCbu)) {
    res.status(400).json({
      error: 'CBU/CVU de destino inválido',
      message: 'El CBU/CVU debe tener exactamente 22 dígitos numéricos',
    });
    return;
  }

  // Validación: destinationName
  if (!destinationName || typeof destinationName !== 'string' || destinationName.trim() === '') {
    res.status(400).json({ error: 'El campo "destinationName" es requerido' });
    return;
  }

  // Validación: description
  if (!description || typeof description !== 'string' || description.trim() === '') {
    res.status(400).json({ error: 'El campo "description" es requerido' });
    return;
  }

  const newTransfer: Transfer = {
    id: `trf-${Date.now()}`,
    amount,
    currency,
    originCbu,
    destinationCbu,
    destinationName: destinationName.trim(),
    description: description.trim(),
    status: 'pending',
    createdAt: new Date(),
  };

  mockTransfers.push(newTransfer);

  res.status(201).json({
    data: newTransfer,
    message: 'Transferencia iniciada correctamente. Pendiente de procesamiento.',
  });
});

export default router;
