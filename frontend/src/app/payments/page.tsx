'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';

type Tab = 'servicios' | 'tarjetas' | 'impuestos' | 'qr';

const servicios = [
  { id: 's1', name: 'Edenor', icon: '⚡', amount: 15420 },
  { id: 's2', name: 'Metrogas', icon: '🔥', amount: 8730 },
  { id: 's3', name: 'Telecentro', icon: '📡', amount: 6899 },
  { id: 's4', name: 'Personal', icon: '📱', amount: 3200 },
];

const tarjetas = [
  { id: 't1', name: 'Visa Galicia', icon: '💳', color: '#1A1F71', minPayment: 45320, totalPayment: 187450 },
  { id: 't2', name: 'Mastercard Santander', icon: '💳', color: '#EB001B', minPayment: 12800, totalPayment: 67200 },
];

const impuestos = [
  { id: 'i1', name: 'ARBA', icon: '🏛️', amount: 12400 },
  { id: 'i2', name: 'AGIP', icon: '🏙️', amount: 8900 },
  { id: 'i3', name: 'Monotributo', icon: '📋', amount: 18500 },
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
  header: { padding: '20px 20px 0' },
  title: { fontSize: 22, fontWeight: 700, color: '#F1F5F9', margin: 0 },
  tabBar: {
    display: 'flex',
    gap: 0,
    padding: '16px 20px 0',
    borderBottom: '1px solid #1E1E2E',
  },
  tab: {
    flex: 1,
    background: 'none',
    border: 'none',
    borderBottom: '2px solid transparent',
    padding: '10px 4px',
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
    textAlign: 'center',
  },
  tabActive: {
    flex: 1,
    background: 'none',
    border: 'none',
    borderBottom: '2px solid #6C63FF',
    padding: '10px 4px',
    color: '#6C63FF',
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
    textAlign: 'center',
  },
  serviceRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 20px',
    borderBottom: '1px solid #1E1E2E',
    gap: 14,
  },
  serviceIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#1E1E2E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    flexShrink: 0,
  },
  serviceName: { fontSize: 15, fontWeight: 600, color: '#F1F5F9' },
  serviceAmount: { fontSize: 13, color: '#94A3B8', marginTop: 2 },
  pagarBtn: {
    marginLeft: 'auto',
    backgroundColor: '#6C63FF',
    border: 'none',
    borderRadius: 10,
    padding: '8px 16px',
    color: '#fff',
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
    flexShrink: 0,
  },
  cardItem: {
    margin: '14px 20px',
    backgroundColor: '#12121A',
    borderRadius: 16,
    padding: 18,
    border: '1px solid #1E1E2E',
  },
  cardHeader: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 },
  cardIcon: { fontSize: 24 },
  cardName: { fontSize: 15, fontWeight: 700, color: '#F1F5F9' },
  progressTrack: {
    width: '100%',
    height: 6,
    backgroundColor: '#1E1E2E',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 10,
  },
  cardLabel: { fontSize: 12, color: '#94A3B8' },
  cardValue: { fontSize: 14, fontWeight: 700, color: '#F1F5F9' },
  pagarCardBtn: {
    width: '100%',
    marginTop: 14,
    backgroundColor: '#6C63FF',
    border: 'none',
    borderRadius: 12,
    padding: '12px',
    color: '#fff',
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
  },
  impRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 20px',
    borderBottom: '1px solid #1E1E2E',
    gap: 14,
  },
  qrContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '28px 20px 0',
    gap: 20,
  },
  qrArea: {
    width: 220,
    height: 220,
    borderRadius: 20,
    backgroundColor: '#12121A',
    border: '2px dashed #1E1E2E',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  qrIcon: { fontSize: 56 },
  qrLabel: { fontSize: 14, color: '#94A3B8', textAlign: 'center' },
  qrInput: {
    width: '100%',
    backgroundColor: '#12121A',
    border: '1.5px solid #1E1E2E',
    borderRadius: 14,
    padding: '14px 16px',
    color: '#F1F5F9',
    fontSize: 15,
    outline: 'none',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  qrBtn: {
    width: '100%',
    backgroundColor: '#6C63FF',
    border: 'none',
    borderRadius: 14,
    padding: '16px',
    color: '#fff',
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
  },
};

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('servicios');
  const [qrCode, setQrCode] = useState('');
  const [paidIds, setPaidIds] = useState<Set<string>>(new Set());

  const handlePay = (id: string) => {
    setPaidIds((prev: Set<string>) => new Set([...prev, id]));
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: 'servicios', label: 'Servicios' },
    { key: 'tarjetas', label: 'Tarjetas' },
    { key: 'impuestos', label: 'Impuestos' },
    { key: 'qr', label: 'QR' },
  ];

  return (
    <div style={s.page}>
      <div style={s.header}>
        <p style={s.title}>Pagos</p>
      </div>

      {/* Tab bar */}
      <div style={s.tabBar}>
        {tabs.map((t) => (
          <button
            key={t.key}
            style={activeTab === t.key ? s.tabActive : s.tab}
            onClick={() => setActiveTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Servicios */}
      {activeTab === 'servicios' && (
        <div style={{ marginTop: 8 }}>
          {servicios.map((sv) => (
            <div key={sv.id} style={s.serviceRow}>
              <div style={s.serviceIcon}>{sv.icon}</div>
              <div>
                <div style={s.serviceName}>{sv.name}</div>
                <div style={s.serviceAmount}>${fmt(sv.amount)}</div>
              </div>
              <button
                style={paidIds.has(sv.id) ? { ...s.pagarBtn, backgroundColor: '#00D48B' } : s.pagarBtn}
                onClick={() => handlePay(sv.id)}
              >
                {paidIds.has(sv.id) ? '✓ Pagado' : 'Pagar'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Tarjetas */}
      {activeTab === 'tarjetas' && (
        <div style={{ marginTop: 8 }}>
          {tarjetas.map((card) => {
            const pct = card.totalPayment > 0 ? Math.round((card.minPayment / card.totalPayment) * 100) : 0;
            return (
              <div key={card.id} style={s.cardItem}>
                <div style={s.cardHeader}>
                  <span style={s.cardIcon}>{card.icon}</span>
                  <span style={s.cardName}>{card.name}</span>
                </div>
                <div style={s.progressTrack}>
                  <div style={{ height: '100%', width: `${pct}%`, backgroundColor: '#6C63FF', borderRadius: 3 }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div>
                    <div style={s.cardLabel}>Pago mínimo</div>
                    <div style={s.cardValue}>${fmt(card.minPayment)}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={s.cardLabel}>Total a pagar</div>
                    <div style={s.cardValue}>${fmt(card.totalPayment)}</div>
                  </div>
                </div>
                <button
                  style={paidIds.has(card.id) ? { ...s.pagarCardBtn, backgroundColor: '#00D48B' } : s.pagarCardBtn}
                  onClick={() => handlePay(card.id)}
                >
                  {paidIds.has(card.id) ? '✓ Pagado' : 'Pagar tarjeta'}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Impuestos */}
      {activeTab === 'impuestos' && (
        <div style={{ marginTop: 8 }}>
          {impuestos.map((imp) => (
            <div key={imp.id} style={s.impRow}>
              <div style={s.serviceIcon}>{imp.icon}</div>
              <div>
                <div style={s.serviceName}>{imp.name}</div>
                <div style={s.serviceAmount}>${fmt(imp.amount)}</div>
              </div>
              <button
                style={paidIds.has(imp.id) ? { ...s.pagarBtn, backgroundColor: '#00D48B' } : s.pagarBtn}
                onClick={() => handlePay(imp.id)}
              >
                {paidIds.has(imp.id) ? '✓ Pagado' : 'Pagar'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* QR */}
      {activeTab === 'qr' && (
        <div style={s.qrContainer}>
          <div style={s.qrArea}>
            <span style={s.qrIcon}>📷</span>
            <span style={s.qrLabel}>Apuntá la cámara<br/>al código QR</span>
          </div>
          <p style={{ color: '#94A3B8', fontSize: 13, margin: 0 }}>— o ingresá el código manualmente —</p>
          <input
            style={s.qrInput}
            type="text"
            placeholder="Pegá el código QR aquí"
            value={qrCode}
            onChange={(e: { target: { value: string } }) => setQrCode(e.target.value)}
          />
          <button style={s.qrBtn}>Confirmar pago QR</button>
        </div>
      )}
    </div>
  );
}
