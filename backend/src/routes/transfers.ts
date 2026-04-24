import { Router, Request, Response } from 'express';
import { Transfer } from '../types';

const router = Router();

const CBU_LENGTH = 22;

// Datos mock de historial de transferencias
const mockTransfers: Transfer[] = [
  {
    id: 'trf-001',
    originCbu: '0070000020000000000001',
    destinationCbu: '0290000030000000000099',
    destinationName: 'Juan Pérez',
    amount: 15000.00,
    currency: 'ARS',
    concept: 'VAR',
    description: 'Varios',
    status: 'completed',
    createdAt: new Date('2026-04-01T10:30:00Z'),
    executedAt: new Date('2026-04-01T10:30:05Z'),
  },
  {
    id: 'trf-002',
    originCbu: '0070000020000000000001',
    destinationCbu: '0140999903385001234567',
    destinationName: 'Inmobiliaria Norte SA',
    amount: 85000.00,
    currency: 'ARS',
    concept: 'ALQ',
    description: 'Alquiler abril 2026',
    status: 'completed',
    createdAt: new Date('2026-04-03T09:00:00Z'),
    executedAt: new Date('2026-04-03T09:00:08Z'),
  },
  {
    id: 'trf-003',
    originCbu: '0070000020000000000001',
    destinationCbu: '0070999900000000123456',
    destinationName: 'Estudio Jurídico Fernández',
    amount: 30000.00,
    currency: 'ARS',
    concept: 'HON',
    description: 'Honorarios servicios legales',
    status: 'completed',
    createdAt: new Date('2026-04-10T14:15:00Z'),
    executedAt: new Date('2026-04-10T14:15:03Z'),
  },
  {
    id: 'trf-004',
    originCbu: '0070000020000000000001',
    destinationCbu: '0110003900030000123456',
    destinationName: 'Banco Nación — Préstamo',
    amount: 12500.00,
    currency: 'ARS',
    concept: 'PRE',
    description: 'Cuota préstamo personal',
    status: 'completed',
    createdAt: new Date('2026-04-15T08:00:00Z'),
    executedAt: new Date('2026-04-15T08:00:02Z'),
  },
  {
    id: 'trf-005',
    originCbu: '0070000020000000000001',
    destinationCbu: '0290055540000000987654',
    destinationName: 'Club Deportivo San Martín',
    amount: 4500.00,
    currency: 'ARS',
    concept: 'CUO',
    description: 'Cuota mensual club',
    status: 'pending',
    createdAt: new Date('2026-04-20T11:45:00Z'),
  },
];

// GET / — listar historial de transferencias
router.get('/', (_req: Request, res: Response) => {
  res.json({
    data: mockTransfers,
    total: mockTransfers.length,
    page: 1,
    pageSize: 10,
  });
});

// GET /:id — detalle de una transferencia
router.get('/:id', (req: Request, res: Response) => {
  const transfer = mockTransfers.find((t) => t.id === req.params.id);
  if (!transfer) {
    res.status(404).json({ error: 'Transferencia no encontrada' });
    return;
  }
  res.json({ data: transfer });
});

// POST /initiate — iniciar una nueva transferencia
router.post('/initiate', (req: Request, res: Response) => {
  const { originCbu, destinationCbu, destinationName, amount, currency, concept, description } = req.body;

  if (!originCbu) {
    res.status(400).json({ error: 'El campo "originCbu" es requerido' });
    return;
  }
  if (String(originCbu).length !== CBU_LENGTH || !/^\d+$/.test(String(originCbu))) {
    res.status(400).json({ error: 'El CBU de origen debe tener exactamente 22 dígitos numéricos' });
    return;
  }
  if (!destinationCbu) {
    res.status(400).json({ error: 'El campo "destinationCbu" es requerido' });
    return;
  }
  if (String(destinationCbu).length !== CBU_LENGTH || !/^\d+$/.test(String(destinationCbu))) {
    res.status(400).json({ error: 'El CBU de destino debe tener exactamente 22 dígitos numéricos' });
    return;
  }
  if (!destinationName) {
    res.status(400).json({ error: 'El campo "destinationName" es requerido' });
    return;
  }
  if (amount == null || amount <= 0) {
    res.status(400).json({ error: 'El monto debe ser mayor a cero' });
    return;
  }

  const validConcepts = ['VAR', 'ALQ', 'HON', 'CUO', 'PRE'];
  if (concept && !validConcepts.includes(concept)) {
    res.status(400).json({ error: `El concepto debe ser uno de: ${validConcepts.join(', ')}` });
    return;
  }

  const transfer: Transfer = {
    id: `trf-${Date.now()}`,
    originCbu,
    destinationCbu,
    destinationName,
    amount,
    currency: currency || 'ARS',
    concept: concept || 'VAR',
    description: description || undefined,
    status: 'pending',
    createdAt: new Date(),
  };

  res.status(201).json({
    data: transfer,
    message: 'Transferencia iniciada correctamente. Pendiente de acreditación.',
  });
});

export default router;
