'use client';

import React, { useState } from 'react';

const TABS = ['Servicios', 'Tarjetas', 'Impuestos', 'QR'];

const services = [
  { color: '#F59E0B', name: 'Edenor', due: 'Vence 30 abr', amount: '$15,420' },
  { color: '#3B82F6', name: 'Metrogas', due: 'Vence 5 may', amount: '$8,730' },
  { color: '#10B981', name: 'Telecentro', due: 'Vence 12 may', amount: '$6,899' },
  { color: '#EF4444', name: 'Personal', due: 'Vence 15 may', amount: '$3,200' },
];

const cards = [
  {
    brand: 'Visa',
    bank: 'Galicia',
    due: '10 may',
    min: 45320,
    total: 187450,
    pct: 24,
  },
  {
    brand: 'Mastercard',
    bank: 'Santander',
    due: '15 may',
    min: 12800,
    total: 67200,
    pct: 19,
  },
];

const taxes = [
  { name: 'ARBA', amount: '$12,400', due: 'Vence 20 may' },
  { name: 'AGIP', amount: '$8,900', due: 'Vence 1 jun' },
  { name: 'Monotributo', amount: '$18,500', due: 'Vence 20 may' },
];

const fmt = (n: number) =>
  n.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [qrCode, setQrCode] = useState('');

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
    title: { fontSize: 22, fontWeight: 700, color: '#F1F5F9', margin: 0 },
    searchBtn: {
      background: '#1E1E2E',
      border: 'none',
      borderRadius: 10,
      padding: '8px 10px',
      color: '#94A3B8',
      cursor: 'pointer',
      fontSize: 16,
    },
    tabsRow: {
      display: 'flex',
      borderBottom: '1px solid #1E1E2E',
      margin: '0 20px',
      gap: 0,
    },
    tab: {
      flex: 1,
      padding: '12px 0',
      background: 'none',
      border: 'none',
      color: '#94A3B8',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      borderBottom: '2px solid transparent',
      transition: 'all 0.15s',
      marginBottom: -1,
    },
    tabActive: {
      color: '#6C63FF',
      borderBottom: '2px solid #6C63FF',
    },
    content: { padding: '16px 20px 0' },
    serviceRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      backgroundColor: '#12121A',
      borderRadius: 14,
      padding: '14px 16px',
      marginBottom: 8,
      border: '1px solid #1E1E2E',
    },
    serviceIcon: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      flexShrink: 0,
    },
    serviceName: { fontSize: 15, fontWeight: 600, color: '#F1F5F9' },
    serviceDue: { fontSize: 12, color: '#94A3B8', marginTop: 2 },
    serviceAmount: { fontSize: 15, fontWeight: 700, color: '#F1F5F9', marginLeft: 'auto' },
    pagarBtn: {
      backgroundColor: '#6C63FF',
      border: 'none',
      borderRadius: 8,
      padding: '7px 14px',
      color: '#fff',
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer',
      flexShrink: 0,
    },
    addServiceBtn: {
      width: '100%',
      backgroundColor: 'transparent',
      border: '1.5px dashed #1E1E2E',
      borderRadius: 14,
      padding: '14px',
      color: '#94A3B8',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      marginTop: 8,
    },
    cardEl: {
      backgroundColor: '#12121A',
      borderRadius: 16,
      padding: 18,
      border: '1px solid #1E1E2E',
      marginBottom: 12,
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    cardBrand: { fontSize: 16, fontWeight: 700, color: '#F1F5F9' },
    cardDue: { fontSize: 12, color: '#94A3B8' },
    cardAmounts: { display: 'flex', justifyContent: 'space-between', marginBottom: 10 },
    cardAmt: { fontSize: 12, color: '#94A3B8' },
    cardAmtVal: { fontSize: 14, fontWeight: 700, color: '#F1F5F9' },
    progressTrack: {
      height: 6,
      backgroundColor: '#1E1E2E',
      borderRadius: 3,
      marginBottom: 14,
      overflow: 'hidden',
    },
    cardBtns: { display: 'flex', gap: 8 },
    cardBtn: {
      flex: 1,
      backgroundColor: '#1E1E2E',
      border: 'none',
      borderRadius: 10,
      padding: '9px 0',
      color: '#94A3B8',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
    },
    taxRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#12121A',
      borderRadius: 14,
      padding: '14px 16px',
      marginBottom: 8,
      border: '1px solid #1E1E2E',
    },
    taxName: { fontSize: 15, fontWeight: 700, color: '#F1F5F9' },
    taxDue: { fontSize: 12, color: '#94A3B8', marginTop: 2 },
    taxAmount: { fontSize: 15, fontWeight: 700, color: '#F1F5F9' },
    qrBox: {
      margin: '12px auto',
      width: '100%',
      aspectRatio: '1 / 1',
      maxWidth: 280,
      display: 'flex' as const,
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px dashed #6C63FF',
      borderRadius: 24,
      position: 'relative' as const,
      backgroundColor: '#12121A',
    },
    qrCorner: {
      position: 'absolute' as const,
      width: 20,
      height: 20,
      border: '3px solid #6C63FF',
    },
    qrText: { fontSize: 18, marginBottom: 8 },
    qrSub: { fontSize: 13, color: '#94A3B8', textAlign: 'center' as const },
    divider: {
      textAlign: 'center' as const,
      color: '#94A3B8',
      fontSize: 12,
      margin: '16px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    dividerLine: { flex: 1, height: 1, backgroundColor: '#1E1E2E' },
    qrInput: {
      width: '100%',
      backgroundColor: '#12121A',
      border: '1px solid #1E1E2E',
      borderRadius: 14,
      padding: '14px 16px',
      color: '#F1F5F9',
      fontSize: 15,
      outline: 'none',
      boxSizing: 'border-box' as const,
      marginBottom: 12,
    },
    confirmBtn: {
      width: '100%',
      backgroundColor: '#6C63FF',
      border: 'none',
      borderRadius: 14,
      padding: '15px',
      color: '#fff',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer',
    },
  };

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <p style={s.title}>Pagos</p>
        <button style={s.searchBtn} aria-label="Buscar">🔍</button>
      </div>

      {/* Tabs */}
      <div style={s.tabsRow}>
        {TABS.map((tab, i) => (
          <button
            key={tab}
            style={{ ...s.tab, ...(activeTab === i ? s.tabActive : {}) }}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab 0: Servicios */}
      {activeTab === 0 && (
        <div style={s.content}>
          {services.map((svc) => (
            <div key={svc.name} style={s.serviceRow}>
              <div style={{ ...s.serviceIcon, backgroundColor: svc.color }} />
              <div style={{ flex: 1 }}>
                <div style={s.serviceName}>{svc.name}</div>
                <div style={s.serviceDue}>{svc.due}</div>
              </div>
              <span style={s.serviceAmount}>{svc.amount}</span>
              <button style={s.pagarBtn}>Pagar</button>
            </div>
          ))}
          <button style={s.addServiceBtn}>＋ Agregar servicio</button>
        </div>
      )}

      {/* Tab 1: Tarjetas */}
      {activeTab === 1 && (
        <div style={s.content}>
          {cards.map((card) => (
            <div key={`${card.brand}-${card.bank}`} style={s.cardEl}>
              <div style={s.cardHeader}>
                <div>
                  <div style={s.cardBrand}>{card.brand} {card.bank}</div>
                  <div style={s.cardDue}>Vence {card.due}</div>
                </div>
              </div>
              <div style={s.cardAmounts}>
                <div>
                  <div style={s.cardAmt}>Pago mínimo</div>
                  <div style={s.cardAmtVal}>${fmt(card.min)}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={s.cardAmt}>Total a pagar</div>
                  <div style={s.cardAmtVal}>${fmt(card.total)}</div>
                </div>
              </div>
              <div style={s.progressTrack}>
                <div style={{ height: '100%', width: `${card.pct}%`, backgroundColor: '#6C63FF', borderRadius: 3 }} />
              </div>
              <div style={s.cardBtns}>
                <button style={s.cardBtn}>Mínimo</button>
                <button style={{ ...s.cardBtn, backgroundColor: '#6C63FF22', color: '#6C63FF' }}>Total</button>
                <button style={s.cardBtn}>Otro monto</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Impuestos */}
      {activeTab === 2 && (
        <div style={s.content}>
          {taxes.map((tax) => (
            <div key={tax.name} style={s.taxRow}>
              <div>
                <div style={s.taxName}>{tax.name}</div>
                <div style={s.taxDue}>{tax.due}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={s.taxAmount}>{tax.amount}</span>
                <button style={s.pagarBtn}>Pagar</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: QR */}
      {activeTab === 3 && (
        <div style={s.content}>
          <div style={s.qrBox}>
            {/* Corner brackets */}
            <div style={{ ...s.qrCorner, top: 12, left: 12, borderRight: 'none', borderBottom: 'none', borderRadius: '4px 0 0 0' }} />
            <div style={{ ...s.qrCorner, top: 12, right: 12, borderLeft: 'none', borderBottom: 'none', borderRadius: '0 4px 0 0' }} />
            <div style={{ ...s.qrCorner, bottom: 12, left: 12, borderRight: 'none', borderTop: 'none', borderRadius: '0 0 0 4px' }} />
            <div style={{ ...s.qrCorner, bottom: 12, right: 12, borderLeft: 'none', borderTop: 'none', borderRadius: '0 0 4px 0' }} />
            <div style={s.qrText}>📷</div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#F1F5F9', marginBottom: 6 }}>Escaneá el código QR</div>
            <div style={s.qrSub}>Apuntá la cámara al código</div>
          </div>
          <div style={s.divider}>
            <div style={s.dividerLine} />
            <span>o ingresá el código manualmente</span>
            <div style={s.dividerLine} />
          </div>
          <input
            type="text"
            style={s.qrInput}
            placeholder="Ingresá el código QR"
            value={qrCode}
            onChange={(e) => setQrCode(e.target.value)}
          />
          <button style={s.confirmBtn}>Confirmar</button>
        </div>
      )}
    </div>
  );
}
