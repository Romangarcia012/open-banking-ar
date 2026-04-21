interface Account {
  id: string;
  accountNumber: string;
  cbu: string;
  alias?: string;
  currency: string;
  balance: number;
  availableBalance: number;
  accountType: string;
}

// Carga los datos de cuentas desde el backend (server component)
async function getAccounts(): Promise<Account[]> {
  try {
    const res = await fetch('http://backend:3001/api/v1/accounts', {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Error al obtener cuentas');
    const json = await res.json();
    return json.data as Account[];
  } catch {
    // Datos mock de fallback para desarrollo sin backend
    return [
      {
        id: 'acc-001',
        accountNumber: '0000-0000-0000-0001',
        cbu: '0070000020000000000001',
        alias: 'MI.CUENTA.PRINCIPAL',
        currency: 'ARS',
        balance: 150000.75,
        availableBalance: 145000.0,
        accountType: 'checking',
      },
      {
        id: 'acc-002',
        accountNumber: '0000-0000-0000-0002',
        cbu: '0070000020000000000002',
        alias: 'MI.CAJA.AHORRO',
        currency: 'ARS',
        balance: 85000.0,
        availableBalance: 85000.0,
        accountType: 'savings',
      },
    ];
  }
}

const accountTypeLabel: Record<string, string> = {
  checking: 'Cuenta Corriente',
  savings: 'Caja de Ahorro',
  credit: 'Cuenta de Crédito',
};

export default async function AccountsPage() {
  const accounts = await getAccounts();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">💳 Mis Cuentas</h1>
        <p className="text-gray-500">
          Consultá el saldo y los movimientos de tus cuentas bancarias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                  {accountTypeLabel[account.accountType] || account.accountType}
                </span>
                <h2 className="text-lg font-bold text-gray-900">{account.alias || account.accountNumber}</h2>
              </div>
              <span className="text-2xl">🏦</span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">CBU</span>
                <span className="font-mono text-xs text-gray-700">{account.cbu}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Moneda</span>
                <span className="font-semibold">{account.currency}</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between items-center">
                <span className="text-gray-500">Saldo disponible</span>
                <span className="text-2xl font-extrabold text-green-600">
                  ${account.availableBalance.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Saldo contable</span>
                <span>${account.balance.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <a
              href={`/accounts/${account.id}/transactions`}
              className="mt-4 block text-center bg-blue-50 text-blue-700 text-sm font-medium py-2 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Ver movimientos →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
