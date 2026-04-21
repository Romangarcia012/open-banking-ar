import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares globales
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas principales
app.use(router);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Open Banking AR corriendo en puerto ${PORT}`);
  console.log(`📋 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/v1/health`);
});

export default app;
