'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };  

  return (
    <>   
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(10deg) rotateY(15deg); }
          50% { transform: translateY(-22px) rotateX(10deg) rotateY(15deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotateX(-8deg) rotateY(-12deg); }
          50% { transform: translateY(-18px) rotateX(-8deg) rotateY(-12deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotateX(6deg) rotateY(20deg); }
          50% { transform: translateY(-26px) rotateX(6deg) rotateY(20deg); }
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes particle {
          0%, 100% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-15px); opacity: 0.8; }
        }
        .card-float-1 { animation: float 6s ease-in-out infinite; }
        .card-float-2 { animation: float2 7s ease-in-out infinite 2s; }
        .card-float-3 { animation: float3 8s ease-in-out infinite 4s; }
        .shimmer-text {
          background: linear-gradient(90deg, #ffffff, #93c5fd, #ffffff, #60a5fa, #ffffff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .form-card:hover {
          transform: rotateX(1deg) rotateY(1deg) scale(1.01);
          box-shadow: 0 25px 50px rgba(0,0,0,0.25);
        }
        .form-card {
          transform-style: preserve-3d;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .fadeInUp { animation: fadeInUp 0.7s ease forwards; }
        .plan-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
        .plan-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
      `}</style>

      <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1d4ed8 100%)' }}>

        {/* Tarjetas 3D flotantes de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: '800px' }}>
          {/* Tarjeta 1 */}
          <div className="card-float-1 absolute" style={{ top: '8%', left: '5%', width: '280px', height: '170px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(30,64,175,0.4), rgba(99,102,241,0.3))', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)' }}>
            <div style={{ padding: '20px' }}>
              <div style={{ width: '40px', height: '28px', background: 'rgba(251,191,36,0.7)', borderRadius: '4px', marginBottom: '24px' }}></div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', marginBottom: '8px', width: '80%' }}></div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', width: '60%' }}></div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="card-float-2 absolute" style={{ top: '15%', right: '6%', width: '260px', height: '160px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(59,130,246,0.3))', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)' }}>
            <div style={{ padding: '20px' }}>
              <div style={{ width: '36px', height: '26px', background: 'rgba(251,191,36,0.6)', borderRadius: '4px', marginBottom: '24px' }}></div>
              <div style={{ height: '7px', background: 'rgba(255,255,255,0.25)', borderRadius: '4px', marginBottom: '8px', width: '75%' }}></div>
              <div style={{ height: '7px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px', width: '55%' }}></div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="card-float-3 absolute" style={{ bottom: '20%', left: '8%', width: '250px', height: '155px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(16,185,129,0.25), rgba(30,64,175,0.3))', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
            <div style={{ padding: '20px' }}>
              <div style={{ width: '34px', height: '24px', background: 'rgba(251,191,36,0.5)', borderRadius: '4px', marginBottom: '24px' }}></div>
              <div style={{ height: '7px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '8px', width: '70%' }}></div>
              <div style={{ height: '7px', background: 'rgba(255,255,255,0.12)', borderRadius: '4px', width: '50%' }}></div>
            </div>
          </div>

          {/* Partículas */}
          {[
            { top: '20%', left: '25%', size: '8px', delay: '0s' },
            { top: '40%', left: '80%', size: '6px', delay: '1s' },
            { top: '60%', left: '15%', size: '10px', delay: '2s' },
            { top: '75%', left: '70%', size: '7px', delay: '0.5s' },
            { top: '30%', left: '55%', size: '5px', delay: '1.5s' },
            { top: '85%', left: '40%', size: '9px', delay: '3s' },
            { top: '10%', left: '65%', size: '6px', delay: '2.5s' },
            { top: '55%', left: '90%', size: '8px', delay: '0.8s' },
          ].map((p, i) => (
            <div key={i} style={{ position: 'absolute', top: p.top, left: p.left, width: p.size, height: p.size, borderRadius: '50%', background: 'rgba(147,197,253,0.6)', animation: `particle 4s ease-in-out infinite ${p.delay}` }} />
          ))}
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">

          {/* Logo y título */}
          <div className="text-center mb-8 fadeInUp">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <span className="text-3xl">🏦</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-2 shimmer-text">OpenBank AR</h1>
            <p className="text-blue-200 text-lg">El futuro del Open Banking en Argentina</p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" style={{ animation: 'particle 2s ease-in-out infinite' }}></span>
              <span className="text-green-300 text-sm font-medium">Sistema operativo · BCRA Transferencias 3.0</span>
            </div>
          </div>

          {/* Formulario de login */}
          <div className="form-card w-full max-w-md rounded-3xl p-8 mb-12" style={{ background: 'rgba(255,255,255,0.97)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Bienvenido</h2>
            <p className="text-gray-500 text-sm mb-6">Ingresá a tu cuenta para continuar</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="juan@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50"
                />
              </div>
              <div className="text-right">
                <button type="button" className="text-blue-600 text-sm hover:underline">¿Olvidaste tu contraseña?</button>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-semibold text-lg transition-all hover:opacity-90 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
              >
                Ingresar →
              </button>
            </form>

            {/* Bancos compatibles */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center mb-3">Bancos compatibles</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[ 'Galicia', 'Santander', 'BBVA', 'Brubank', 'Naranja X'].map((banco) => (
                  <span key={banco} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">{banco}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sección de Planes */}
          <div className="w-full max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-white mb-2">Elegí tu plan</h2>
              <p className="text-blue-200">Comenzá gratis, escalá cuando lo necesites</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
              {/* Plan Starter */}
              <div className="plan-card rounded-3xl p-6" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <div className="text-center mb-6">
                  <p className="text-blue-200 text-sm font-medium uppercase tracking-wide mb-2">Starter</p>
                  <div className="text-4xl font-extrabold text-white">$0</div>
                  <p className="text-blue-300 text-sm">/mes · Gratis para siempre</p>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  {[ { ok: true, text: 'Ver saldo de 1 cuenta' }, { ok: true, text: 'Historial de 30 días' }, { ok: true, text: 'App web y mobile' }, { ok: false, text: 'Transferencias' }, { ok: false, text: 'Pago con QR' }, { ok: false, text: 'Múltiples cuentas' }, { ok: false, text: 'Inversiones' },].map((item, i) => (
                    <li key={i} className={`flex items-center gap-2 ${item.ok ? 'text-white' : 'text-blue-400 opacity-60'}`}>  
                      <span>{item.ok ? '✅' : '❌'}</span>{item.text}
                    </li>
                  ))}
                </ul>
                <button onClick={() => alert('¡Próximamente!')} className="w-full py-3 rounded-xl font-semibold text-blue-700 bg-white hover:bg-blue-50 transition-all">
                  Comenzar gratis
                </button>
              </div>

              {/* Plan Basic */}
              <div className="plan-card rounded-3xl p-6" style={{ background: 'rgba(59,130,246,0.25)', backdropFilter: 'blur(12px)', border: '1px solid rgba(147,197,253,0.4)' }}>
                <div className="text-center mb-6">
                  <p className="text-blue-200 text-sm font-medium uppercase tracking-wide mb-2">Basic</p>
                  <div className="text-4xl font-extrabold text-white">$3.99</div>
                  <p className="text-blue-300 text-sm">/mes · USD</p>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  {[ { ok: true, text: 'Hasta 3 cuentas' }, { ok: true, text: 'Historial de 90 días' }, { ok: true, text: 'App web y mobile' }, { ok: true, text: 'Transferencias (10/mes)' }, { ok: true, text: 'Pago con QR' }, { ok: false, text: 'Cuentas ilimitadas' }, { ok: false, text: 'Inversiones' },].map((item, i) => (
                    <li key={i} className={`flex items-center gap-2 ${item.ok ? 'text-white' : 'text-blue-400 opacity-60'}`}>  
                      <span>{item.ok ? '✅' : '❌'}</span>{item.text}
                    </li>
                  ))}
                </ul>
                <button onClick={() => alert('¡Próximamente!')} className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)' }}>
                  Elegir Basic
                </button>
              </div>

              {/* Plan Pro */}
              <div className="plan-card rounded-3xl p-6 relative" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.4), rgba(59,130,246,0.4))', backdropFilter: 'blur(12px)', border: '2px solid rgba(167,139,250,0.6)', boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>⭐ Más popular</span>
                </div>
                <div className="text-center mb-6 mt-2">
                  <p className="text-purple-200 text-sm font-medium uppercase tracking-wide mb-2">Pro</p>
                  <div className="text-4xl font-extrabold text-white">$11.99</div>
                  <p className="text-purple-300 text-sm">/mes · USD</p>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  {[ { ok: true, text: 'Cuentas ilimitadas' }, { ok: true, text: 'Historial completo' }, { ok: true, text: 'App web y mobile' }, { ok: true, text: 'Transferencias ilimitadas' }, { ok: true, text: 'Pago con QR' }, { ok: true, text: 'Inversiones y fondos' }, { ok: true, text: 'Soporte prioritario 24/7' },].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white">
                      <span>✅</span>{item.text}
                    </li>
                  ))}
                </ul>
                <button onClick={() => alert('¡Próximamente!')} className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                  Elegir Pro
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-blue-400 text-xs mt-16 text-center">
            © 2026 OpenBank AR · Regulado bajo BCRA Com. A 7500 · Todos los derechos reservados
          </p>
        </div>
      </div>
    </>
  );
}