'use client';

import { useState } from 'react';

interface Account {
  id: string;
  bank: string;
  icon: string;
  cbu: string;
  alias: string;
  currency: string;
  balance: number;
  availableBalance: number;
  accountType: string;
}

const accountTypeLabel: Record<string, string> = {
  checking: 'Cuenta Corriente',
  savings: 'Caja de Ahorro',
  credit: 'Cuenta de Crédito',
};

const mockAccounts: Account[] = [
  {
    id: 'acc-001',
    bank: 'Galicia',
    icon: '🏦',
    cbu: '0070000020000000000001',
    alias: 'galicia.main',
    currency: 'ARS',
    balance: 312450.0,
    availableBalance: 312450.0,
    accountType: 'checking',
  },
  {
    id: 'acc-002',
    bank: 'Brubank',
    icon: '💜',
    cbu: '1500000020000000000002',
    alias: 'brubank.main',
    currency: 'ARS',
    balance: 284870.5,
    availableBalance: 284870.5,
    accountType: 'savings',
  },
  {
    id: 'acc-003',
    bank: 'Santander',
    icon: '🔴',
    cbu: '0720000020000000000003',
    alias: 'santander.rio',
    currency: 'ARS',
    balance: 250000.0,
    availableBalance: 248500.0,
    accountType: 'checking',
  },
];

const recentMovements: Record<string, { label: string; amount: number; date: string; type: 'income' | 'expense' }[]> = {
  'acc-001': [
    { label: 'Mercado Libre', amount: -12500, date: 'Hoy', type: 'expense' },
    { label: 'Transferencia recibida', amount: +50000, date: 'Ayer', type: 'income' },
    { label: 'Edenor', amount: -15420, date: '22 abr', type: 'expense' },
  ],
  'acc-002': [
    { label: 'Netflix AR', amount: -4200, date: 'Ayer', type: 'expense' },
    { label: 'Sueldo', amount: +380000, date: '21 abr', type: 'income' },
  ],
  'acc-003': [
    { label: 'Supermercado', amount: -8300, date: 'Hoy', type: 'expense' },
    { label: 'Transferencia', amount: +25000, date: '20 abr', type: 'income' },
  ],
};

export default function AccountsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedCbu, setCopiedCbu] = useState<string | null>(null);

  const handleCopyCbu = (cbu: string, id: string) => {
    navigator.clipboard.writeText(cbu).then(() => {
      setCopiedCbu(id);
      setTimeout(() => setCopiedCbu(null), 2000);
    }).catch(() => {
      // Fallback: show a brief visual indication that copy failed
      setCopiedCbu(id + '_err');
      setTimeout(() => setCopiedCbu(null), 2000);
    });
  };

  const totalBalance = mockAccounts.reduce((sum, a) => sum + a.balance, 0);

  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh', paddingBottom: '88px' }}>
      {/* Header */}
      <div style={{ padding: '52px 20px 16px' }}>
        <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: '#f1f5f9' }}>Mis cuentas</h1>
        <p style={{ margin: '4px 0 0', fontSize: '28px', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.5px' }}>
          ${totalBalance.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
        </p>
        <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#6b7280' }}>Balance consolidado · {mockAccounts.length} cuentas</p>
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {mockAccounts.map((account) => {
          const isExpanded = expandedId === account.id;
          const movements = recentMovements[account.id] || [];
          return (
            <div key={account.id} style={{ background: '#12121A', borderRadius: '20px', border: '1px solid rgba(108,99,255,0.1)', overflow: 'hidden' }}>
              {/* Account header */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : account.id)}
                style={{ width: '100%', padding: '18px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: '14px', background: 'rgba(108,99,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                  {account.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ margin: 0, fontSize: '16px', color: '#f1f5f9', fontWeight: 700 }}>{account.bank}</p>
                      <span style={{ fontSize: '10px', color: '#6C63FF', background: 'rgba(108,99,255,0.1)', padding: '2px 8px', borderRadius: '20px', fontWeight: 600 }}>
                        {accountTypeLabel[account.accountType] || account.accountType}
                      </span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ margin: 0, fontSize: '18px', color: '#f1f5f9', fontWeight: 800, letterSpacing: '-0.3px' }}>
                        ${account.balance.toLocaleString('es-AR', { minimumFractionDigits: 0 })}
                      </p>
                      <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#6b7280' }}>{account.currency}</p>
                    </div>
                  </div>
                </div>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"
                  style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0 }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Expanded details */}
              {isExpanded && (
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {/* CBU / Alias */}
                  <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '10px 14px' }}>
                      <div>
                        <p style={{ margin: 0, fontSize: '11px', color: '#6b7280', fontWeight: 600 }}>CBU</p>
                        <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#94a3b8', fontFamily: 'monospace', letterSpacing: '0.05em' }}>{account.cbu}</p>
                      </div>
                      <button
                        onClick={() => handleCopyCbu(account.cbu, account.id + '_cbu')}
                        style={{ background: copiedCbu === account.id + '_cbu' ? 'rgba(0,212,139,0.15)' : 'rgba(108,99,255,0.12)', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '11px', color: copiedCbu === account.id + '_cbu' ? '#00D48B' : '#6C63FF', fontWeight: 700, cursor: 'pointer' }}
                      >
                        {copiedCbu === account.id + '_cbu' ? '✓ Copiado' : 'Copiar'}
                      </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '10px 14px' }}>
                      <div>
                        <p style={{ margin: 0, fontSize: '11px', color: '#6b7280', fontWeight: 600 }}>Alias</p>
                        <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#94a3b8' }}>{account.alias}</p>
                      </div>
                      <button
                        onClick={() => handleCopyCbu(account.alias, account.id + '_alias')}
                        style={{ background: copiedCbu === account.id + '_alias' ? 'rgba(0,212,139,0.15)' : 'rgba(108,99,255,0.12)', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '11px', color: copiedCbu === account.id + '_alias' ? '#00D48B' : '#6C63FF', fontWeight: 700, cursor: 'pointer' }}
                      >
                        {copiedCbu === account.id + '_alias' ? '✓ Copiado' : 'Copiar'}
                      </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '10px 14px' }}>
                      <div>
                        <p style={{ margin: 0, fontSize: '11px', color: '#6b7280', fontWeight: 600 }}>Disponible</p>
                        <p style={{ margin: '2px 0 0', fontSize: '14px', color: '#00D48B', fontWeight: 700 }}>
                          ${account.availableBalance.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ margin: 0, fontSize: '11px', color: '#6b7280', fontWeight: 600 }}>Contable</p>
                        <p style={{ margin: '2px 0 0', fontSize: '14px', color: '#f1f5f9', fontWeight: 700 }}>
                          ${account.balance.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recent movements */}
                  <div style={{ padding: '0 18px 16px' }}>
                    <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#6b7280', fontWeight: 600 }}>Últimos movimientos</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                      {movements.map((mov, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: idx < movements.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                          <div>
                            <p style={{ margin: 0, fontSize: '13px', color: '#f1f5f9', fontWeight: 500 }}>{mov.label}</p>
                            <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#6b7280' }}>{mov.date}</p>
                          </div>
                          <span style={{ fontSize: '14px', fontWeight: 700, color: mov.type === 'income' ? '#00D48B' : '#f1f5f9' }}>
                            {mov.type === 'income' ? '+' : '-'}${Math.abs(mov.amount).toLocaleString('es-AR')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

