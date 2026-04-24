'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';

const accounts = [
  { id: 'galicia', name: 'Galicia', balance: 312000 },
  { id: 'brubank', name: 'Brubank', balance: 284000 },
  { id: 'santander', name: 'Santander', balance: 250000 },
];

const contacts = [
  { id: 'juan', name: 'Juan R' },
  { id: 'maria', name: 'María G' },
  { id: 'pedro', name: 'Pedro L' },
  { id: 'empresa', name: 'Empresa SA' },
];

const concepts = ['Varios', 'Alquiler', 'Honorarios', 'Cuota', 'Préstamo'];

const history = [
  { id: 'h1', name: 'Juliana Torres', amount: 25000, date: 'Hoy, 10:30' },
  { id: 'h2', name: 'Netflix', amount: 4200, date: 'Ayer, 14:00' },
  { id: 'h3', name: 'Pedro López', amount: 10000, date: '22 abr, 09:15' },
];

const fmt = (n: number) =>
  n.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

const s: Record<string, CSSProperties> = {
  page: {
    backgroundColor: '#0A0A0F',
    minHeight: '100vh',
    paddingBottom: 80,
    maxWidth: 430,
    margin: '0 auto',
    color: '#F1F5F9',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 20px 8px',
    gap: 12,
  },
  title: { fontSize: 22, fontWeight: 700, color: '#F1F5F9', margin: 0 },
  section: { padding: '0 20px', marginTop: 20 },
  label: { fontSize: 12, color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 },
  accountsRow: { display: 'flex', gap: 10 },
  accountCard: {
    flex: 1,
    backgroundColor: '#12121A',
    border: '1.5px solid #1E1E2E',
    borderRadius: 14,
    padding: '12px 10px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'border-color 0.15s',
  },
  accountCardActive: {
    flex: 1,
    backgroundColor: '#12121A',
    border: '1.5px solid #6C63FF',
    borderRadius: 14,
    padding: '12px 10px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  accountName: { fontSize: 11, color: '#94A3B8', marginBottom: 4 },
  accountBal: { fontSize: 14, fontWeight: 700, color: '#F1F5F9' },
  recipientInput: {
    width: '100%',
    backgroundColor: '#12121A',
    border: '1.5px solid #1E1E2E',
    borderRadius: 14,
    padding: '14px 16px',
    color: '#F1F5F9',
    fontSize: 15,
    outline: 'none',
    boxSizing: 'border-box',
  },
  chipsRow: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 },
  chip: {
    backgroundColor: '#12121A',
    border: '1.5px solid #1E1E2E',
    borderRadius: 20,
    padding: '6px 14px',
    fontSize: 13,
    color: '#94A3B8',
    cursor: 'pointer',
  },
  chipActive: {
    backgroundColor: '#6C63FF22',
    border: '1.5px solid #6C63FF',
    borderRadius: 20,
    padding: '6px 14px',
    fontSize: 13,
    color: '#6C63FF',
    cursor: 'pointer',
    fontWeight: 600,
  },
  amountWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 20px 0',
  },
  amountPrefix: { fontSize: 18, color: '#94A3B8', marginBottom: 6 },
  amountInput: {
    background: 'none',
    border: 'none',
    outline: 'none',
    fontSize: 48,
    fontWeight: 800,
    color: '#F1F5F9',
    textAlign: 'center',
    width: '100%',
    caretColor: '#6C63FF',
  },
  amountDivider: { width: '80%', height: 1.5, backgroundColor: '#1E1E2E', marginTop: 10 },
  select: {
    width: '100%',
    backgroundColor: '#12121A',
    border: '1.5px solid #1E1E2E',
    borderRadius: 14,
    padding: '14px 16px',
    color: '#F1F5F9',
    fontSize: 15,
    outline: 'none',
    appearance: 'none',
    boxSizing: 'border-box',
  },
  ctaBtn: {
    display: 'block',
    width: 'calc(100% - 40px)',
    margin: '24px 20px 0',
    backgroundColor: '#6C63FF',
    color: '#fff',
    border: 'none',
    borderRadius: 16,
    padding: '17px',
    fontSize: 16,
    fontWeight: 700,
    cursor: 'pointer',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: '#94A3B8',
    margin: '28px 20px 10px',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  historyItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 20px',
    gap: 14,
    borderBottom: '1px solid #1E1E2E',
  },
  historyAvatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: '#1E1E2E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    flexShrink: 0,
  },
  historyName: { fontSize: 15, fontWeight: 600, color: '#F1F5F9' },
  historyDate: { fontSize: 12, color: '#94A3B8', marginTop: 2 },
  historyAmount: { fontSize: 15, fontWeight: 700, color: '#FF4D6A', marginLeft: 'auto' },
};

