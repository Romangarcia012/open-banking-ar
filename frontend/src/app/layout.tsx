import type { Metadata } from 'next';
import './globals.css';
import BottomNav from './components/BottomNav';

export const metadata: Metadata = {
  title: 'Syncro — Open Banking AR',
  description: 'Tus finanzas, perfectamente sincronizadas. Open Banking para Argentina.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#0A0A0F', color: '#F1F5F9', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}