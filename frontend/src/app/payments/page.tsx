'use client';

import { useState } from 'react';

type Tab = 'servicios' | 'tarjetas' | 'impuestos' | 'qr';

const servicios = [
  { id: 1, name: 'Edenor', vence: '30 abr', amount: 15420 },
  { id: 2, name: 'Metrogas', vence: '5 may', amount: 8730 },
  { id: 3, name: 'Telecentro', vence: '12 may', amount: 6899 },
  { id: 4, name: 'Personal', vence: '15 may', amount: 3200 },
];

const tarjetas = [
  { id: 1, name: 'Visa Galicia', vence: '10 may', minimo: 45320, total: 187450, color: '#1a56db' },
  { id: 2, name: 'Mastercard Santander', vence: '15 may', minimo: 12800, total: 67200, color: '#FF4D6A' },
];

const impuestos = [
  { id: 1, name: 'AFIP Ganancias', vence: '20 may', amount: 32000 },
  { id: 2, name: 'AGIP Ingresos Brutos', vence: '25 may', amount: 8500 },
  { id: 3, name: 'ABL', vence: '30 may', amount: 4200 },
];

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('servicios');
  const [qrInput, setQrInput] = useState('');
  const [paidIds, setPaidIds] = useState<number[]>([]);
  const [cardPayMode, setCardPayMode] = useState<Record<number, 'minimo' | 'total' | 'otro'>>({});

  const tabs: { id: Tab; label: string }[] = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'tarjetas', label: 'Tarjetas' },
    { id: 'impuestos', label: 'Impuestos' },
    { id: 'qr', label: 'QR' },
  ];

  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh', paddingBottom: '88px' }}>
      {/* Header */}
      <div style={{ padding: '52px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: '#f1f5f9' }}>Pagos</h1>
        <button style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', color: '#6C63FF', display: 'flex', alignItems: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div style={{ padding: '0 20px 16px', display: 'flex', gap: '8px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flexShrink: 0,
              padding: '8px 18px',
              borderRadius: '20px',
              border: activeTab === tab.id ? '1px solid #6C63FF' : '1px solid rgba(255,255,255,0.08)',
              background: activeTab === tab.id ? 'rgba(108,99,255,0.15)' : 'transparent',
              color: activeTab === tab.id ? '#6C63FF' : '#6b7280',
              fontSize: '13px',
              fontWeight: activeTab === tab.id ? 700 : 400,
              cursor: 'pointer',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 20px' }}>

        {/* Servicios Tab */}
        {activeTab === 'servicios' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {servicios.map((s) => (
              <div key={s.id} style={{ background: '#12121A', borderRadius: '16px', padding: '16px', border: '1px solid rgba(108,99,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(108,99,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                  {s.name === 'Edenor' ? '⚡' : s.name === 'Metrogas' ? '🔥' : s.name === 'Telecentro' ? '📡' : '📱'}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: '15px', color: '#f1f5f9', fontWeight: 600 }}>{s.name}</p>
                  <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#6b7280' }}>Vence {s.vence}</p>
                  <p style={{ margin: '2px 0 0', fontSize: '14px', color: '#f1f5f9', fontWeight: 700 }}>
                    ${s.amount.toLocaleString('es-AR')}
                  </p>
                </div>
                <button
                  onClick={() => setPaidIds((prev) => prev.includes(s.id) ? prev : [...prev, s.id])}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    border: 'none',
                    background: paidIds.includes(s.id) ? 'rgba(0,212,139,0.15)' : '#6C63FF',
                    color: paidIds.includes(s.id) ? '#00D48B' : '#fff',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                >
                  {paidIds.includes(s.id) ? '✓ Pagado' : 'Pagar'}
                </button>
              </div>
            ))}
            <button style={{ width: '100%', padding: '14px', background: 'transparent', border: '1px dashed rgba(108,99,255,0.3)', borderRadius: '16px', color: '#6C63FF', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
              + Agregar servicio
            </button>
          </div>
        )}

        {/* Tarjetas Tab */}
        {activeTab === 'tarjetas' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {tarjetas.map((t) => {
              const pct = Math.round((t.minimo / t.total) * 100);
              const mode = cardPayMode[t.id];
              return (
                <div key={t.id} style={{ background: '#12121A', borderRadius: '20px', padding: '20px', border: '1px solid rgba(108,99,255,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <p style={{ margin: 0, fontSize: '16px', color: '#f1f5f9', fontWeight: 700 }}>{t.name}</p>
                      <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#6b7280' }}>Vence {t.vence}</p>
                    </div>
                    <div style={{ width: 40, height: 26, borderRadius: '6px', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '10px', color: '#fff', fontWeight: 700 }}>💳</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div>
                      <p style={{ margin: 0, fontSize: '11px', color: '#6b7280' }}>Pago mínimo</p>
                      <p style={{ margin: '2px 0 0', fontSize: '15px', color: '#FF4D6A', fontWeight: 700 }}>
                        ${t.minimo.toLocaleString('es-AR')}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ margin: 0, fontSize: '11px', color: '#6b7280' }}>Total a pagar</p>
                      <p style={{ margin: '2px 0 0', fontSize: '15px', color: '#f1f5f9', fontWeight: 700 }}>
                        ${t.total.toLocaleString('es-AR')}
                      </p>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', marginBottom: '16px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, #6C63FF, #FF4D6A)', borderRadius: '3px' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {(['minimo', 'total', 'otro'] as const).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setCardPayMode((prev) => ({ ...prev, [t.id]: opt }))}
                        style={{
                          padding: '10px 4px',
                          borderRadius: '10px',
                          border: mode === opt ? '1px solid #6C63FF' : '1px solid rgba(255,255,255,0.08)',
                          background: mode === opt ? 'rgba(108,99,255,0.15)' : 'rgba(255,255,255,0.03)',
                          color: mode === opt ? '#6C63FF' : '#94a3b8',
                          fontSize: '12px',
                          fontWeight: mode === opt ? 700 : 400,
                          cursor: 'pointer',
                          textTransform: 'capitalize',
                        }}
                      >
                        {opt === 'minimo' ? 'Mínimo' : opt === 'total' ? 'Total' : 'Otro monto'}
                      </button>
                    ))}
                  </div>
                  {mode && (
                    <button style={{ width: '100%', marginTop: '12px', padding: '12px', background: '#6C63FF', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                      Pagar {mode === 'minimo' ? `$${t.minimo.toLocaleString('es-AR')}` : mode === 'total' ? `$${t.total.toLocaleString('es-AR')}` : 'otro monto'}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Impuestos Tab */}
        {activeTab === 'impuestos' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {impuestos.map((imp) => (
              <div key={imp.id} style={{ background: '#12121A', borderRadius: '16px', padding: '16px', border: '1px solid rgba(108,99,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(255,77,106,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                  🏛️
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: '15px', color: '#f1f5f9', fontWeight: 600 }}>{imp.name}</p>
                  <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#6b7280' }}>Vence {imp.vence}</p>
                  <p style={{ margin: '2px 0 0', fontSize: '14px', color: '#f1f5f9', fontWeight: 700 }}>
                    ${imp.amount.toLocaleString('es-AR')}
                  </p>
                </div>
                <button style={{ padding: '8px 16px', borderRadius: '10px', border: 'none', background: '#6C63FF', color: '#fff', fontSize: '13px', fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>
                  Pagar
                </button>
              </div>
            ))}
          </div>
        )}

        {/* QR Tab */}
        {activeTab === 'qr' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            {/* QR camera area */}
            <div style={{ width: '100%', maxWidth: '280px', aspectRatio: '1', background: '#12121A', borderRadius: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(108,99,255,0.15)' }}>
              {/* Corner accents */}
              {[
                { top: 12, left: 12, borderTop: '3px solid #6C63FF', borderLeft: '3px solid #6C63FF', borderRadius: '4px 0 0 0' },
                { top: 12, right: 12, borderTop: '3px solid #6C63FF', borderRight: '3px solid #6C63FF', borderRadius: '0 4px 0 0' },
                { bottom: 12, left: 12, borderBottom: '3px solid #6C63FF', borderLeft: '3px solid #6C63FF', borderRadius: '0 0 0 4px' },
                { bottom: 12, right: 12, borderBottom: '3px solid #6C63FF', borderRight: '3px solid #6C63FF', borderRadius: '0 0 4px 0' },
              ].map((style, i) => (
                <div key={i} style={{ position: 'absolute', width: 24, height: 24, ...style }} />
              ))}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>📷</div>
                <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>Escaneá el QR</p>
                <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#4b5563' }}>Apuntá la cámara al código</p>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>O ingresá el código</p>
            <div style={{ width: '100%', display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={qrInput}
                onChange={(e) => setQrInput(e.target.value)}
                placeholder="Código QR o link de pago"
                style={{ flex: 1, background: '#12121A', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '12px', padding: '12px 14px', fontSize: '14px', color: '#f1f5f9', outline: 'none' }}
              />
              <button style={{ padding: '12px 16px', background: '#6C63FF', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '14px' }}>
                Ir
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

