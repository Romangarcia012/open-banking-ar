import { Pool, QueryResult } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Pool de conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('✅ Conexión a PostgreSQL establecida');
});

pool.on('error', (err: Error) => {
  console.error('❌ Error en el pool de PostgreSQL:', err.message);
});

/**
 * Ejecuta una query en la base de datos
 */
const query = (text: string, params?: unknown[]): Promise<QueryResult> => {
  return pool.query(text, params);
};

export { pool, query };
