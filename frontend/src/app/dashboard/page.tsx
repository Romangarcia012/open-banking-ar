'use client';

const accounts = [
  { id: 1, bank: 'Galicia', icon: '🏦', color: '#FF4D6A', balance: 312450.0, alias: 'galicia.main' },
  { id: 2, bank: 'Brubank', icon: '💜', color: '#6C63FF', balance: 284870.5, alias: 'brubank.main' },
  { id: 3, bank: 'Santander', icon: '🔴', color: '#FF4D6A', balance: 250000.0, alias: 'santander.main' },
];

const movements = [
  { id: 1, icon: '🛒', label: 'Mercado Libre', category: 'Compras', amount: -12500, date: 'Hoy 14:32', type: 'expense' },
  { id: 2, icon: '💸', label: 'Transferencia recibida', category: 'Ingresos', amount: +50000, date: 'Hoy 11:15', type: 'income' },
  { id: 3, icon: '⚡', label: 'Edenor', category: 'Servicios', amount: -15420, date: 'Ayer 09:00', type: 'expense' },
  { id: 4, icon: '🎬', label: 'Netflix AR', category: 'Entretenimiento', amount: -4200, date: 'Mar 22 abr', type: 'expense' },
  { id: 5, icon: '💰', label: 'Sueldo', category: 'Ingresos', amount: +380000, date: 'Lun 21 abr', type: 'income' },
];

const sparklinePoints = '0,60 20,50 40,55 60,40 80,42 100,30 120,35 140,20 160,22 180,10 200,15';

const totalBalance = accounts.reduce((sum, a) => sum + a.balance, 0);

export default function DashboardPage() {
  return (
    <div style={{ background: '#0A0A0F', minHeight: '100vh', paddingBottom: '88px' }}>
      {/* Header */}
      <div style={{ padding: '52px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', fontWeight: 500 }}>Buenos días 👋</p>
          <p style={{ margin: '2px 0 0', fontSize: '20px', color: '#f1f5f9', fontWeight: 700 }}>Román García</p>
        </div>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #6C63FF, #00D48B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, color: '#fff' }}>
          R
        </div>
      </div>

      {/* Balance Card */}
      <div style={{ margin: '8px 20px 20px', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', borderRadius: '20px', padding: '24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(0,212,139,0.05) 100%)', borderRadius: '20px' }} />
        <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontWeight: 500, position: 'relative', zIndex: 1 }}>Balance total</p>
        <p style={{ margin: '6px 0 0', fontSize: '34px', fontWeight: 800, color: '#fff', position: 'relative', zIndex: 1, letterSpacing: '-0.5px' }}>
          ${totalBalance.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
        </p>
        <div style={{ marginTop: '16px', position: 'relative', zIndex: 1 }}>
          <svg width="100%" height="50" viewBox={`0 0 200 70`} preserveAspectRatio="none">
            <defs>
              <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D48B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00D48B" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline points={sparklinePoints} fill="none" stroke="#00D48B" strokeWidth="2" strokeLinejoin="round" />
            <polygon points={`0,60 ${sparklinePoints} 200,70 0,70`} fill="url(#sparkGrad)" />
          </svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: '12px', color: '#00D48B', fontWeight: 600 }}>▲ +$47,320 este mes</span>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>(+5.5%)</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {[
            { label: 'Transferir', icon: '↗️', href: '/transfers' },
            { label: 'Pagar', icon: '💳', href: '/payments' },
            { label: 'Invertir', icon: '📈', href: '/investments' },
            { label: 'QR', icon: '📷', href: '/qr' },
          ].map((action) => (
            <a key={action.label} href={action.href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', background: '#12121A', borderRadius: '14px', padding: '14px 4px', border: '1px solid rgba(108,99,255,0.12)' }}>
              <span style={{ fontSize: '22px' }}>{action.icon}</span>
              <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>{action.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Accounts */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <p style={{ margin: 0, fontSize: '15px', color: '#f1f5f9', fontWeight: 700 }}>Mis cuentas</p>
          <a href="/accounts" style={{ fontSize: '12px', color: '#6C63FF', textDecoration: 'none', fontWeight: 600 }}>Ver todas</a>
        </div>
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
          {accounts.map((acc) => (
            <div key={acc.id} style={{ minWidth: '150px', background: '#12121A', borderRadius: '16px', padding: '16px', border: '1px solid rgba(108,99,255,0.1)', flexShrink: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '20px' }}>{acc.icon}</span>
                <span style={{ fontSize: '10px', color: '#6b7280', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '20px' }}>ARS</span>
              </div>
              <p style={{ margin: 0, fontSize: '11px', color: '#6b7280', fontWeight: 500 }}>{acc.bank}</p>
              <p style={{ margin: '4px 0 0', fontSize: '16px', color: '#f1f5f9', fontWeight: 700, letterSpacing: '-0.3px' }}>
                ${acc.balance.toLocaleString('es-AR', { minimumFractionDigits: 0 })}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Movements */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <p style={{ margin: 0, fontSize: '15px', color: '#f1f5f9', fontWeight: 700 }}>Últimos movimientos</p>
          <button style={{ fontSize: '12px', color: '#6C63FF', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontWeight: 600 }}>Ver todos</button>
        </div>
        <div style={{ background: '#12121A', borderRadius: '16px', border: '1px solid rgba(108,99,255,0.1)', overflow: 'hidden' }}>
          {movements.map((mov, idx) => (
            <div key={mov.id} style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: idx < movements.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <div style={{ width: 40, height: 40, borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                {mov.icon}
              </div>
              <div style={{ flex: 1, marginLeft: '12px' }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#f1f5f9', fontWeight: 600 }}>{mov.label}</p>
                <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#6b7280' }}>{mov.date}</p>
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: mov.type === 'income' ? '#00D48B' : '#f1f5f9' }}>
                {mov.type === 'income' ? '+' : '-'}${Math.abs(mov.amount).toLocaleString('es-AR')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
