import { Router, Request, Response } from 'express';
import { Transfer } from '../types';

const router = Router();

// Regex para validar el formato CBU argentino: exactamente 22 dígitos
const CBU_REGEX = /^\d{22}$/;

// Datos mock de transferencias
const mockTransfers: Transfer[] = [
  {
    id: 'trx-001',
    amount: 25000.00,
    currency: 'ARS',
    originCbu: '0070000020000000000001',
    destinationCbu: '0290000030000000000099',
    destinationAlias: 'JUAN.PEREZ.MP',
    destinationName: 'Juan Pérez',
    description: 'Pago alquiler mayo',
    concept: 'ALQ',
    status: 'completed',
    createdAt: new Date('2024-05-01T10:00:00'),
    completedAt: new Date('2024-05-01T10:00:45'),
  },
  {
    id: 'trx-002',
    amount: 8500.00,
    currency: 'ARS',
    originCbu: '0070000020000000000001',
    destinationCbu: '0150000030000000000015',
    destinationAlias: 'MARIA.GONZALEZ',
    destinationName: 'María González',
    description: 'Honorarios consultoría',
    concept: 'HON',
    status: 'completed',
    createdAt: new Date('2024-05-03T14:30:00'),
    completedAt: new Date('2024-05-03T14:30:30'),
  },
  {
    id: 'trx-003',
    amount: 150000.00,
    currency: 'ARS',
    originCbu: '0070000020000000000001',
    destinationCbu: '3220001812000025687419',
    destinationAlias: 'BRUBANK.AHORRO',
    destinationName: 'Carlos Rodríguez',
    description: 'Transferencia personal',
    concept: 'VAR',
    status: 'pending',
    createdAt: new Date('2024-05-10T09:15:00'),
  },
  {
    id: 'trx-004',
    amount: 3200.00,
    currency: 'ARS',
    originCbu: '0070000020000000000001',
    destinationCbu: '4530000800008300025891',
    destinationName: 'Lucía Fernández',
    description: 'Cuota préstamo',
    concept: 'CUO',
    status: 'failed',
    createdAt: new Date('2024-05-08T18:00:00'),
  },
];

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
 * Retorna el detalle de una transferencia por su identificador.
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
 * POST /api/v1/transfers/initiate
 * Inicia una nueva transferencia bancaria.
 * Valida CBU de 22 dígitos conforme estándares BCRA.
 */
router.post('/initiate', (req: Request, res: Response) => {
  const {
    amount,
    currency,
    originCbu,
    destinationCbu,
    destinationAlias,
    destinationName,
    description,
    concept,
  } = req.body;

  // Validación: monto requerido y mayor a cero
  if (amount === undefined || amount === null) {
    res.status(400).json({ error: 'El campo "amount" es requerido' });
    return;
  }
  if (typeof amount !== 'number' || amount <= 0) {
    res.status(400).json({ error: 'El campo "amount" debe ser un número mayor a cero' });
    return;
  }

  // Validación: CBU origen requerido y formato válido
  if (!originCbu) {
    res.status(400).json({ error: 'El campo "originCbu" es requerido' });
    return;
  }
  if (!CBU_REGEX.test(originCbu)) {
    res.status(400).json({ error: 'El campo "originCbu" debe contener exactamente 22 dígitos (formato BCRA)' });
    return;
  }

  // Validación: CBU destino requerido y formato válido
  if (!destinationCbu) {
    res.status(400).json({ error: 'El campo "destinationCbu" es requerido' });
    return;
  }
  if (!CBU_REGEX.test(destinationCbu)) {
    res.status(400).json({ error: 'El campo "destinationCbu" debe contener exactamente 22 dígitos (formato BCRA)' });
    return;
  }

  // Validación: no transferir a sí mismo
  if (originCbu === destinationCbu) {
    res.status(400).json({ error: 'El CBU de origen y destino no pueden ser iguales' });
    return;
  }

  // Validación: nombre del destinatario requerido
  if (!destinationName || typeof destinationName !== 'string' || destinationName.trim() === '') {
    res.status(400).json({ error: 'El campo "destinationName" es requerido' });
    return;
  }

  // Validación: concepto válido
  const validConcepts = ['VAR', 'ALQ', 'HON', 'FAM', 'SUE', 'CUO', 'SEG', 'PRE', 'OTR'];
  const selectedConcept = concept || 'OTR';
  if (!validConcepts.includes(selectedConcept)) {
    res.status(400).json({
      error: `Concepto inválido. Valores permitidos: ${validConcepts.join(', ')}`,
    });
    return;
  }

  const newTransfer: Transfer = {
    id: `trx-${Date.now()}`,
    amount,
    currency: currency || 'ARS',
    originCbu,
    destinationCbu,
    destinationAlias: destinationAlias || undefined,
    destinationName: destinationName.trim(),
    description: description || undefined,
    concept: selectedConcept as Transfer['concept'],
    status: 'pending',
    createdAt: new Date(),
  };

  res.status(201).json({
    data: newTransfer,
    message: 'Transferencia iniciada correctamente. Pendiente de acreditación.',
  });
});

export default router;
