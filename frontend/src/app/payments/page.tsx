'use client';

import { useState } from 'react';

type Tab = 'servicios' | 'tarjetas' | 'impuestos' | 'qr';

const services = [
  { name: 'Edenor', due: 'Vence 30 abr', amount: 15420 },
  { name: 'Metrogas', due: 'Vence 5 may', amount: 8730 },
  { name: 'Telecentro', due: 'Vence 12 may', amount: 6899 },
  { name: 'Personal', due: 'Vence 15 may', amount: 3200 },
];

const cards = [
  {
    name: 'Visa Galicia',
    due: 'Vence 10 may',
    minimum: 45320,
    total: 187450,
  },
  {
    name: 'Mastercard Santander',
    due: 'Vence 15 may',
    minimum: 12800,
    total: 67200,
  },
];

const fmt = (n: number) =>
  n.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('servicios');
  const [qrInput, setQrInput] = useState('');
  const [paidServices, setPaidServices] = useState<string[]>([]);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'tarjetas', label: 'Tarjetas' },
    { id: 'impuestos', label: 'Impuestos' },
    { id: 'qr', label: 'QR' },
  ];

  const s: Record<string, React.CSSProperties> = {
    page: {
      backgroundColor: '#0A0A0F',
      minHeight: '100vh',
      paddingBottom: 80,
      maxWidth: 430,
      margin: '0 auto',
      color: '#F1F5F9',
    },
    header: { padding: '20px 20px 8px' },
    title: { fontSize: 22, fontWeight: 700, color: '#F1F5F9', margin: 0 },
    tabsContainer: {
      display: 'flex',
      gap: 0,
      margin: '16px 20px',
      backgroundColor: '#12121A',
      borderRadius: 12,
      padding: 4,
    },
    tab: {
      flex: 1,
      padding: '9px 4px',
      border: 'none',
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.15s',
      fontFamily: 'inherit',
    },
    tabActive: {
      backgroundColor: '#6C63FF',
      color: '#fff',
      fontWeight: 700,
    },
    tabInactive: {
      backgroundColor: 'transparent',
      color: '#64748B',
    },
    serviceCard: {
      margin: '0 20px 10px',
      backgroundColor: '#12121A',
      borderRadius: 14,
      padding: '14px 16px',
      border: '1px solid #1E1E2E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    serviceName: { fontSize: 15, fontWeight: 600, color: '#F1F5F9' },
    serviceDue: { fontSize: 12, color: '#64748B', marginTop: 2 },
    serviceAmt: { fontSize: 15, fontWeight: 700, color: '#F1F5F9', marginBottom: 6, textAlign: 'right' as const },
    payBtn: {
      backgroundColor: '#6C63FF',
      border: 'none',
      borderRadius: 10,
      padding: '7px 16px',
      color: '#fff',
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'inherit',
    },
    paidBtn: {
      backgroundColor: '#00D48B22',
      border: '1px solid #00D48B44',
      borderRadius: 10,
      padding: '7px 16px',
      color: '#00D48B',
      fontSize: 13,
      fontWeight: 700,
      cursor: 'default',
      fontFamily: 'inherit',
    },
    addServiceBtn: {
      margin: '4px 20px 0',
      width: 'calc(100% - 40px)',
      backgroundColor: 'transparent',
      border: '1.5px dashed #1E1E2E',
      borderRadius: 14,
      padding: '15px',
      color: '#64748B',
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: 'inherit',
    },
    cardItem: {
      margin: '0 20px 12px',
      backgroundColor: '#12121A',
      borderRadius: 16,
      padding: 16,
      border: '1px solid #1E1E2E',
    },
    cardName: { fontSize: 16, fontWeight: 700, color: '#F1F5F9', marginBottom: 2 },
    cardDue: { fontSize: 12, color: '#64748B', marginBottom: 12 },
    cardRow: { display: 'flex', justifyContent: 'space-between', marginBottom: 6 },
    cardLabel: { fontSize: 13, color: '#94A3B8' },
    cardValue: { fontSize: 14, fontWeight: 600, color: '#F1F5F9' },
    progressBar: {
      backgroundColor: '#1E1E2E',
      borderRadius: 6,
      height: 6,
      marginTop: 10,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      borderRadius: 6,
      backgroundColor: '#6C63FF',
    },
    qrContainer: {
      margin: '20px',
      backgroundColor: '#12121A',
      borderRadius: 20,
      padding: 24,
      border: '1px solid #1E1E2E',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
    },
    qrBox: {
      width: 200,
      height: 200,
      position: 'relative' as const,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    qrCorner: {
      position: 'absolute' as const,
      width: 28,
      height: 28,
      borderColor: '#6C63FF',
      borderStyle: 'solid',
    },
    qrText: {
      fontSize: 14,
      color: '#94A3B8',
      textAlign: 'center' as const,
    },
    divider: {
      width: '100%',
      textAlign: 'center' as const,
      fontSize: 13,
      color: '#64748B',
      margin: '16px 0',
      position: 'relative' as const,
    },
    qrInput: {
      width: '100%',
      backgroundColor: '#0A0A0F',
      border: '1px solid #1E1E2E',
      borderRadius: 12,
      padding: '14px 16px',
      color: '#F1F5F9',
      fontSize: 15,
      fontFamily: 'inherit',
      outline: 'none',
      boxSizing: 'border-box' as const,
    },
    taxPlaceholder: {
      margin: '40px 20px',
      textAlign: 'center' as const,
      color: '#64748B',
    },
  };

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <p style={s.title}>Pagos</p>
      </div>

      {/* Tabs */}
      <div style={s.tabsContainer}>
        {tabs.map((t) => (
          <button
            key={t.id}
            style={{ ...s.tab, ...(activeTab === t.id ? s.tabActive : s.tabInactive) }}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab: Servicios */}
      {activeTab === 'servicios' && (
        <>
          {services.map((svc) => (
            <div key={svc.name} style={s.serviceCard}>
              <div>
                <div style={s.serviceName}>{svc.name}</div>
                <div style={s.serviceDue}>{svc.due}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={s.serviceAmt}>${fmt(svc.amount)}</div>
                {paidServices.includes(svc.name) ? (
                  <button style={s.paidBtn}>✓ Pagado</button>
                ) : (
                  <button
                    style={s.payBtn}
                    onClick={() => setPaidServices([...paidServices, svc.name])}
                  >
                    Pagar
                  </button>
                )}
              </div>
            </div>
          ))}
          <button style={s.addServiceBtn}>+ Agregar servicio</button>
        </>
      )}

      {/* Tab: Tarjetas */}
      {activeTab === 'tarjetas' && (
        <>
          {cards.map((card) => {
            const pct = Math.min(100, Math.round((card.minimum / card.total) * 100));
            return (
              <div key={card.name} style={s.cardItem}>
                <div style={s.cardName}>{card.name}</div>
                <div style={s.cardDue}>{card.due}</div>
                <div style={s.cardRow}>
                  <span style={s.cardLabel}>Pago mínimo</span>
                  <span style={{ ...s.cardValue, color: '#FF4D6A' }}>${fmt(card.minimum)}</span>
                </div>
                <div style={s.cardRow}>
                  <span style={s.cardLabel}>Total a pagar</span>
                  <span style={s.cardValue}>${fmt(card.total)}</span>
                </div>
                <div style={s.progressBar}>
                  <div style={{ ...s.progressFill, width: `${pct}%` }} />
                </div>
                <div style={{ fontSize: 11, color: '#64748B', marginTop: 4 }}>
                  Mínimo es el {pct}% del total
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* Tab: Impuestos */}
      {activeTab === 'impuestos' && (
        <div style={s.taxPlaceholder}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🏛️</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#F1F5F9', marginBottom: 8 }}>
            Impuestos y tasas
          </div>
          <div style={{ fontSize: 14 }}>
            Próximamente: AFIP, ARBA, ABL y más.
          </div>
        </div>
      )}

      {/* Tab: QR */}
      {activeTab === 'qr' && (
        <div style={s.qrContainer}>
          <div style={s.qrBox}>
            {/* Corners */}
            <div style={{ ...s.qrCorner, top: 0, left: 0, borderWidth: '3px 0 0 3px', borderRadius: '6px 0 0 0' }} />
            <div style={{ ...s.qrCorner, top: 0, right: 0, borderWidth: '3px 3px 0 0', borderRadius: '0 6px 0 0' }} />
            <div style={{ ...s.qrCorner, bottom: 0, left: 0, borderWidth: '0 0 3px 3px', borderRadius: '0 0 0 6px' }} />
            <div style={{ ...s.qrCorner, bottom: 0, right: 0, borderWidth: '0 3px 3px 0', borderRadius: '0 0 6px 0' }} />
            {/* QR placeholder grid */}
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
              <rect x="10" y="10" width="50" height="50" rx="4" fill="#1E1E2E" stroke="#6C63FF" strokeWidth="2"/>
              <rect x="20" y="20" width="30" height="30" rx="2" fill="#6C63FF" opacity="0.6"/>
              <rect x="80" y="10" width="50" height="50" rx="4" fill="#1E1E2E" stroke="#6C63FF" strokeWidth="2"/>
              <rect x="90" y="20" width="30" height="30" rx="2" fill="#6C63FF" opacity="0.6"/>
              <rect x="10" y="80" width="50" height="50" rx="4" fill="#1E1E2E" stroke="#6C63FF" strokeWidth="2"/>
              <rect x="20" y="90" width="30" height="30" rx="2" fill="#6C63FF" opacity="0.6"/>
              <rect x="70" y="70" width="8" height="8" rx="1" fill="#6C63FF" opacity="0.5"/>
              <rect x="82" y="70" width="8" height="8" rx="1" fill="#6C63FF" opacity="0.5"/>
              <rect x="94" y="70" width="8" height="8" rx="1" fill="#6C63FF" opacity="0.5"/>
              <rect x="106" y="70" width="8" height="8" rx="1" fill="#6C63FF" opacity="0.5"/>
              <rect x="118" y="70" width="12" height="8" rx="1" fill="#6C63FF" opacity="0.5"/>
              <rect x="70" y="82" width="8" height="8" rx="1" fill="#6C63FF" opacity="0.5"/>
              <rect x="82" y="82" width="20" height="8" rx="1" fill="#6C63FF" opacity="0.5"/>
              <rect x="106" y="82" width="8" height="8" rx="1" fill="#6C63FF" opacity="0.5"/>
            </svg>
          </div>
          <div style={s.qrText}>Escaneá el QR para pagar</div>

          <div style={{ ...s.divider, width: '100%' }}>
            <span style={{ background: '#12121A', padding: '0 12px', position: 'relative', zIndex: 1 }}>O ingresá el código</span>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, backgroundColor: '#1E1E2E', zIndex: 0 }} />
          </div>

          <input
            style={s.qrInput}
            type="text"
            placeholder="Código QR manual"
            value={qrInput}
            onChange={(e) => setQrInput(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

