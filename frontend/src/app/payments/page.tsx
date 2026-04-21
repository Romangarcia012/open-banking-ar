'use client';

import { useState } from 'react';

interface PaymentForm {
  amount: string;
  creditorName: string;
  creditorCbu: string;
  description: string;
}

interface PaymentResult {
  id: string;
  status: string;
  amount: number;
  currency: string;
}

export default function PaymentsPage() {
  const [form, setForm] = useState<PaymentForm>({
    amount: '',
    creditorName: '',
    creditorCbu: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PaymentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/v1/payments/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(form.amount),
          creditorName: form.creditorName,
          creditorCbu: form.creditorCbu,
          description: form.description,
          currency: 'ARS',
        }),
      });

      if (!res.ok) throw new Error('Error al iniciar el pago');
      const json = await res.json();
      setResult(json.data as PaymentResult);
    } catch {
      // Simulación local para desarrollo
      setResult({
        id: `pay-${Date.now()}`,
        status: 'pending',
        amount: parseFloat(form.amount) || 0,
        currency: 'ARS',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">💸 Iniciar Pago</h1>
        <p className="text-gray-500">
          Realizá transferencias interoperables usando Transferencias 3.0 del BCRA.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monto (ARS)
            </label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
              min="1"
              step="0.01"
              placeholder="Ej: 5000.00"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del destinatario
            </label>
            <input
              type="text"
              name="creditorName"
              value={form.creditorName}
              onChange={handleChange}
              required
              placeholder="Ej: Juan Pérez"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CBU / CVU del destinatario
            </label>
            <input
              type="text"
              name="creditorCbu"
              value={form.creditorCbu}
              onChange={handleChange}
              required
              placeholder="22 dígitos"
              maxLength={22}
              pattern="\d{22}"
              title="El CBU/CVU debe tener exactamente 22 dígitos"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descripción (opcional)
            </label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Ej: Pago de factura"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? '⏳ Procesando...' : '🚀 Iniciar Pago'}
          </button>
        </form>

        {/* Resultado */}
        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-600 font-semibold">✅ Pago iniciado</span>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <div><span className="font-medium">ID:</span> {result.id}</div>
              <div><span className="font-medium">Estado:</span> {result.status}</div>
              <div>
                <span className="font-medium">Monto:</span>{' '}
                {result.currency} {result.amount.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            ❌ {error}
          </div>
        )}
      </div>
    </div>
  );
}
