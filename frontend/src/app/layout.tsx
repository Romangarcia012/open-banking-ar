import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Open Banking AR',
  description: 'Plataforma de Open Banking para Argentina — BCRA Transferencias 3.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <header className="bg-blue-800 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏦</span>
              <span className="text-xl font-bold tracking-tight">Open Banking AR</span>
            </div>
            <nav className="flex gap-6 text-sm font-medium">
              <a href="/" className="hover:text-blue-200 transition-colors">Inicio</a>
              <a href="/accounts" className="hover:text-blue-200 transition-colors">Cuentas</a>
              <a href="/payments" className="hover:text-blue-200 transition-colors">Pagos</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 border-t mt-16">
          <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
            Open Banking AR — Alineado con BCRA Transferencias 3.0 · Com. A 7500
          </div>
        </footer>
      </body>
    </html>
  );
}
