'use client';

import React from 'react';

const positions = [
  { name: 'FCI Mercado Pago', type: 'Fondo Común', amount: 150000, return: '+8.2% anual', color: '#6C63FF' },
  { name: 'Cedear Apple', type: 'Cedear', amount: 120000, return: '+15.4% YTD', color: '#F59E0B' },
  { name: 'Bono AL30', type: 'Bono Soberano', amount: 100000, return: '+9.1% anual', color: '#FF4D6A' },
  { name: 'Plazo Fijo Galicia', type: 'Plazo Fijo', amount: 50000, return: '+72% TNA', note: 'Vence 15 may', color: '#00D48B' },
];

const discover = [
  { title: 'Fondos de dinero', sub: 'Desde $1,000', highlight: '~85% TNA', color: '#6C63FF' },
  { title: 'Acciones argentinas', sub: 'Alto potencial', highlight: '+32% YTD prom.', color: '#00D48B' },
];

const fmt = (n: number) => n.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function InvestmentsPage() {
  const s: Record<string, React.CSSProperties> = {
    page: { backgroundColor: '#0A0A0F', minHeight: '100vh', paddingBottom: 80, maxWidth: 430, margin: '0 auto', color: '#F1F5F9' },
    header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px 8px' },
    title: { fontSize: 22, fontWeight: 700, color: '#F1F5F9', margin: 0 },
    badge: { backgroundColor: '#1E1E2E', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#94A3B8', fontWeight: 600 },
    summaryCard: { margin: '16px 20px 0', background: 'linear-gradient(135deg, #12121A 0%, #1a1a2e 100%)', borderRadius: 20, padding: 20, border: '1px solid #6C63FF33' },
    summaryLabel: { fontSize: 13, color: '#94A3B8', marginBottom: 4 },
    summaryAmount: { fontSize: 36, fontWeight: 800, color: '#00D48B', marginBottom: 2 },
    summaryPct: { fontSize: 14, color: '#00D48B' },
    sectionTitle: { fontSize: 14, fontWeight: 600, color: '#94A3B8', margin: '24px 20px 10px', textTransform: 'uppercase' as const, letterSpacing: 1 },
    posCard: { margin: '0 20px 10px', backgroundColor: '#12121A', borderRadius: 14, padding: 16, border: '1px solid #1E1E2E', display: 'flex', alignItems: 'center', gap: 14 },
    posBar: { width: 4, borderRadius: 4, alignSelf: 'stretch' },
    posName: { fontSize: 15, fontWeight: 600, color: '#F1F5F9' },
    posType: { fontSize: 11, color: '#94A3B8', marginTop: 2 },
    posAmt: { fontSize: 16, fontWeight: 700, color: '#F1F5F9', textAlign: 'right' as const },
    posReturn: { fontSize: 12, color: '#00D48B', textAlign: 'right' as const, marginTop: 2 },
    posNote: { fontSize: 11, color: '#94A3B8', textAlign: 'right' as const, marginTop: 1 },
    actionsRow: { display: 'flex', gap: 12, margin: '20px 20px 0' },
    btnPrimary: { flex: 1, backgroundColor: '#6C63FF', border: 'none', borderRadius: 14, padding: '15px', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer' },
    btnOutline: { flex: 1, backgroundColor: 'transparent', border: '1.5px solid #6C63FF', borderRadius: 14, padding: '15px', color: '#6C63FF', fontSize: 15, fontWeight: 700, cursor: 'pointer' },
    discoverRow: { display: 'flex', gap: 12, margin: '0 20px' },
    discoverCard: { flex: 1, backgroundColor: '#12121A', borderRadius: 16, padding: 16, border: '1px solid #1E1E2E' },
    discoverTitle: { fontSize: 14, fontWeight: 700, color: '#F1F5F9', marginBottom: 4 },
    discoverSub: { fontSize: 12, color: '#94A3B8', marginBottom: 8 },
    discoverHL: { fontSize: 18, fontWeight: 800 },
  };

  const sparklinePath = 'M0,50 L30,45 L60,40 L90,35 L120,20 L150,25 L180,15 L200,10';

  return (
    <div style={s.page}>
      <div style={s.header}>
        <p style={s.title}>Inversiones</p>
        <span style={s.badge}>$420,000 ARS</span>
      </div>

      {/* Summary card */}
      <div style={s.summaryCard}>
        <div style={s.summaryLabel}>Rentabilidad total</div>
        <div style={s.summaryAmount}>+$47,320</div>
        <div style={s.summaryPct}>+11.3% desde el inicio</div>
        <svg viewBox="0 0 200 60" style={{ width: '100%', height: 60, marginTop: 12 }}>
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00D48B" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#00D48B" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d={`${sparklinePath} L200,60 L0,60 Z`} fill="url(#sparkGrad)"/>
          <path d={sparklinePath} fill="none" stroke="#00D48B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Positions */}
      <p style={s.sectionTitle}>Mis posiciones</p>
      {positions.map((p) => (
        <div key={p.name} style={s.posCard}>
          <div style={{ ...s.posBar, backgroundColor: p.color, minHeight: 48 }} />
          <div style={{ flex: 1 }}>
            <div style={s.posName}>{p.name}</div>
            <div style={s.posType}>{p.type}</div>
          </div>
          <div>
            <div style={s.posAmt}>${fmt(p.amount)}</div>
            <div style={s.posReturn}>{p.return}</div>
            {p.note && <div style={s.posNote}>{p.note}</div>}
          </div>
        </div>
      ))}

      {/* Actions */}
      <div style={s.actionsRow}>
        <button style={s.btnPrimary}>Invertir más</button>
        <button style={s.btnOutline}>Rescatar</button>
      </div>

      {/* Discover */}
      <p style={s.sectionTitle}>Descubrí más</p>
      <div style={s.discoverRow}>
        {discover.map(d => (
          <div key={d.title} style={s.discoverCard}>
            <div style={s.discoverTitle}>{d.title}</div>
            <div style={s.discoverSub}>{d.sub}</div>
            <div style={{ ...s.discoverHL, color: d.color }}>{d.highlight}</div>
          </div>
        ))}
      </div>
    </div>
  );
}