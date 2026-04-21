import { Router, Request, Response } from 'express';
import { Account, Transaction } from '../types';

const router = Router();

// Datos mock de cuentas
const mockAccounts: Account[] = [
  {
    id: 'acc-001',
    accountNumber: '0000-0000-0000-0001',
    cbu: '0070000020000000000001',
    alias: 'MI.CUENTA.PRINCIPAL',
    currency: 'ARS',
    balance: 150000.75,
    availableBalance: 145000.00,
    accountType: 'checking',
    ownerId: 'user-001',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'acc-002',
    accountNumber: '0000-0000-0000-0002',
    cbu: '0070000020000000000002',
    alias: 'MI.CAJA.AHORRO',
    currency: 'ARS',
    balance: 85000.00,
    availableBalance: 85000.00,
    accountType: 'savings',
    ownerId: 'user-001',
    createdAt: new Date('2024-02-20'),
  },
];

// Datos mock de transacciones
const mockTransactions: Transaction[] = [
  {
    id: 'txn-001',
    accountId: 'acc-001',
    amount: -5000.00,
    currency: 'ARS',
    description: 'Pago servicio eléctrico',
    transactionType: 'debit',
    status: 'completed',
    counterpartName: 'EDENOR SA',
    counterpartCbu: '0140999903385001234567',
    createdAt: new Date('2024-05-01'),
  },
  {
    id: 'txn-002',
    accountId: 'acc-001',
    amount: 30000.00,
    currency: 'ARS',
    description: 'Transferencia recibida',
    transactionType: 'credit',
    status: 'completed',
    counterpartName: 'Juan Pérez',
    counterpartCbu: '0290000030000000000099',
    createdAt: new Date('2024-05-05'),
  },
];

// GET / — listar todas las cuentas
router.get('/', (_req: Request, res: Response) => {
  res.json({
    data: mockAccounts,
    total: mockAccounts.length,
    page: 1,
    pageSize: 10,
  });
});

// GET /:id — detalle de una cuenta
router.get('/:id', (req: Request, res: Response) => {
  const account = mockAccounts.find((a) => a.id === req.params.id);
  if (!account) {
    res.status(404).json({ error: 'Cuenta no encontrada' });
    return;
  }
  res.json({ data: account });
});

// GET /:id/transactions — movimientos de una cuenta
router.get('/:id/transactions', (req: Request, res: Response) => {
  const account = mockAccounts.find((a) => a.id === req.params.id);
  if (!account) {
    res.status(404).json({ error: 'Cuenta no encontrada' });
    return;
  }
  const transactions = mockTransactions.filter((t) => t.accountId === req.params.id);
  res.json({
    data: transactions,
    total: transactions.length,
    page: 1,
    pageSize: 10,
  });
});

export default router;