export default function TransfersPage() {
  const [selectedAccount, setSelectedAccount] = useState('galicia');
  const [recipient, setRecipient] = useState('');
  const [selectedContact, setSelectedContact] = useState('');
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('Varios');

  const handleContactChip = (contact: { id: string; name: string }) => {
    if (selectedContact === contact.id) {
      setSelectedContact('');
      setRecipient('');
    } else {
      setSelectedContact(contact.id);
      setRecipient(contact.name);
    }
  };

  return (
    <div style={s.page}>
      <div style={s.header}>
        <p style={s.title}>Transferir</p>
      </div>

      {/* Account selector */}
      <div style={s.section}>
        <div style={s.label}>Cuenta origen</div>
        <div style={s.accountsRow}>
          {accounts.map((acc) => (
            <div
              key={acc.id}
              style={selectedAccount === acc.id ? s.accountCardActive : s.accountCard}
              onClick={() => setSelectedAccount(acc.id)}
            >
              <div style={s.accountName}>{acc.name}</div>
              <div style={s.accountBal}>${fmt(acc.balance)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipient */}
      <div style={s.section}>
        <div style={s.label}>Destinatario</div>
        <input
          style={s.recipientInput}
          type="text"
          placeholder="Nombre, CBU o alias"
          value={recipient}
          onChange={(e: { target: { value: string } }) => {
            setRecipient(e.target.value);
            setSelectedContact('');
          }}
        />
        <div style={s.chipsRow}>
          {contacts.map((c) => (
            <span
              key={c.id}
              style={selectedContact === c.id ? s.chipActive : s.chip}
              onClick={() => handleContactChip(c)}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>

      {/* Amount */}
      <div style={s.amountWrapper}>
        <div style={s.amountPrefix}>ARS $</div>
        <input
          style={s.amountInput}
          type="text"
          inputMode="decimal"
          placeholder="0"
          value={amount}
          onChange={(e: { target: { value: string } }) => {
            const val = e.target.value;
            if (/^\d*([.,]\d{0,2})?$/.test(val)) setAmount(val);
          }}
        />
        <div style={s.amountDivider} />
      </div>

      {/* Concept */}
      <div style={{ ...s.section, marginTop: 20 }}>
        <div style={s.label}>Concepto</div>
        <select
          style={s.select}
          value={concept}
          onChange={(e: { target: { value: string } }) => setConcept(e.target.value)}
        >
          {concepts.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* CTA */}
      <button style={s.ctaBtn}>Confirmar transferencia</button>

      {/* Recent history */}
      <p style={s.sectionTitle as CSSProperties}>Recientes</p>
      {history.map((h) => (
        <div key={h.id} style={s.historyItem}>
          <div style={s.historyAvatar}>💸</div>
          <div>
            <div style={s.historyName}>{h.name}</div>
            <div style={s.historyDate}>{h.date}</div>
          </div>
          <div style={s.historyAmount}>-${fmt(h.amount)}</div>
        </div>
      ))}
    </div>
  );
}
