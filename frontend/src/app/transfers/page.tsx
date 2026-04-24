'use client';

import { useState } from 'react';

const accounts = [
  { id: '1', bank: 'Galicia', type: 'Caja de Ahorro', balance: 312450.0, initials: 'GA', color: '#E53935' },
  { id: '2', bank: 'Brubank', type: 'Cuenta Digital', balance: 284870.5, initials: 'BR', color: '#1E88E5' },
  { id: '3', bank: 'Santander', type: 'Caja de Ahorro', balance: 250000.0, initials: 'SA', color: '#FF6F00' },
];

const contacts = [
  { initials: 'JR', name: 'Juan R.', color: '#6C63FF' },
  { initials: 'MG', name: 'María G.', color: '#00D48B' },
  { initials: 'PL', name: 'Pedro L.', color: '#FF4D6A' },
  { initials: 'ES', name: 'Empresa SA', color: '#F59E0B' },
];

const history = [
  { name: 'Juliana Torres', amount: 25000, label: 'hace 2 días' },
  { name: 'Netflix AR', amount: 4200, label: 'hace 5 días' },
  { name: 'Pedro López', amount: 10000, label: 'hace 1 semana' },
];

const concepts = ['Varios', 'Alquiler', 'Honorarios', 'Cuota', 'Préstamo'];

const fmt = (n: number) =>
  n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function TransfersPage() {
  const [fromAccount, setFromAccount] = useState('1');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('Varios');
  const [sent, setSent] = useState(false);

  const s: Record<string, React.CSSProperties> = {
    page: { backgroundColor: '#0A0A0F', minHeight: '100vh', paddingBottom: 80, maxWidth: 430, margin: '0 auto', color: '#F1F5F9' },
    header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px 8px' },
    title: { fontSize: 22, fontWeight: 700, color: '#F1F5F9', margin: 0 },
    iconBtn: { background: '#1E1E2E', border: 'none', borderRadius: 12, padding: '10px', cursor: 'pointer', color: '#94A3B8', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    section: { margin: '16px 20px 0', backgroundColor: '#12121A', borderRadius: 16, padding: 16, border: '1px solid #1E1E2E' },
    label: { fontSize: 11, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 8 },
    select: { width: '100%', backgroundColor: '#0A0A0F', border: '1px solid #1E1E2E', borderRadius: 10, padding: '10px 12px', color: '#F1F5F9', fontSize: 15, outline: 'none' },
    input: { width: '100%', backgroundColor: '#0A0A0F', border: '1px solid #1E1E2E', borderRadius: 10, padding: '10px 12px', color: '#F1F5F9', fontSize: 15, outline: 'none', boxSizing: 'border-box' as const },
    chipsRow: { display: 'flex', gap: 10, overflowX: 'auto' as const, paddingBottom: 4, marginTop: 10 },
    chip: { display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 4, cursor: 'pointer', flexShrink: 0 },
    chipAvatar: { width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#fff' },
    chipName: { fontSize: 11, color: '#94A3B8', whiteSpace: 'nowrap' as const },
    amountWrap: { textAlign: 'center' as const, padding: '16px 0 8px' },
    amountPrefix: { fontSize: 28, color: '#94A3B8', fontWeight: 300 },
    amountInput: { background: 'none', border: 'none', outline: 'none', fontSize: 48, fontWeight: 700, color: '#F1F5F9', width: '100%', textAlign: 'center' as const },
    cta: { margin: '20px 20px 0', backgroundColor: '#6C63FF', border: 'none', borderRadius: 14, padding: '16px', color: '#fff', fontSize: 16, fontWeight: 700, width: 'calc(100% - 40px)', cursor: 'pointer' },
    histTitle: { fontSize: 14, fontWeight: 600, color: '#94A3B8', margin: '24px 20px 8px' },
    histItem: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', backgroundColor: '#12121A', borderBottom: '1px solid #1E1E2E' },
    histName: { fontSize: 15, color: '#F1F5F9', fontWeight: 500 },
    histSub: { fontSize: 12, color: '#94A3B8', marginTop: 2 },
    histAmt: { fontSize: 16, fontWeight: 600, color: '#F1F5F9' },
    successOverlay: { position: 'fixed' as const, inset: 0, backgroundColor: '#0A0A0F', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', gap: 16, zIndex: 50 },
  };

  if (sent) {
    return (
      <div style={s.successOverlay}>
        <div style={{ fontSize: 64 }}>✅</div>
        <div style={{ fontSize: 24, fontWeight: 700, color: '#00D48B' }}>Transferencia enviada</div>
        <div style={{ fontSize: 15, color: '#94A3B8' }}>El dinero fue acreditado</div>
        <button style={{ ...s.cta, marginTop: 24, width: 200 }} onClick={() => { setSent(false); setAmount(''); setRecipient(''); }}>
          Nueva transferencia
        </button>
      </div>
    );
  }

  return (
    <div style={s.page}>
      <div style={s.header}>
        <p style={s.title}>Transferir</p>
        <button style={s.iconBtn}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
        </button>
      </div>

      {/* Desde */}
      <div style={s.section}>
        <p style={s.label}>Desde</p>
        <select style={s.select} value={fromAccount} onChange={e => setFromAccount(e.target.value)}>
          {accounts.map(a => (
            <option key={a.id} value={a.id}>
              {a.bank} — {a.type} · ${fmt(a.balance)}
            </option>
          ))}
        </select>
      </div>

      {/* Para */}
      <div style={s.section}>
        <p style={s.label}>Para</p>
        <input style={s.input} placeholder="CBU, CVU o alias" value={recipient} onChange={e => setRecipient(e.target.value)} />
        <div style={s.chipsRow}> 
          {contacts.map(c => (
            <div key={c.name} style={s.chip} onClick={() => setRecipient(c.name)}>
              <div style={{ ...s.chipAvatar, backgroundColor: c.color }}>{c.initials}</div>
              <span style={s.chipName}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Monto */}
      <div style={s.section}>
        <p style={s.label}>Monto (ARS)</p>
        <div style={s.amountWrap}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
            <span style={s.amountPrefix}>$</span>
            <input
              style={s.amountInput}
              type="number"
              placeholder="0"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              inputMode="decimal"
            />
          </div>
        </div>
      </div>

      {/* Concepto */}
      <div style={s.section}>
        <p style={s.label}>Concepto</p>
        <select style={s.select} value={concept} onChange={e => setConcept(e.target.value)}>
          {concepts.map(c => <option key={c}>{c}</option>)}</select>
      </div>

      <button style={s.cta} onClick={() => { if (amount && recipient) setSent(true); }}>
        Confirmar transferencia
      </button>

      <p style={s.histTitle}>Recientes</p>
      {history.map((h, i) => (
        <div key={i} style={{ ...s.histItem, borderRadius: i === 0 ? '12px 12px 0 0' : i === history.length - 1 ? '0 0 12px 12px' : 0 }}>
          <div>
            <div style={s.histName}>{h.name}</div>
            <div style={s.histSub}>{h.label}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={s.histAmt}>${fmt(h.amount)}</div>
            <svg width="16" height="16" fill="none" stroke="#6C63FF" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}