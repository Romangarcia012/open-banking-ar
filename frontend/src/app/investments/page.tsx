'use client';

import { useState } from 'react';

const positions = [
  {
    id: 1,
    name: 'FCI Mercado Pago',
    type: 'Fondo Común',
    typeColor: '#6C63FF',
    invested: 150000,
    rendimiento: '+8.2%',
    rendimientoLabel: 'anual',
    positive: true,
  },
  {
    id: 2,
    name: 'Cedear Apple',
    type: 'Cedear',
    typeColor: '#00D48B',
    invested: 120000,
    rendimiento: '+15.4%',
    rendimientoLabel: 'YTD',
    positive: true,
  },
  {
    id: 3,
    name: 'Bono AL30',
    type: 'Bono soberano',
    typeColor: '#f59e0b',
    invested: 100000,
    rendimiento: '+9.1%',
    rendimientoLabel: 'anual',
    positive: true,
  },
  {
    id: 4,
    name: 'Plazo Fijo Galicia',
    type: 'Plazo Fijo',
    typeColor: '#06b6d4',
    invested: 50000,
    rendimiento: '+72%',
    rendimientoLabel: 'TNA',
    vence: '15 may',
    positive: true,
  },
];

const discover = [
  { name: 'Fondos de dinero', rendRef: '~75% TNA', icon: '💵', desc: 'Disponibilidad inmediata' },
  { name: 'Acciones arg.', rendRef: '+120% YTD', icon: '📊', desc: 'Merval · Alta volatilidad' },
];

const totalInvested = positions.reduce((sum, p) => sum + p.invested, 0);
const totalGain = 47320;
const totalGainPct = '+11.3%';

// Sparkline hardcoded (tendencia alcista)
const sparkPoints = '0,70 25,65 50,58 75,50 100,42 125,48 150,35 175,25 200,30 225,18 250,10';

export default function InvestmentsPage() {
  const [showRescatar, setShowRescatar] = useState(false);

  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh', paddingBottom: '88px' }}>
      {/* Header */}
      <div style={{ padding: '52px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: '#f1f5f9' }}>Inversiones</h1>
          <p style={{ margin: '4px 0 0', fontSize: '24px', fontWeight: 800, color: '#00D48B', letterSpacing: '-0.5px' }}>
            ${totalInvested.toLocaleString('es-AR')}
          </p>
          <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#6b7280' }}>Total invertido</p>
        </div>
        <div style={{ background: 'rgba(0,212,139,0.12)', borderRadius: '12px', padding: '10px 14px', textAlign: 'right' }}>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#00D48B' }}>+${totalGain.toLocaleString('es-AR')}</p>
          <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#00D48B', fontWeight: 600 }}>{totalGainPct}</p>
        </div>
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Sparkline card */}
        <div style={{ background: '#12121A', borderRadius: '20px', padding: '20px', border: '1px solid rgba(0,212,139,0.15)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', fontWeight: 600 }}>Rentabilidad total</p>
            <span style={{ fontSize: '12px', color: '#00D48B', background: 'rgba(0,212,139,0.1)', padding: '3px 10px', borderRadius: '20px', fontWeight: 700 }}>
              {totalGainPct}
            </span>
          </div>
          <p style={{ margin: '0 0 12px', fontSize: '28px', fontWeight: 800, color: '#00D48B', letterSpacing: '-0.5px' }}>
            +${totalGain.toLocaleString('es-AR')}
          </p>
          <svg width="100%" height="80" viewBox="0 0 250 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="investGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D48B" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00D48B" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points={`0,80 ${sparkPoints} 250,80`} fill="url(#investGrad)" />
            <polyline points={sparkPoints} fill="none" stroke="#00D48B" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
            {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'].map((m) => (
              <span key={m} style={{ fontSize: '10px', color: '#4b5563' }}>{m}</span>
            ))}
          </div>
        </div>

        {/* Positions */}
        <div>
          <p style={{ margin: '0 0 12px', fontSize: '15px', color: '#f1f5f9', fontWeight: 700 }}>Mis posiciones</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {positions.map((pos) => (
              <div key={pos.id} style={{ background: '#12121A', borderRadius: '16px', padding: '16px', border: '1px solid rgba(108,99,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <p style={{ margin: 0, fontSize: '15px', color: '#f1f5f9', fontWeight: 700 }}>{pos.name}</p>
                      <span style={{ fontSize: '10px', color: pos.typeColor, background: `${pos.typeColor}18`, padding: '2px 8px', borderRadius: '20px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                        {pos.type}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div>
                        <p style={{ margin: 0, fontSize: '11px', color: '#6b7280' }}>Invertido</p>
                        <p style={{ margin: '2px 0 0', fontSize: '15px', color: '#f1f5f9', fontWeight: 700 }}>
                          ${pos.invested.toLocaleString('es-AR')}
                        </p>
                      </div>
                      {pos.vence && (
                        <div>
                          <p style={{ margin: 0, fontSize: '11px', color: '#6b7280' }}>Vence</p>
                          <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#94a3b8', fontWeight: 600 }}>{pos.vence}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: '#00D48B' }}>{pos.rendimiento}</p>
                    <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#6b7280' }}>{pos.rendimientoLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button style={{ width: '100%', padding: '16px', background: '#6C63FF', borderRadius: '16px', border: 'none', fontSize: '16px', fontWeight: 700, color: '#fff', cursor: 'pointer', boxShadow: '0 4px 20px rgba(108,99,255,0.35)' }}>
            Invertir más
          </button>
          <button
            onClick={() => setShowRescatar(!showRescatar)}
            style={{ width: '100%', padding: '14px', background: 'transparent', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '16px', fontSize: '15px', fontWeight: 600, color: '#6C63FF', cursor: 'pointer' }}
          >
            Rescatar
          </button>
          {showRescatar && (
            <div style={{ background: '#12121A', borderRadius: '16px', padding: '16px', border: '1px solid rgba(255,77,106,0.15)' }}>
              <p style={{ margin: '0 0 10px', fontSize: '14px', color: '#f1f5f9', fontWeight: 600 }}>¿Qué querés rescatar?</p>
              {positions.map((pos) => (
                <div key={pos.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ fontSize: '13px', color: '#94a3b8' }}>{pos.name}</span>
                  <button style={{ padding: '6px 12px', background: 'rgba(255,77,106,0.12)', border: '1px solid rgba(255,77,106,0.2)', borderRadius: '8px', fontSize: '12px', color: '#FF4D6A', fontWeight: 600, cursor: 'pointer' }}>
                    Rescatar
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Discover section */}
        <div>
          <p style={{ margin: '0 0 12px', fontSize: '15px', color: '#f1f5f9', fontWeight: 700 }}>Descubrí más</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {discover.map((d) => (
              <div key={d.name} style={{ background: '#12121A', borderRadius: '16px', padding: '16px', border: '1px solid rgba(108,99,255,0.1)', cursor: 'pointer' }}>
                <span style={{ fontSize: '28px' }}>{d.icon}</span>
                <p style={{ margin: '8px 0 2px', fontSize: '14px', color: '#f1f5f9', fontWeight: 700 }}>{d.name}</p>
                <p style={{ margin: 0, fontSize: '13px', color: '#00D48B', fontWeight: 700 }}>{d.rendRef}</p>
                <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#6b7280' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
