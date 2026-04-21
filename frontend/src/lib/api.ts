import axios from 'axios';

// Cliente Axios con baseURL apuntando al proxy de Next.js
const apiClient = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tipos básicos
interface Account {
  id: string;
  accountNumber: string;
  cbu: string;
  alias?: string;
  currency: string;
  balance: number;
  availableBalance: number;
  accountType: string;
}

interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  currency: string;
  description: string;
  transactionType: string;
  status: string;
  createdAt: string;
}

interface PaymentData {
  amount: number;
  currency?: string;
  creditorCbu: string;
  creditorName: string;
  description?: string;
}

// Funciones de acceso a la API

export const getAccounts = async (): Promise<Account[]> => {
  const res = await apiClient.get<{ data: Account[] }>('/accounts');
  return res.data.data;
};

export const getAccount = async (id: string): Promise<Account> => {
  const res = await apiClient.get<{ data: Account }>(`/accounts/${id}`);
  return res.data.data;
};

export const getTransactions = async (id: string): Promise<Transaction[]> => {
  const res = await apiClient.get<{ data: Transaction[] }>(`/accounts/${id}/transactions`);
  return res.data.data;
};

export const initiatePayment = async (data: PaymentData) => {
  const res = await apiClient.post('/payments/initiate', data);
  return res.data;
};

export default apiClient;
