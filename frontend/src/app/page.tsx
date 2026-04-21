import Link from 'next/link';

const features = [
  {
    href: '/accounts',
    icon: '💳',
    title: 'Cuentas',
    description: 'Consultá saldos, movimientos y datos de tus cuentas bancarias de forma segura.',
    color: 'blue',
  },
  {
    href: '/payments',
    icon: '💸',
    title: 'Pagos',
    description: 'Iniciá transferencias y pagos interoperables con Transferencias 3.0.',
    color: 'green',
  },
  {
    href: '#',
    icon: '🔐',
    title: 'Consentimientos',
    description: 'Gestioná los permisos que otorgás a terceros para acceder a tu información.',
    color: 'purple',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="text-center py-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span>🏛️</span>
          <span>Alineado con BCRA · Transferencias 3.0 · Com. A 7500</span>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          🏦 Open Banking Argentina
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Plataforma de open banking de código abierto para Argentina. Acceso seguro a cuentas,
          pagos interoperables y gestión de consentimientos bajo estándares internacionales.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/accounts"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Ver Cuentas
          </Link>
          <a
            href="https://github.com/Romangarcia012/open-banking-ar"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            GitHub →
          </a>
        </div>
      </section>

      {/* Tarjetas de funcionalidades */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {features.map((feature) => (
          <Link
            key={feature.href}
            href={feature.href}
            className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all group"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
              {feature.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
          </Link>
        ))}
      </section>

      {/* Stack tecnológico */}
      <section className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Stack Tecnológico</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Backend', value: 'Node.js + Express + TypeScript' },
            { label: 'Frontend', value: 'Next.js 14 + Tailwind CSS' },
            { label: 'Base de Datos', value: 'PostgreSQL 16' },
            { label: 'Auth', value: 'OAuth 2.0 / OpenID Connect' },
          ].map((item) => (
            <div key={item.label} className="bg-gray-50 rounded-xl p-4">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{item.label}</div>
              <div className="text-sm font-semibold text-gray-700">{item.value}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
