'use client';

import React, { useState } from 'react';

const accounts = [
  { id: 'gal', label: 'Galicia', type: 'CA', balance: 312450.0 },
  { id: 'bru', label: 'Brubank', type: 'Digital', balance: 284870.5 },
  { id: 'san', label: 'Santander', type: 'CA', balance: 250000.0 },
];

const contacts = [
  { initials: 'JR', name: 'Juan R.' },
  { initials: 'MG', name: 'María G.' },
  { initials: 'PL', name: 'Pedro L.' },
  { initials: 'ES', name: 'Empresa SA' },
];

const concepts = ['Varios', 'Alquiler', 'Honorarios', 'Cuota', 'Préstamo'];

const history = [
  { name: 'Juliana Torres', amount: '$25,000', time: 'hace 2 días' },
  { name: 'Netflix AR', amount: '$4,200', time: 'hace 5 días' },
  { name: 'Pedro López', amount: '$10,000', time: 'hace 1 semana' },
];

const fmt = (n: number) =>
  n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function TransfersPage() {
  const [selectedAccount, setSelectedAccount] = useState('gal');
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('Varios');
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const s: Record<string, React.CSSProperties> = {
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
      justifyContent: 'space-between',
      padding: '20px 20px 16px',
    },
    headerLeft: { display: 'flex', alignItems: 'center', gap: 10 },
    backBtn: {
      background: 'none',
      border: 'none',
      color: '#F1F5F9',
      fontSize: 20,
      cursor: 'pointer',
      padding: 0,
      lineHeight: 1,
    },
    headerTitle: { fontSize: 20, fontWeight: 700, color: '#F1F5F9', margin: 0 },
    historyBtn: {
      background: '#1E1E2E',
      border: 'none',
      borderRadius: 10,
      padding: '8px 10px',
      color: '#94A3B8',
      cursor: 'pointer',
      fontSize: 16,
    },
    section: { padding: '0 20px 16px' },
    sectionLabel: {
      fontSize: 12,
      fontWeight: 600,
      color: '#94A3B8',
      textTransform: 'uppercase' as const,
      letterSpacing: 1,
      marginBottom: 10,
    },
    card: {
      backgroundColor: '#12121A',
      borderRadius: 16,
      border: '1px solid #1E1E2E',
      overflow: 'hidden',
    },
    selectEl: {
      width: '100%',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#F1F5F9',
      fontSize: 15,
      padding: '16px',
      cursor: 'pointer',
      outline: 'none',
      appearance: 'none' as const,
      WebkitAppearance: 'none' as const,
    },
    selectWrapper: {
      position: 'relative' as const,
      backgroundColor: '#12121A',
      borderRadius: 16,
      border: '1px solid #1E1E2E',
    },
    selectArrow: {
      position: 'absolute' as const,
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#94A3B8',
      pointerEvents: 'none' as const,
      fontSize: 14,
    },
    inputField: {
      width: '100%',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#F1F5F9',
      fontSize: 15,
      padding: '16px',
      outline: 'none',
      boxSizing: 'border-box' as const,
    },
    contactsRow: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto' as const,
      padding: '8px 20px 16px',
      scrollbarWidth: 'none' as const,
    },
    contactChip: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: 6,
      minWidth: 60,
      cursor: 'pointer',
    },
    contactAvatar: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 700,
    },
    contactName: { fontSize: 11, color: '#94A3B8', textAlign: 'center' as const },
    amountSection: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      padding: '8px 20px 20px',
    },
    amountLabel: { fontSize: 13, color: '#94A3B8', marginBottom: 8 },
    amountRow: { display: 'flex', alignItems: 'center', gap: 4 },
    amountSign: { fontSize: 36, fontWeight: 700, color: '#94A3B8', lineHeight: 1 },
    amountInput: {
      background: 'none',
      border: 'none',
      color: '#F1F5F9',
      fontSize: 52,
      fontWeight: 800,
      width: '100%',
      textAlign: 'center' as const,
      outline: 'none',
      caretColor: '#6C63FF',
      fontVariantNumeric: 'tabular-nums' as const,
    },
    conceptRow: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto' as const,
      padding: '0 20px 20px',
      scrollbarWidth: 'none' as const,
    },
    conceptChip: {
      padding: '8px 16px',
      borderRadius: 20,
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      whiteSpace: 'nowrap' as const,
      border: '1.5px solid transparent',
      transition: 'all 0.15s',
    },
    ctaBtn: {
      margin: '0 20px 24px',
      width: 'calc(100% - 40px)',
      backgroundColor: '#6C63FF',
      border: 'none',
      borderRadius: 16,
      padding: '17px',
      color: '#fff',
      fontSize: 16,
      fontWeight: 700,
      cursor: 'pointer',
      boxSizing: 'border-box' as const,
    },
    historySection: { padding: '0 20px' },
    historyTitle: {
      fontSize: 14,
      fontWeight: 600,
      color: '#94A3B8',
      textTransform: 'uppercase' as const,
      letterSpacing: 1,
      marginBottom: 12,
    },
    historyItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 16px',
      backgroundColor: '#12121A',
      borderRadius: 14,
      marginBottom: 8,
      border: '1px solid #1E1E2E',
    },
    historyName: { fontSize: 15, fontWeight: 600, color: '#F1F5F9' },
    historyTime: { fontSize: 12, color: '#94A3B8', marginTop: 2 },
    historyRight: { display: 'flex', alignItems: 'center', gap: 10 },
    historyAmount: { fontSize: 15, fontWeight: 700, color: '#F1F5F9' },
    historyArrow: { color: '#6C63FF', fontSize: 16 },
  };

  const selectedAcc = accounts.find((a) => a.id === selectedAccount)!;

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <div style={s.headerLeft}>
          <button style={s.backBtn} aria-label="Volver">←</button>
          <p style={s.headerTitle}>Transferir</p>
        </div>
        <button style={s.historyBtn} aria-label="Historial">🕐</button>
      </div>

      {/* Desde */}
      <div style={s.section}>
        <p style={s.sectionLabel}>Desde</p>
        <div style={s.selectWrapper}>
          <select
            style={s.selectEl}
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
          >
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.id} style={{ backgroundColor: '#12121A' }}>
                {acc.label} | {acc.type} | ${fmt(acc.balance)}
              </option>
            ))}
          </select>
          <span style={s.selectArrow}>▾</span>
        </div>
        <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 6, marginLeft: 4 }}>
          Saldo disponible: ${fmt(selectedAcc.balance)}
        </p>
      </div>

      {/* Para */}
      <div style={s.section}>
        <p style={s.sectionLabel}>Para</p>
        <div style={s.card}>
          <input
            type="text"
            style={s.inputField}
            placeholder="CBU / CVU / Alias"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
      </div>

      {/* Contacts */}
      <div style={s.contactsRow}>
        {contacts.map((c) => {
          const isSelected = selectedContact === c.initials;
          return (
            <div
              key={c.initials}
              style={s.contactChip}
              onClick={() => {
                setSelectedContact(isSelected ? null : c.initials);
                if (!isSelected) setDestination(c.name);
              }}
            >
              <div
                style={{
                  ...s.contactAvatar,
                  backgroundColor: isSelected ? '#6C63FF' : '#1E1E2E',
                  color: isSelected ? '#fff' : '#94A3B8',
                  border: isSelected ? '2px solid #6C63FF' : '2px solid transparent',
                }}
              >
                {c.initials}
              </div>
              <span style={{ ...s.contactName, color: isSelected ? '#F1F5F9' : '#94A3B8' }}>
                {c.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Amount */}
      <div style={s.amountSection}>
        <p style={s.amountLabel}>Ingresá el monto</p>
        <div style={s.amountRow}>
          <span style={s.amountSign}>$</span>
          <input
            type="number"
            inputMode="decimal"
            style={s.amountInput}
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      {/* Concept */}
      <div style={s.conceptRow}>
        {concepts.map((c) => {
          const active = concept === c;
          return (
            <button
              key={c}
              style={{
                ...s.conceptChip,
                backgroundColor: active ? '#6C63FF22' : '#12121A',
                color: active ? '#6C63FF' : '#94A3B8',
                borderColor: active ? '#6C63FF' : '#1E1E2E',
              }}
              onClick={() => setConcept(c)}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <button style={s.ctaBtn}>Confirmar transferencia</button>

      {/* History */}
      <div style={s.historySection}>
        <p style={s.historyTitle}>Recientes</p>
        {history.map((h) => (
          <div key={h.name} style={s.historyItem}>
            <div>
              <div style={s.historyName}>{h.name}</div>
              <div style={s.historyTime}>{h.time}</div>
            </div>
            <div style={s.historyRight}>
              <span style={s.historyAmount}>{h.amount}</span>
              <span style={s.historyArrow}>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
