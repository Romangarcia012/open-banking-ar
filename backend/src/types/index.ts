// Interfaces principales del dominio Open Banking AR

export interface Account {
  id: string;
  accountNumber: string;
  cbu: string;
  alias?: string;
  currency: string;
  balance: number;
  availableBalance: number;
  accountType: 'checking' | 'savings' | 'credit';
  ownerId: string;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  currency: string;
  description: string;
  transactionType: 'credit' | 'debit';
  status: 'pending' | 'completed' | 'failed' | 'reversed';
  counterpartName?: string;
  counterpartCbu?: string;
  createdAt: Date;
}

export interface Payment {
  id: string;
  amount: number;
  currency: string;
  debtorCbu: string;
  creditorCbu: string;
  creditorName: string;
  description?: string;
  status: 'pending' | 'authorized' | 'completed' | 'failed' | 'cancelled';
  consentId: string;
  createdAt: Date;
  executedAt?: Date;
}

export interface Consent {
  id: string;
  userId: string;
  permissions: string[];
  status: 'active' | 'revoked' | 'expired';
  expiresAt: Date;
  createdAt: Date;
  revokedAt?: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  cuit?: string;
  role: 'user' | 'admin' | 'tpp';
  createdAt: Date;
}

export interface TokenPayload {
  sub: string;
  clientId: string;
  scope: string;
  iat: number;
  exp: number;
}

export interface Investment {
  id: string;
  type: 'Plazo Fijo' | 'FCI' | 'Bono' | 'Acción' | 'Letra del Tesoro';
  amount: number;
  currency: 'ARS' | 'USD';
  startDate: Date;
  maturityDate: Date;
  interestRate: number;
  status: 'active' | 'matured' | 'liquidated';
  institution: string;
  ownerId: string;
}

export interface Transfer {
  id: string;
  amount: number;
  currency: 'ARS' | 'USD';
  originCbu: string;
  destinationCbu: string;
  destinationName: string;
  description: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  completedAt?: Date;
}
