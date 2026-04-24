'use client';

import { useState } from 'react';

const accounts = [
  { id: 1, bank: 'Galicia', balance: 312450.0 },
  { id: 2, bank: 'Brubank', balance: 284870.5 },
  { id: 3, bank: 'Santander', balance: 250000.0 },
];

const recentContacts = [
  { initials: 'JP', name: 'Juan P.' },
  { initials: 'MG', name: 'María G.' },
  { initials: 'PL', name: 'Pedro L.' },
  { initials: 'ES', name: 'Empresa SA' },
];

const recentHistory = [
  { name: 'Juliana Torres', detail: 'CBU 007', amount: 25000, when: 'hace 2 días' },
  { name: 'Netflix AR', detail: 'CVU', amount: 4200, when: 'hace 5 días' },
  { name: 'Pedro López', detail: 'alias pedrolo', amount: 10000, when: 'hace 1 semana' },
];

const conceptos = ['Varios', 'Alquiler', 'Honorarios', 'Cuota', 'Préstamo'];

export default function TransfersPage() {
  const [fromAccount, setFromAccount] = useState(0);
  const [toInput, setToInput] = useState('');
  const [amount, setAmount] = useState('0.00');
  const [concepto, setConcepto] = useState('Varios');
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showConceptoMenu, setShowConceptoMenu] = useState(false);

  const handleAmountClick = (val: string) => {
    if (val === '.') return; // decimal not supported in this simple input
    setAmount((prev) => {
      if (val === 'del') {
        const cleaned = prev.replace(/[^0-9]/g, '');
        const next = cleaned.slice(0, -1) || '0';
        const num = parseInt(next, 10) / 100;
        return num.toFixed(2);
      }
      const cleaned = prev.replace(/[^0-9]/g, '') + val;
      const num = parseInt(cleaned, 10) / 100;
      return num.toFixed(2);
    });
  };

  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh', paddingBottom: '88px' }}>
      {/* Header */}
      <div style={{ padding: '52px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: '#f1f5f9' }}>Transferir</h1>
        <button style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', color: '#6C63FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Clock icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </button>
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

        {/* Desde */}
        <div style={{ background: '#12121A', borderRadius: '16px', padding: '16px', border: '1px solid rgba(108,99,255,0.12)' }}>
          <p style={{ margin: '0 0 10px', fontSize: '12px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Desde</p>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowAccountMenu(!showAccountMenu)}
              style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: '12px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
            >
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, fontSize: '15px', color: '#f1f5f9', fontWeight: 600 }}>{accounts[fromAccount].bank}</p>
                <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#6b7280' }}>
                  ${accounts[fromAccount].balance.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {showAccountMenu && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#1a1a28', borderRadius: '12px', border: '1px solid rgba(108,99,255,0.2)', marginTop: '4px', zIndex: 10, overflow: 'hidden' }}>
                {accounts.map((acc, idx) => (
                  <button
                    key={acc.id}
                    onClick={() => { setFromAccount(idx); setShowAccountMenu(false); }}
                    style={{ width: '100%', padding: '12px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', borderBottom: idx < accounts.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                  >
                    <span style={{ fontSize: '14px', color: '#f1f5f9', fontWeight: 600 }}>{acc.bank}</span>
                    <span style={{ fontSize: '13px', color: '#00D48B' }}>${acc.balance.toLocaleString('es-AR', { minimumFractionDigits: 0 })}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Para */}
        <div style={{ background: '#12121A', borderRadius: '16px', padding: '16px', border: '1px solid rgba(108,99,255,0.12)' }}>
          <p style={{ margin: '0 0 10px', fontSize: '12px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Para</p>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="text"
              value={toInput}
              onChange={(e) => setToInput(e.target.value)}
              placeholder="CBU, CVU o alias"
              style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: '12px', padding: '12px 14px', fontSize: '14px', color: '#f1f5f9', outline: 'none' }}
            />
            <button style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '12px', padding: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </button>
          </div>
          {/* Recent contacts chips */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
            {recentContacts.map((c) => (
              <button
                key={c.name}
                onClick={() => setToInput(c.name.toLowerCase().replace(' ', ''))}
                style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.18)', borderRadius: '20px', padding: '6px 12px', cursor: 'pointer' }}
              >
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg, #6C63FF, #00D48B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                  {c.initials}
                </div>
                <span style={{ fontSize: '12px', color: '#c4b5fd', fontWeight: 500, whiteSpace: 'nowrap' }}>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Monto */}
        <div style={{ background: '#12121A', borderRadius: '16px', padding: '16px', border: '1px solid rgba(108,99,255,0.12)', textAlign: 'center' }}>
          <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Monto</p>
          <p style={{ margin: '0 0 16px', fontSize: '40px', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-1px' }}>
            ${parseFloat(amount).toLocaleString('es-AR', { minimumFractionDigits: 2 })}
          </p>
          {/* Numeric keyboard */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {['1','2','3','4','5','6','7','8','9','.','0','del'].map((key) => (
              <button
                key={key}
                onClick={() => handleAmountClick(key)}
                style={{ padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', fontSize: key === 'del' ? '16px' : '18px', color: key === 'del' ? '#FF4D6A' : '#f1f5f9', fontWeight: 600, cursor: 'pointer' }}
              >
                {key === 'del' ? '⌫' : key}
              </button>
            ))}
          </div>
        </div>

        {/* Concepto */}
        <div style={{ background: '#12121A', borderRadius: '16px', padding: '16px', border: '1px solid rgba(108,99,255,0.12)', position: 'relative' }}>
          <p style={{ margin: '0 0 10px', fontSize: '12px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Concepto</p>
          <button
            onClick={() => setShowConceptoMenu(!showConceptoMenu)}
            style={{ width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: '12px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '14px', color: '#f1f5f9', fontWeight: 500 }}>{concepto}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {showConceptoMenu && (
            <div style={{ position: 'absolute', top: '100%', left: 16, right: 16, background: '#1a1a28', borderRadius: '12px', border: '1px solid rgba(108,99,255,0.2)', marginTop: '4px', zIndex: 10, overflow: 'hidden' }}>
              {conceptos.map((c, idx) => (
                <button
                  key={c}
                  onClick={() => { setConcepto(c); setShowConceptoMenu(false); }}
                  style={{ width: '100%', padding: '12px 16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '14px', color: c === concepto ? '#6C63FF' : '#f1f5f9', fontWeight: c === concepto ? 700 : 400, borderBottom: idx < conceptos.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Transfer Button */}
        <button
          style={{ width: '100%', padding: '16px', background: '#6C63FF', borderRadius: '16px', border: 'none', fontSize: '16px', fontWeight: 700, color: '#fff', cursor: 'pointer', letterSpacing: '0.02em', boxShadow: '0 4px 20px rgba(108,99,255,0.35)' }}
        >
          Transferir ${parseFloat(amount).toLocaleString('es-AR', { minimumFractionDigits: 2 })}
        </button>

        {/* Recent history */}
        <div style={{ marginTop: '8px' }}>
          <p style={{ margin: '0 0 12px', fontSize: '15px', color: '#f1f5f9', fontWeight: 700 }}>Historial reciente</p>
          <div style={{ background: '#12121A', borderRadius: '16px', border: '1px solid rgba(108,99,255,0.1)', overflow: 'hidden' }}>
            {recentHistory.map((item, idx) => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: idx < recentHistory.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <div style={{ width: 40, height: 40, borderRadius: '12px', background: 'rgba(108,99,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
                  👤
                </div>
                <div style={{ flex: 1, marginLeft: '12px' }}>
                  <p style={{ margin: 0, fontSize: '14px', color: '#f1f5f9', fontWeight: 600 }}>{item.name}</p>
                  <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#6b7280' }}>{item.detail} · {item.when}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontSize: '14px', color: '#FF4D6A', fontWeight: 700 }}>-${item.amount.toLocaleString('es-AR')}</p>
                  <button style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '8px', padding: '4px 10px', fontSize: '11px', color: '#6C63FF', fontWeight: 600, cursor: 'pointer', marginTop: '4px' }}>
                    Repetir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
