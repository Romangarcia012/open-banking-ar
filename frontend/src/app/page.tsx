'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <> 
      <style>{` 
        @keyframes float { 0%,100%{transform:translateY(0px) rotateX(10deg) rotateY(15deg)} 50%{transform:translateY(-22px) rotateX(10deg) rotateY(15deg)} }
        @keyframes float2 { 0%,100%{transform:translateY(0px) rotateX(-8deg) rotateY(-12deg)} 50%{transform:translateY(-18px) rotateX(-8deg) rotateY(-12deg)} }
        @keyframes float3 { 0%,100%{transform:translateY(0px) rotateX(6deg) rotateY(20deg)} 50%{transform:translateY(-26px) rotateX(6deg) rotateY(20deg)} }
        @keyframes shimmer { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:0.4;transform:translateY(0)} 50%{opacity:0.9;transform:translateY(-12px)} }
        @keyframes orbFloat { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-20px) scale(1.05)} 66%{transform:translate(-20px,15px) scale(0.97)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .card-float-1 { animation: float 6s ease-in-out infinite; }
        .card-float-2 { animation: float2 7s ease-in-out infinite 2s; }
        .card-float-3 { animation: float3 8s ease-in-out infinite 4s; }
        .shimmer-text {
          background: linear-gradient(90deg, #a5b4fc, #06b6d4, #818cf8, #67e8f9, #a5b4fc);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .form-card { transform-style: preserve-3d; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .form-card:hover { transform: rotateX(1deg) rotateY(1deg) scale(1.01); box-shadow: 0 30px 60px rgba(99,102,241,0.25); }
        .plan-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .plan-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(99,102,241,0.2); }
        .feature-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .feature-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(99,102,241,0.2); }
        .fadeInUp { animation: fadeInUp 0.7s ease forwards; }
        .orb1 { animation: orbFloat 12s ease-in-out infinite; }
        .orb2 { animation: orbFloat 15s ease-in-out infinite 3s; }
        .tab-btn { transition: all 0.2s ease; }
        .mock-screen { background: rgba(15,15,26,0.9); border-radius: 16px; border: 1px solid rgba(99,102,241,0.3); overflow: hidden; }
        .step-card { transition: transform 0.3s ease; }
        .step-card:hover { transform: translateY(-4px); }
      `}</style> 

      <div style={{ minHeight: '100vh', background: '#0f0f1a', color: '#f1f5f9', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>

        {/* Orbes de fondo */}
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
          <div className="orb1" style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="orb2" style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          {/* Grid lines */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        {/* NAV */}
        <nav style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid rgba(99,102,241,0.1)', backdropFilter: 'blur(10px)' }}>
          <span style={{ fontSize: '22px', fontWeight: 800, background: 'linear-gradient(135deg, #818cf8, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>⚡ Syncro</span>
          <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: '#94a3b8' }}>
            <a href="#features" style={{ color: '#94a3b8', textDecoration: 'none' }}>Funciones</a>
            <a href="#como-funciona" style={{ color: '#94a3b8', textDecoration: 'none' }}>Cómo funciona</a>
            <a href="#precios" style={{ color: '#94a3b8', textDecoration: 'none' }}>Precios</a>
          </div>
          <button onClick={() => router.push('/dashboard')} style={{ padding: '8px 20px', borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}>
            Entrar →
          </button>
        </nav>

        {/* HERO */}
        <section style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', maxWidth: '1200px', margin: '0 auto', padding: '80px 40px', alignItems: 'center' }}>
          {/* Left */}
          <div className="fadeInUp">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', marginBottom: '24px', fontSize: '13px', color: '#818cf8' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              Open Banking · Argentina · 2026
            </div>
            <h1 style={{ fontSize: '56px', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
              Tus finanzas,{' '}
              <span className="shimmer-text">perfectamente sincronizadas</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '32px' }}>
              Conectá todas tus cuentas bancarias en un solo lugar. Transferí, invertí y pagá con la velocidad que merecés. Todo bajo los estándares del BCRA.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
              <button onClick={() => router.push('/dashboard')} style={{ padding: '14px 28px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '16px' }}>
                Comenzar gratis →
              </button>
              <button onClick={() => router.push('/dashboard')} style={{ padding: '14px 28px', borderRadius: '12px', background: 'transparent', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.4)', cursor: 'pointer', fontWeight: 600, fontSize: '16px' }}>
                Ver demo
              </button>
            </div>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {[
                { value: '+50K', label: 'Usuarios' },
                { value: '$2.4B', label: 'Procesados' },
                { value: '8', label: 'Bancos' },
                { value: '99.9%', label: 'Uptime' },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: 'center', padding: '16px', borderRadius: '12px', background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.12)' }}>
                  <div style={{ fontSize: '22px', fontWeight: 800, background: 'linear-gradient(135deg, #818cf8, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Login form */}
          <div className="form-card" style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '24px', padding: '36px', boxShadow: '0 20px 60px rgba(99,102,241,0.2)' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: '12px', padding: '4px', marginBottom: '24px' }}>
              {(['login', 'register'] as const).map((tab) => (
                <button key={tab} className="tab-btn" onClick={() => setActiveTab(tab)} style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: activeTab === tab ? '#fff' : 'transparent', color: activeTab === tab ? '#6366f1' : '#94a3b8', boxShadow: activeTab === tab ? '0 2px 8px rgba(0,0,0,0.1)' : 'none' }}>
                  {tab === 'login' ? 'Ingresar' : 'Registrarse'}
                </button>
              ))}
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>Bienvenido a Syncro</h2>
            <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>Ingresá a tu cuenta para continuar</p>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="juan@email.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid #e2e8f0', fontSize: '15px', color: '#0f172a', background: '#f8fafc', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Contraseña</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid #e2e8f0', fontSize: '15px', color: '#0f172a', background: '#f8fafc', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ textAlign: 'right' }}>
                <button type="button" style={{ background: 'none', border: 'none', color: '#6366f1', fontSize: '13px', cursor: 'pointer' }}>¿Olvidaste tu contraseña?</button>
              </div>
              <button type="submit" style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '16px' }}>
                Ingresar →
              </button>
              <button type="button" onClick={() => router.push('/dashboard')} style={{ width: '100%', padding: '12px', borderRadius: '12px', background: '#f8fafc', color: '#374151', border: '1.5px solid #e2e8f0', cursor: 'pointer', fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span>🔒</span> Ingresar con biometría
              </button>
            </form>
            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'center', marginBottom: '10px' }}>Bancos compatibles</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {['Galicia', 'Santander', 'BBVA', 'Brubank', 'Naranja X', 'HSBC'].map((b) => (
                  <span key={b} style={{ padding: '4px 12px', background: '#f1f5f9', borderRadius: '20px', fontSize: '12px', color: '#475569', fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '12px' }}>¿Cómo funciona <span className="shimmer-text">Syncro</span>?</h2>
            <p style={{ color: '#64748b', fontSize: '17px' }}>En 3 simples pasos estás conectado con todos tus bancos</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { step: '01', icon: '🏦', title: 'Conectá tus cuentas', desc: 'Vinculá de forma segura todas tus cuentas bancarias con un clic. Compatible con los principales bancos de Argentina.', color: '#6366f1' },
              { step: '02', icon: '⚡', title: 'Sincronización instantánea', desc: 'Syncro obtiene tu saldo, movimientos y datos en tiempo real. Sin demoras, sin información desactualizada.', color: '#06b6d4' },
              { step: '03', icon: '📊', title: 'Control total', desc: 'Transferí, pagá con QR, invertí y analizá tus gastos desde un único panel. Tu vida financiera, ordenada.', color: '#10b981' },
            ].map((item) => (
              <div key={item.step} className="step-card" style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.12)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '64px', fontWeight: 900, color: item.color, opacity: 0.06 }}>{item.step}</div>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${item.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px', border: `1px solid ${item.color}40` }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#f1f5f9' }}>{item.title}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '15px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREVIEW DE LA APP — ejemplos visuales */}
        <section style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '12px' }}>Todo lo que necesitás, <span className="shimmer-text">en un lugar</span></h2>
            <p style={{ color: '#64748b', fontSize: '17px' }}>Diseñado para ser simple, potente y seguro</p>
          </div>

          {/* Feature 1 — Dashboard */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '20px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', marginBottom: '16px', fontSize: '12px', color: '#818cf8', fontWeight: 600 }}>
                DASHBOARD
              </div>
              <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>Todos tus saldos en un vistazo</h3>
              <p style={{ color: '#64748b', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                Mirá el estado de todas tus cuentas bancarias en tiempo real. Galicia, Brubank, Santander y más — todo consolidado en un saldo total.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Saldo consolidado de todas tus cuentas', 'Movimientos en tiempo real', 'Gráfico de evolución de gastos', 'Alertas de movimientos inusuales'].map((t) => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: '15px' }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#818cf8', flexShrink: 0 }}>✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {/* Mock dashboard */}
            <div className="mock-screen" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, background: 'linear-gradient(135deg,#818cf8,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>⚡ Syncro</span>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg,#6366f1,#06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>JP</div>
              </div>
              <div style={{ borderRadius: '16px', padding: '20px', background: 'linear-gradient(135deg,#6366f1,#06b6d4)', marginBottom: '16px', boxShadow: '0 8px 24px rgba(99,102,241,0.3)' }}>
                <p style={{ fontSize: '11px', opacity: 0.8, marginBottom: '4px' }}>Saldo total consolidado</p>
                <p style={{ fontSize: '28px', fontWeight: 900, fontVariantNumeric: 'tabular-nums' }}>$2.847.350,00</p>
                <p style={{ fontSize: '12px', color: '#a7f3d0', marginTop: '6px' }}>▲ +$28.500 este mes (+1.2%)</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                  {['Transferir', 'Pagar', 'QR'].map((b) => (
                    <div key={b} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>{b}</div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                {[['Galicia','$1.245.800'],['Brubank','$890.250'],['Santander','$711.300']].map(([banco, monto]) => (
                  <div key={banco} style={{ padding: '12px', borderRadius: '12px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.12)' }}>
                    <p style={{ fontSize: '10px', color: '#64748b', marginBottom: '4px' }}>{banco}</p>
                    <p style={{ fontSize: '12px', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{monto}</p>
                    <span style={{ fontSize: '9px', background: 'rgba(16,185,129,0.15)', color: '#10b981', padding: '2px 6px', borderRadius: '8px' }}>Activa</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[['Netflix','-$8.500','Hoy','#f43f5e'],['Sueldo','+$450.000','Ayer','#10b981'],['Mercado Libre','-$32.400','18 abr','#f43f5e']].map(([n,m,f,c]) => (
                  <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)' }}>
                    <div>
                      <p style={{ fontSize: '12px', fontWeight: 600 }}>{n}</p>
                      <p style={{ fontSize: '10px', color: '#64748b' }}>{f}</p>
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: c, fontVariantNumeric: 'tabular-nums' }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2 — Transferencias */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
            {/* Mock transferencia */}
            <div className="mock-screen" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                {['Destinatario','Monto','Confirmar'].map((s, i) => (
                  <div key={s} style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ height: '4px', borderRadius: '2px', background: i === 1 ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : i < 1 ? '#10b981' : 'rgba(99,102,241,0.2)', marginBottom: '4px' }} />
                    <span style={{ fontSize: '10px', color: i <= 1 ? '#818cf8' : '#475569' }}>{s}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '12px' }}>Ingresá el monto</p>
              <div style={{ textAlign: 'center', padding: '20px', borderRadius: '16px', background: 'rgba(99,102,241,0.06)', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg,#6366f1,#06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', fontWeight: 700, fontSize: '16px' }}>MP</div>
                <p style={{ fontSize: '14px', fontWeight: 600 }}>María Pérez</p>
                <p style={{ fontSize: '12px', color: '#64748b' }}>maria.perez · Brubank</p>
                <p style={{ fontSize: '40px', fontWeight: 900, margin: '16px 0 4px', fontVariantNumeric: 'tabular-nums', background: 'linear-gradient(135deg,#818cf8,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$15.000</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '12px' }}>
                {['1','2','3','4','5','6','7','8','9','.',  '0','⌫'].map((k) => (
                  <div key={k} style={{ padding: '14px', textAlign: 'center', borderRadius: '12px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.1)', fontSize: '16px', fontWeight: 600, color: '#e2e8f0' }}>{k}</div>
                ))}
              </div>
              <div style={{ padding: '12px', borderRadius: '12px', background: 'linear-gradient(135deg,#6366f1,#06b6d4)', textAlign: 'center', fontWeight: 700, fontSize: '14px' }}>Continuar →</div>
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '20px', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', marginBottom: '16px', fontSize: '12px', color: '#06b6d4', fontWeight: 600 }}>
                TRANSFERENCIAS
              </div>
              <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>Transferí en segundos</h3>
              <p style={{ color: '#64748b', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                Flujo guiado en 4 pasos: elegís el destinatario, ingresás el monto con teclado numérico, confirmás y listo. Comprobante instantáneo.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Teclado numérico estilo app móvil', 'Contactos frecuentes guardados', 'Transferencia por CBU o alias', 'Comprobante con número único'].map((t) => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: '15px' }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(6,182,212,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#06b6d4', flexShrink: 0 }}>✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3 — QR + Inversiones */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div className="feature-card" style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.12)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>📱</div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>Pagos con QR</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>Mostrá tu QR para cobrar o escaneá el de otro para pagar. Compatible con todos los bancos del sistema.</p>
              <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(99,102,241,0.06)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: '#fff', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '2px', padding: '6px' }}>
                  {Array.from({length: 25}).map((_, i) => (
                    <div key={i} style={{ background: [0,1,2,5,9,10,14,15,19,20,21,22,23,24,12].includes(i) ? '#0f0f1a' : '#fff', borderRadius: '1px' }} />
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: '#f1f5f9' }}>Juan Pérez</p>
                  <p style={{ fontSize: '11px', color: '#64748b' }}>juanperez.mp</p>
                  <p style={{ fontSize: '10px', color: '#475569', marginTop: '2px' }}>CBU: 0070...5678</p>
                </div>
              </div>
            </div>
            <div className="feature-card" style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.12)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>📈</div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>Inversiones</h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7, marginBottom: '16px' }}>Fondos comunes, plazos fijos y cauciones. Todo visible desde el mismo lugar con rentabilidad en tiempo real.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[['AR Growth','$200.000','+8.2%','#10b981'],['Plazo Fijo Galicia','$185.200','+97% TNA','#06b6d4'],['Cauciones','$100.000','+105% TNA','#6366f1']].map(([n,m,r,c]) => (
                  <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)' }}>
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>{n}</span>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: '13px', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{m}</p>
                      <p style={{ fontSize: '11px', color: c }}>{r}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '12px' }}>Diseñado para <span className="shimmer-text">vos</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '⚡', title: 'Sync instantáneo', desc: 'Saldo y movimientos actualizados en tiempo real desde todos tus bancos', color: '#6366f1' },
              { icon: '🔒', title: 'Seguridad bancaria', desc: 'Encriptación de 256 bits, 2FA y cumplimiento total con normas BCRA', color: '#06b6d4' },
              { icon: '🤖', title: 'Inteligencia financiera', desc: 'Análisis automático de gastos y alertas inteligentes por categoría', color: '#10b981' },
              { icon: '📲', title: 'Mobile first', desc: 'Experiencia optimizada para celular con navegación por gestos', color: '#f59e0b' },
              { icon: '🏦', title: '8 bancos conectados', desc: 'Galicia, Brubank, Santander, BBVA, Naranja X, HSBC y más', color: '#f43f5e' },
              { icon: '📊', title: 'Reportes y gráficos', desc: 'Visualizá tu historial financiero con gráficos claros y exportables', color: '#8b5cf6' },
            ].map((f) => (
              <div key={f.title} className="feature-card" style={{ padding: '28px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(99,102,241,0.1)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${f.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px', border: `1px solid ${f.color}30` }}>{f.icon}</div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{f.title}</h4>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRECIOS */}
        <section id="precios" style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '40px 40px 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '12px' }}>Simple y <span className="shimmer-text">transparente</span></h2>
            <p style={{ color: '#64748b', fontSize: '16px' }}>Comenzá gratis, escalá cuando lo necesites</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {[
              { name: 'Starter', price: '$0', period: 'Gratis para siempre', color: '#64748b', features: ['1 cuenta bancaria','Historial 30 días','App web y mobile','—  Transferencias','—  Pago con QR','—  Inversiones'], cta: 'Comenzar gratis', popular: false },
              { name: 'Pro', price: '$4.99', period: '/mes · USD', color: '#6366f1', features: ['Hasta 5 cuentas','Historial completo','App web y mobile','✓  Transferencias ilimitadas','✓  Pago con QR','✓  Inversiones básicas'], cta: 'Elegir Pro', popular: true },
              { name: 'Business', price: '$19.99', period: '/mes · USD', color: '#06b6d4', features: ['Cuentas ilimitadas','Historial completo','App web y mobile','✓  Transferencias ilimitadas','✓  Pago con QR','✓  Inversiones + API access'], cta: 'Elegir Business', popular: false },
            ].map((plan) => (
              <div key={plan.name} className="plan-card" style={{ padding: '32px', borderRadius: '24px', background: plan.popular ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.02)', border: plan.popular ? '2px solid rgba(99,102,241,0.5)' : '1px solid rgba(99,102,241,0.1)', position: 'relative', boxShadow: plan.popular ? '0 0 40px rgba(99,102,241,0.15)' : 'none' }}>
                {plan.popular && <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', borderRadius: '20px', background: 'linear-gradient(135deg,#6366f1,#06b6d4)', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap' }}>⭐ Más popular</div>}
                <p style={{ fontSize: '14px', fontWeight: 700, color: plan.color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{plan.name}</p>
                <p style={{ fontSize: '40px', fontWeight: 900, marginBottom: '4px' }}>{plan.price}</p>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px' }}>{plan.period}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ fontSize: '14px', color: f.startsWith('—') ? '#475569' : '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {!f.startsWith('—') && !f.startsWith('✓') && <span style={{ color: plan.color }}>✓</span>}
                      {f.replace('✓  ', '').replace('—  ', '')}
                    </li>
                  ))}
                </ul>
                <button onClick={() => alert('¡Próximamente!')} style={{ width: '100%', padding: '13px', borderRadius: '12px', background: plan.popular ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : 'rgba(99,102,241,0.1)', color: plan.popular ? '#fff' : '#818cf8', border: plan.popular ? 'none' : '1px solid rgba(99,102,241,0.3)', cursor: 'pointer', fontWeight: 700, fontSize: '15px' }}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(99,102,241,0.1)', padding: '40px', textAlign: 'center' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '20px', fontWeight: 800, background: 'linear-gradient(135deg,#818cf8,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>⚡ Syncro</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px', fontSize: '13px', color: '#475569' }}>
            {['Términos', 'Privacidad', 'Seguridad', 'BCRA'].map((l) => <a key={l} href="#" style={{ color: '#475569', textDecoration: 'none' }}>{l}</a>)}
          </div>
          <p style={{ fontSize: '13px', color: '#334155' }}>© 2026 Syncro · Regulado bajo BCRA Com. A 7500 · Todos los derechos reservados</p>
        </footer>

      </div>
    </>
  );
}