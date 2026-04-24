'use client';

import { useState } from 'react';

const accounts = [
  { id: 'galicia', name: 'Galicia', balance: 312450 },
  { id: 'brubank', name: 'Brubank', balance: 284870 },
  { id: 'santander', name: 'Santander', balance: 250000 },
];

const concepts = ['Varios', 'Alquiler', 'Honorarios', 'Cuota', 'Préstamo'];

const recentContacts = ['Juan P.', 'María G.', 'Pedro L.', 'Empresa SA'];

const history = [
  { name: 'Juliana Torres', amount: 25000, time: 'hace 2 días' },
  { name: 'Netflix AR', amount: 4200, time: 'hace 5 días' },
  { name: 'Pedro López', amount: 10000, time: 'hace 1 semana' },
];

const fmt = (n: number) =>
  n.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function TransfersPage() {
  const [fromAccount, setFromAccount] = useState(accounts[0].id);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('Varios');
  const [showHistory, setShowHistory] = useState(false);

  const selectedAccount = accounts.find((a) => a.id === fromAccount)!;

  const s: Record<string, React.CSSProperties> = {
    page: {
      backgroundColor: '#0A0A0F',
      minHeight: '100vh',
      paddingBottom: 80,
      maxWidth: 430,
      margin: '0 auto',
      color: '#F1F5F9',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 20px 8px',
    },
    title: { fontSize: 22, fontWeight: 700, color: '#F1F5F9', margin: 0 },
    iconBtn: {
      background: '#12121A',
      border: '1px solid #1E1E2E',
      borderRadius: 12,
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: '#94A3B8',
    },
    card: {
      margin: '12px 20px',
      backgroundColor: '#12121A',
      borderRadius: 16,
      padding: 16,
      border: '1px solid #1E1E2E',
    },
    label: { fontSize: 12, color: '#64748B', marginBottom: 6, fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: 0.5 },
    select: {
      width: '100%',
      backgroundColor: '#0A0A0F',
      border: '1px solid #1E1E2E',
      borderRadius: 10,
      padding: '12px 14px',
      color: '#F1F5F9',
      fontSize: 15,
      fontFamily: 'inherit',
      outline: 'none',
      appearance: 'none' as const,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394A3B8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 14px center',
    },
    balanceHint: { fontSize: 12, color: '#94A3B8', marginTop: 6 },
    input: {
      width: '100%',
      backgroundColor: '#0A0A0F',
      border: '1px solid #1E1E2E',
      borderRadius: 10,
      padding: '12px 14px',
      color: '#F1F5F9',
      fontSize: 15,
      fontFamily: 'inherit',
      outline: 'none',
      boxSizing: 'border-box' as const,
    },
    chipsRow: { display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginTop: 10 },
    chip: {
      backgroundColor: '#1E1E2E',
      borderRadius: 20,
      padding: '6px 14px',
      fontSize: 13,
      color: '#94A3B8',
      cursor: 'pointer',
      border: '1px solid #2A2A3A',
      fontFamily: 'inherit',
    },
    amountDisplay: {
      fontSize: 40,
      fontWeight: 800,
      color: '#F1F5F9',
      textAlign: 'center' as const,
      padding: '8px 0',
      background: 'none',
      border: 'none',
      width: '100%',
      outline: 'none',
      fontFamily: 'inherit',
    },
    amountPlaceholder: { color: '#2A2A3A' },
    transferBtn: {
      margin: '4px 20px 20px',
      width: 'calc(100% - 40px)',
      backgroundColor: '#6C63FF',
      border: 'none',
      borderRadius: 16,
      padding: '17px',
      color: '#fff',
      fontSize: 16,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'inherit',
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: 600,
      color: '#94A3B8',
      margin: '20px 20px 10px',
      textTransform: 'uppercase' as const,
      letterSpacing: 1,
    },
    histItem: {
      margin: '0 20px 8px',
      backgroundColor: '#12121A',
      borderRadius: 12,
      padding: '14px 16px',
      border: '1px solid #1E1E2E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    histName: { fontSize: 15, fontWeight: 600, color: '#F1F5F9' },
    histTime: { fontSize: 12, color: '#64748B', marginTop: 2 },
    histAmt: { fontSize: 16, fontWeight: 700, color: '#FF4D6A' },
  };

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <p style={s.title}>Transferir</p>
        <button style={s.iconBtn} onClick={() => setShowHistory(!showHistory)} aria-label="Ver historial">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </button>
      </div>

      {!showHistory ? (
        <>
          {/* Desde */}
          <div style={s.card}>
            <div style={s.label}>Desde</div>
            <select
              style={s.select}
              value={fromAccount}
              onChange={(e) => setFromAccount(e.target.value)}
            >
              {accounts.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name} · ${fmt(a.balance)}
                </option>
              ))}
            </select>
            <div style={s.balanceHint}>
              Disponible: ${fmt(selectedAccount.balance)} ARS
            </div>
          </div>

          {/* Para */}
          <div style={s.card}>
            <div style={s.label}>Para</div>
            <input
              style={s.input}
              type="text"
              placeholder="CBU / CVU / Alias"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
            <div style={s.chipsRow}>
              {recentContacts.map((c) => (
                <button
                  key={c}
                  style={s.chip}
                  onClick={() => setRecipient(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Monto */}
          <div style={s.card}>
            <div style={s.label}>Monto</div>
            <input
              style={s.amountDisplay}
              type="text"
              inputMode="decimal"
              placeholder="$0"
              value={amount}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9,]/g, '');
                setAmount(val);
              }}
            />
          </div>

          {/* Concepto */}
          <div style={s.card}>
            <div style={s.label}>Concepto</div>
            <select
              style={s.select}
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
            >
              {concepts.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* CTA */}
          <button style={s.transferBtn}>Transferir</button>
        </>
      ) : (
        <>
          <p style={s.sectionTitle}>Historial reciente</p>
          {history.map((h) => (
            <div key={h.name} style={s.histItem}>
              <div>
                <div style={s.histName}>{h.name}</div>
                <div style={s.histTime}>{h.time}</div>
              </div>
              <div style={s.histAmt}>-${fmt(h.amount)}</div>
            </div>
          ))}
          <button
            style={{ ...s.transferBtn, backgroundColor: 'transparent', border: '1.5px solid #6C63FF', color: '#6C63FF', marginTop: 8 }}
            onClick={() => setShowHistory(false)}
          >
            ← Volver al formulario
          </button>
        </>
      )}
    </div>
  );
}
