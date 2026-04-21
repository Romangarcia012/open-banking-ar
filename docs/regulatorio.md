# Marco Regulatorio — Open Banking Argentina

## Contexto General

Argentina se encuentra en proceso de adopción del Open Banking a través de iniciativas del **Banco Central de la República Argentina (BCRA)**. Si bien no existe aún una normativa unificada de Open Banking como en el Reino Unido o Brasil, el ecosistema se está construyendo principalmente a través de:

1. **Transferencias 3.0** — sistema de pagos interoperables en tiempo real
2. **Interoperabilidad de billeteras virtuales** — comunicación entre PSP (Proveedores de Servicios de Pago)
3. **Regulación de PSP** — marco para fintechs y proveedores de servicios financieros

---

## BCRA Transferencias 3.0 (Com. A 7500)

### ¿Qué es?

Transferencias 3.0 es el sistema de pagos interoperables lanzado en 2021 por el BCRA mediante la **Comunicación A 7500**. Permite que cualquier pago realizado mediante código QR sea procesado independientemente de la billetera digital del pagador y del receptor.

### Características principales

| Característica | Detalle |
|---------------|---------|
| Interoperabilidad | Pagos entre cualquier billetera/banco sin importar el proveedor |
| Disponibilidad | 24/7/365 |
| Liquidación | En tiempo real (T+0) |
| Cobertura | Pagos con QR, transferencias CBU/CVU/alias |
| Costo para el usuario | Sin cargo para personas físicas |

### Obligaciones para PSP

Los Proveedores de Servicios de Pago deben:
- Adherirse al protocolo de interoperabilidad del BCRA
- Implementar APIs de conexión con la infraestructura de compensación
- Mantener disponibilidad mínima del 99.9%
- Reportar incidentes de seguridad en menos de 72 horas

---

## Requisitos de Consentimiento del Usuario

Siguiendo los principios del Open Banking y las regulaciones de privacidad (incluyendo la **Ley 25.326 de Protección de Datos Personales**), el sistema implementa:

### Principios de consentimiento

1. **Explícito:** el usuario debe otorgar permisos de forma activa y consciente
2. **Granular:** posibilidad de elegir qué tipo de datos compartir (lectura de cuentas, inicio de pagos, etc.)
3. **Revocable:** el usuario puede revocar el consentimiento en cualquier momento
4. **Temporal:** cada consentimiento tiene una fecha de expiración máxima (90 días recomendados)
5. **Auditable:** registro de todos los accesos realizados bajo cada consentimiento

### Permisos implementados

| Permiso | Descripción |
|---------|-------------|
| `READ_ACCOUNTS` | Lectura de datos de cuentas (número, tipo, moneda) |
| `READ_BALANCES` | Consulta de saldos disponibles y contables |
| `READ_TRANSACTIONS` | Acceso al historial de movimientos |
| `PAYMENTS_WRITE` | Iniciación de pagos y transferencias |
| `READ_PROFILE` | Datos básicos del titular |

---

## Estándares de Seguridad

### Autenticación y Autorización

- **OAuth 2.0 Authorization Code Flow** con PKCE para aplicaciones públicas
- **OpenID Connect** para federar la identidad del usuario
- **JWT (RS256):** tokens firmados con clave asimétrica RSA-256
- **Token lifetime:** access token máximo 1 hora, refresh token 30 días

### Comunicaciones

- **TLS 1.3** obligatorio en todas las comunicaciones
- **Certificate Pinning** recomendado para apps móviles
- **MTLS (Mutual TLS):** para comunicación entre servidores en producción

### Cabeceras HTTP de Seguridad

```
Content-Security-Policy: default-src 'self'
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

---

## Comparativa Internacional

### Open Banking UK (Open Banking Standard)

| Aspecto | UK | Argentina |
|---------|-----|----------|
| Inicio | 2018 | En desarrollo |
| Regulador | FCA / CMA | BCRA |
| APIs estandarizadas | Sí (OBIE) | Parcial |
| Consentimiento | Detallado, vía AISP/PISP | En construcción |
| Alcance | Todos los bancos del Top 9 | Voluntario para PSP |

**Lecciones del modelo UK:**
- La estandarización de APIs reduce costos de integración
- El modelo AISP/PISP (Account Information / Payment Initiation Service Provider) es un marco sólido
- La regulación debe equilibrar innovación con protección al consumidor

### Open Finance Brasil

| Aspecto | Brasil | Argentina |
|---------|--------|----------|
| Inicio | 2021 | En desarrollo |
| Regulador | Banco Central do Brasil | BCRA |
| Fases | 4 fases completadas | Fase inicial |
| Participación | Obligatoria (bancos) | Voluntaria |
| Alcance | Datos financieros + seguros + inversiones | Pagos (Transf. 3.0) |

**Lecciones del modelo Brasil:**
- La implementación por fases reduce el impacto operacional
- La participación obligatoria acelera la adopción
- El ecosistema Open Finance (más amplio que Open Banking) genera más valor

---

## Roadmap Regulatorio Esperado

Basado en las tendencias regionales y las iniciativas del BCRA:

1. **Corto plazo (2024-2025)**
   - Consolidación de Transferencias 3.0
   - Regulación de BNPL (Buy Now Pay Later)
   - Marco para Open Data financiero

2. **Mediano plazo (2025-2027)**
   - APIs estandarizadas para consulta de cuentas
   - Habilitación de TPPs (Terceros Proveedores)
   - Sistema de consentimientos centralizado

3. **Largo plazo (2027+)**
   - Open Finance completo (inversiones, seguros, pensiones)
   - Interoperabilidad regional (MERCOSUR)
   - Identidad digital financiera

---

## Referencias

- [BCRA - Comunicación A 7500](https://www.bcra.gob.ar/Pdfs/comytexord/A7500.pdf)
- [BCRA - Marco de PSP](https://www.bcra.gob.ar/SistemasFinancieros/Regulacion_PSP.asp)
- [Ley 25.326 - Protección de Datos Personales](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/64790/texact.htm)
- [Open Banking UK Standard](https://standards.openbanking.org.uk/)
- [Open Finance Brasil - Especificações](https://openfinancebrasil.atlassian.net/wiki/spaces/OF/overview)
- [OAuth 2.0 RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)
- [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
