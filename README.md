# 🏦 Open Banking Argentina

[![CI](https://github.com/Romangarcia012/open-banking-ar/actions/workflows/ci.yml/badge.svg)](https://github.com/Romangarcia012/open-banking-ar/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)

> Plataforma de Open Banking para Argentina, alineada con las iniciativas del BCRA (Banco Central de la República Argentina) y los estándares internacionales de Open Finance.

## 📋 Descripción

Este proyecto implementa una plataforma de Open Banking para Argentina siguiendo los lineamientos del **BCRA** y los estándares internacionales de Open Banking (UK Open Banking, Open Finance Brasil). La plataforma permite a terceros proveedores (TPP) acceder a información de cuentas y realizar pagos con el consentimiento explícito del usuario, utilizando OAuth 2.0 / OpenID Connect.

## 🏗️ Arquitectura

```
open-banking-ar/
├── backend/                    # API REST (Node.js + Express + TypeScript)
│   ├── src/
│   │   ├── config/             # Configuración (base de datos, etc.)
│   │   ├── middleware/         # Middlewares de autenticación y errores
│   │   ├── routes/             # Rutas de la API (cuentas, pagos, consentimientos, auth)
│   │   └── types/              # Interfaces TypeScript
│   └── Dockerfile
├── frontend/                   # Aplicación web (Next.js + Tailwind CSS)
│   ├── src/
│   │   ├── app/                # App Router de Next.js
│   │   └── lib/                # Clientes API
│   └── Dockerfile
├── docs/                       # Documentación técnica y regulatoria
│   ├── arquitectura.md
│   └── regulatorio.md
├── docker-compose.yml          # Orquestación de servicios
└── .env.example                # Variables de entorno de ejemplo
```

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Backend | Node.js 20 + Express 4 + TypeScript 5 |
| Frontend | React 18 + Next.js 14 + Tailwind CSS 3 |
| Base de datos | PostgreSQL 16 |
| Caché | Redis 7 |
| Autenticación | OAuth 2.0 / OpenID Connect (JWT) |
| Infraestructura | Docker + Docker Compose + GitHub Actions |

## 🚀 Cómo correr localmente

### Prerrequisitos

- [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/)
- Node.js 20+ (para desarrollo local sin Docker)

### Con Docker Compose (recomendado)

```bash
# 1. Clonar el repositorio
git clone https://github.com/Romangarcia012/open-banking-ar.git
cd open-banking-ar

# 2. Copiar variables de entorno
cp .env.example .env

# 3. Levantar todos los servicios
docker-compose up

# El frontend estará disponible en: http://localhost:3000
# El backend estará disponible en:  http://localhost:3001
```

### Sin Docker (desarrollo)

```bash
# Backend
cd backend
npm install
npm run dev   # Puerto 3001

# Frontend (en otra terminal)
cd frontend
npm install
npm run dev   # Puerto 3000
```

## 📡 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/v1/health` | Estado del servicio |
| GET | `/api/v1/accounts` | Listar cuentas |
| GET | `/api/v1/accounts/:id` | Detalle de cuenta |
| GET | `/api/v1/accounts/:id/transactions` | Movimientos de cuenta |
| POST | `/api/v1/payments/initiate` | Iniciar pago |
| GET | `/api/v1/payments/:id/status` | Estado del pago |
| POST | `/api/v1/consent` | Crear consentimiento |
| GET | `/api/v1/consent/:id` | Obtener consentimiento |
| DELETE | `/api/v1/consent/:id` | Revocar consentimiento |
| POST | `/api/v1/auth/token` | Obtener token JWT |
| POST | `/api/v1/auth/authorize` | Autorización OAuth |
| POST | `/api/v1/auth/revoke` | Revocar token |

## 🔐 Flujo de Autenticación

El proyecto implementa el flujo **Authorization Code** de OAuth 2.0:

1. El usuario otorga consentimiento al TPP
2. El TPP solicita un código de autorización
3. El sistema emite un token JWT con los permisos del consentimiento
4. El TPP utiliza el token para acceder a los recursos autorizados

## 📚 Referencias Regulatorias

- 🏛️ [BCRA - Transferencias 3.0](https://www.bcra.gob.ar)
- 📄 [Comunicación A 7500 - Interoperabilidad de pagos](https://www.bcra.gob.ar/Pdfs/comytexord/A7500.pdf)
- 🌐 [Open Banking UK Standard](https://www.openbanking.org.uk/)
- 🇧🇷 [Open Finance Brasil](https://openfinancebrasil.org.br/)

## 📖 Documentación

- [Arquitectura del sistema](docs/arquitectura.md)
- [Marco regulatorio argentino](docs/regulatorio.md)

## 🤝 Contribuir

1. Fork el repositorio
2. Crear una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit los cambios (`git commit -m 'feat: agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

MIT — ver [LICENSE](LICENSE) para más detalles.