import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syncro — Open Banking AR',
  description: 'Tus finanzas, perfectamente sincronizadas. Open Banking para Argentina.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, background: '#0f0f1a', color: '#f1f5f9', fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}