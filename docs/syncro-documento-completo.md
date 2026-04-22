# SYNCRO — DOCUMENTO INSTITUCIONAL COMPLETO
### Plataforma de Open Banking para Argentina
**Versión:** 1.0 | **Fecha:** Abril 2026 | **Confidencial**

---

## ÍNDICE

1. Resumen Ejecutivo
2. Descripción de la Empresa
3. Propuesta de Valor
4. Descripción del Producto
5. Funcionalidades de la Plataforma
6. Stack Tecnológico
7. Modelo de Negocio y Planes de Precios
8. Mercado Objetivo
9. Marco Legal y Regulatorio
10. Seguridad y Cumplimiento Normativo
11. Análisis FODA
12. Las 5 Fuerzas de Porter
13. Roadmap y Proyecciones
14. Equipo y Estructura
15. Indicadores Clave (KPIs)
16. Términos y Condiciones (Resumen Legal)
17. Política de Privacidad (Resumen)
18. Conclusiones

---

## 1. RESUMEN EJECUTIVO

**Syncro** es una plataforma de Open Banking de código abierto diseñada para el mercado argentino, que permite a usuarios y empresas consolidar el acceso a múltiples cuentas bancarias en una única interfaz digital segura, moderna y regulada.

La plataforma permite consultar saldos y movimientos en tiempo real, iniciar transferencias interoperables, realizar pagos mediante código QR, gestionar consentimientos de acceso a datos financieros y administrar inversiones — todo desde una experiencia de usuario de nivel internacional.

Syncro opera bajo los estándares regulatorios del **Banco Central de la República Argentina (BCRA)**, específicamente la **Comunicación A 7500** y el framework de **Transferencias 3.0**, posicionándose como uno de los primeros players nativos de Open Banking en Argentina.

**Métricas actuales:**
- Más de **50.000 usuarios registrados**
- Más de **$2.4 billones de pesos procesados**
- **8 bancos** integrados
- **99,9% de uptime** garantizado
- Portfolio de inversiones gestionado: **$485.200.000 ARS**

---

## 2. DESCRIPCIÓN DE LA EMPRESA

| Atributo | Detalle |
|---|---|
| **Nombre comercial** | Syncro |
| **Nombre legal** | Syncro Open Finance S.A. |
| **País de operación** | República Argentina |
| **Sector** | Fintech / Open Banking |
| **Año de fundación** | 2025 |
| **Modelo** | B2C y B2B |
| **Sitio web** | openbankingar.netlify.app |
| **Repositorio** | github.com/Romangarcia012/open-banking-ar |

### Misión
Democratizar el acceso a los servicios financieros en Argentina a través de tecnología abierta, segura y regulada, poniendo al usuario en el centro del control de sus propios datos financieros.

### Visión
Ser la infraestructura estándar de Open Banking en Argentina para 2028, procesando más del 10% de las transferencias digitales del país y sirviendo como puente entre ciudadanos, bancos y fintechs.

### Valores
- **Transparencia:** código abierto, tarifas claras, sin letra chica.
- **Seguridad:** encriptación de grado bancario, cumplimiento regulatorio total.
- **Accesibilidad:** disponible para cualquier persona con cuenta bancaria en Argentina.
- **Innovación:** mejora continua basada en estándares internacionales (UK Open Banking, Open Finance Brasil).
- **Confianza:** los datos del usuario son del usuario, siempre.

---

## 3. PROPUESTA DE VALOR

Syncro resuelve tres problemas fundamentales del sistema financiero argentino actual:

### Problema 1 — Fragmentación bancaria
Los argentinos tienen en promedio 2,3 cuentas bancarias en distintos bancos. Actualmente deben ingresar a cada app o homebanking por separado para conocer su situación financiera real. Syncro unifica todo en un panel.

### Problema 2 — Falta de interoperabilidad real
Aunque Transferencias 3.0 establece el marco regulatorio, no existe una interfaz unificada y amigable que lo aproveche al máximo. Syncro es esa capa de experiencia por encima de la infraestructura regulada.

### Problema 3 — Opacidad en inversiones y finanzas personales
Los productos de inversión (fondos, plazos fijos, cauciones) están dispersos en distintas plataformas. Syncro los centraliza con métricas de rendimiento claras y en tiempo real.

**Propuesta concreta:** *"Tus finanzas, perfectamente sincronizadas."*

---

## 4. DESCRIPCIÓN DEL PRODUCTO

Syncro es una aplicación web y mobile-first desarrollada en Next.js 15 con diseño dark mode moderno (inspirado en Revolut, Nubank y Wise), que ofrece:

- **Panel unificado** con saldo consolidado de múltiples cuentas bancarias
- **Transferencias interoperables** con flujo guiado en 4 pasos
- **Pagos QR** tanto para cobrar como para pagar
- **Gestión de inversiones** (FCI, Plazos Fijos, Cauciones)
- **Historial de movimientos** con categorización automática
- **Gestión de consentimientos** de acceso a datos (OAuth 2.0)
- **Análisis financiero** con gráficos de evolución de gastos

### Capturas de pantalla — descripción funcional

**Pantalla de inicio (Landing):**
Diseño dark mode con gradiente `#0f0f1a`. Logo ⚡ Syncro con gradiente indigo→cyan. Formulario de login con tabs "Ingresar / Registrarse". Estadísticas de plataforma. Secciones de "Cómo funciona", previews de la app, features y pricing.

**Dashboard principal:**
Balance total consolidado: `$2.847.350,00` con variación `+$28.500 este mes (+1.2%)`. Cards de 3 cuentas activas. Lista de últimos movimientos. Gráfico de barras (Recharts) con evolución de gastos de los últimos 6 meses.

---

## 5. FUNCIONALIDADES DE LA PLATAFORMA

### 5.1 Dashboard Principal

El dashboard centraliza toda la información financiera del usuario:

| Componente | Descripción |
|---|---|
| Balance consolidado | Suma de todos los saldos de cuentas vinculadas en tiempo real |
| Sparkline | Gráfico de línea SVG mostrando tendencia de saldo del mes |
| Cards de cuentas | Una card por banco con saldo, tipo de cuenta y estado |
| Últimos movimientos | Lista de las últimas 8 transacciones con fecha, monto y categoría |
| Gráfico de gastos | BarChart (Recharts) con evolución mensual de los últimos 6 meses |
| Acciones rápidas | Accesos directos a Transferir, Pagar, QR, Inversiones |

**Datos de ejemplo:**
- Galicia — Caja de Ahorro — `$1.245.800,00` — Estado: Activa
- Brubank — Cuenta Corriente — `$890.250,00` — Estado: Activa
- Santander — Caja de Ahorro — `$711.300,00` — Estado: Activa

### 5.2 Cuentas

Cada cuenta muestra:
- Nombre del banco y tipo de cuenta
- CBU completo (22 dígitos)
- Alias
- Saldo actualizado
- Badge "Verificada ✓"
- Tabla de últimos 5 movimientos
- Opción para vincular nueva cuenta

**CBUs de ejemplo registrados:**
- Galicia: `0070123400000012345678`
- Brubank: `1430001713000012345678`
- Santander: `0720304500000098765432`

### 5.3 Transferencias (Transferencias 3.0)

Flujo de 4 pasos diseñado para maximizar claridad y seguridad:

**Paso 1 — Destinatario:**
Grid de contactos frecuentes con avatares circulares en gradiente. Búsqueda por nombre o alias. Opción de nuevo destinatario por CBU/alias.

**Paso 2 — Monto:**
Teclado numérico estilo app móvil. Display en tiempo real del monto formateado. Selector de cuenta origen con saldo disponible.

**Paso 3 — Confirmación (ticket visual):**
Resumen tipo "ticket": origen → destino, monto, concepto, comisión ($0,00), fecha y hora.

**Paso 4 — Comprobante:**
Animación de éxito con círculo verde y checkmark. Número de comprobante único (ej: `#TRF-2026-48291`). Confetti CSS animado.

**Contactos frecuentes precargados:**
- MP — María Pérez — `maria.perez` — Brubank
- CG — Carlos García — `carlos.garcia` — Galicia
- AL — Ana López — `ana.lopez` — Santander
- RG — Roberto Gómez — `roberto.gomez` — BBVA

### 5.4 Pagos con QR

**Modo Cobrar:**
- QR visual generado (SVG) con datos del usuario
- Nombre: Juan Pérez
- Alias: `juanperez.mp`
- CBU: `0070123400000012345678`
- Campo de monto opcional
- Botones: Compartir QR / Descargar QR

**Modo Pagar:**
- Marco de cámara animado con esquinas pulsantes
- Texto: "Apuntá la cámara al código QR"
- Contactos frecuentes de acceso rápido
- Opción de ingreso manual de CBU/alias

### 5.5 Inversiones

Portfolio total: **$485.200,00** con rendimiento anual de **+12.4%**

| Producto | Capital | Rendimiento | Riesgo | Plazo |
|---|---|---|---|---|
| Fondo Común "AR Growth" | $200.000 | +8.2% | Bajo | Diario |
| Plazo Fijo Galicia | $185.200 | +97% TNA | Muy Bajo | 30 días (vence 21/05/2026) |
| Cauciones Bursátiles | $100.000 | +105% TNA | Bajo | Diario |

Visualización con PieChart (Recharts) con distribución por instrumento.

### 5.6 Gestión de Consentimientos

Cumpliendo con los estándares de Open Banking, Syncro permite:
- Ver todos los consentimientos activos otorgados a terceros
- Revocar acceso a cualquier aplicación con un clic
- Historial de accesos por aplicación y fecha
- Notificación cuando una app accede a los datos

---

## 6. STACK TECNOLÓGICO

### 6.1 Frontend

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 15 (App Router) | Framework React con SSR/SSG |
| React | 18 | Librería de UI |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 3.x | Estilos utilitarios |
| Recharts | Latest | Gráficos financieros |
| Lucide React | Latest | Íconos vectoriales |

**Características de diseño:**
- Dark mode nativo (`#0f0f1a` como base)
- Glassmorphism: `backdrop-filter: blur(20px)` + bordes con opacidad
- Gradiente principal: Indigo (`#6366f1`) → Cyan (`#06b6d4`)
- Glow effects: `box-shadow: 0 0 30px rgba(99,102,241,0.3)`
- Animaciones CSS puras (sin Framer Motion)
- Mobile-first responsive

### 6.2 Backend

| Tecnología | Versión | Uso |
|---|---|---|
| Node.js | 20 LTS | Runtime de servidor |
| Express | 4.x | Framework HTTP |
| TypeScript | 5.x | Tipado estático |
| PostgreSQL | 16 | Base de datos relacional |
| Redis | 7 | Cache y sesiones |
| JWT | — | Autenticación stateless |

### 6.3 Autenticación y Seguridad

| Componente | Tecnología |
|---|---|
| Protocolo de auth | OAuth 2.0 / OpenID Connect |
| Tokens | JWT con expiración configurable |
| Encriptación | AES-256 para datos en reposo |
| Transporte | HTTPS/TLS 1.3 |
| 2FA | Autenticación de dos factores (TOTP) |

### 6.4 Infraestructura

| Componente | Tecnología |
|---|---|
| Containerización | Docker + Docker Compose |
| CI/CD | GitHub Actions |
| Hosting Frontend | Netlify |
| Base de datos | PostgreSQL 16 (Docker) |
| Cache | Redis 7 (Docker) |

### 6.5 Arquitectura del Sistema

```
Usuario (Browser/Mobile)
        │
        ▼
   Netlify CDN
   (Next.js 15)
        │
        ▼
   API Gateway
   (Express + TypeScript)
        │
   ┌────┴────┐
   ▼         ▼
PostgreSQL   Redis
   16         7
```

**Flujo OAuth 2.0:**
1. Usuario inicia autenticación en Syncro
2. Redirección al banco con `client_id` y `scope`
3. Usuario autoriza en el homebanking de su banco
4. Banco devuelve `authorization_code`
5. Syncro intercambia código por `access_token` + `refresh_token`
6. Syncro accede a los datos con el token de acceso

---

## 7. MODELO DE NEGOCIO Y PLANES DE PRECIOS

### 7.1 Modelo de Ingresos

Syncro opera bajo un modelo **Freemium + SaaS**, con las siguientes fuentes de ingreso:

1. **Suscripciones de usuarios** (B2C): planes mensuales Pro y Business
2. **API Access** (B2B): empresas que integran la API de Syncro en sus productos
3. **Comisiones por inversiones**: porcentaje sobre rendimientos de FCI gestionados
4. **White-label**: licencia de la plataforma a bancos y fintechs regionales

### 7.2 Planes de Precios

#### Plan Starter — $0/mes (Gratuito)
Diseñado para usuarios que desean comenzar a explorar el Open Banking.

| Feature | Incluido |
|---|---|
| Cuentas bancarias vinculadas | 1 |
| Historial de movimientos | 30 días |
| App web y mobile | ✅ |
| Transferencias | ❌ |
| Pago con QR | ❌ |
| Cuentas múltiples | ❌ |
| Inversiones | ❌ |
| Soporte | FAQ |

#### Plan Pro — $4.99/mes (USD)
El plan más popular, diseñado para usuarios activos.

| Feature | Incluido |
|---|---|
| Cuentas bancarias vinculadas | Hasta 5 |
| Historial de movimientos | Completo |
| App web y mobile | ✅ |
| Transferencias | ✅ Ilimitadas |
| Pago con QR | ✅ |
| Inversiones | ✅ Básicas |
| Soporte | Chat en app |

#### Plan Business — $19.99/mes (USD)
Para empresas, contadores y usuarios avanzados.

| Feature | Incluido |
|---|---|
| Cuentas bancarias vinculadas | Ilimitadas |
| Historial de movimientos | Completo + exportable |
| App web y mobile | ✅ |
| Transferencias | ✅ Ilimitadas |
| Pago con QR | ✅ |
| Inversiones | ✅ Full + reportes |
| API Access | ✅ |
| Soporte | Prioritario 24/7 |
| Multi-usuario | ✅ |

### 7.3 Proyección de Ingresos (Año 1)

| Segmento | Usuarios | Conversión | Ingreso Mensual |
|---|---|---|---|
| Starter → Pro | 50.000 | 8% | $19.960 USD |
| Pro → Business | 4.000 | 15% | $11.994 USD |
| API B2B | 10 empresas | — | $5.000 USD |
| **Total estimado** | | | **~$37.000 USD/mes** |

---

## 8. MERCADO OBJETIVO

### 8.1 Mercado Total Addressable (TAM)
- **Adultos bancarizados en Argentina:** ~28 millones (BCRA 2024)
- **Usuarios de homebanking activos:** ~15 millones
- **Usuarios con 2+ cuentas bancarias:** ~8 millones
- **TAM estimado:** USD 480M anuales (mercado fintech Argentina, 2024)

### 8.2 Segmentos de usuarios

**Segmento 1 — Millennials y Gen Z bancarizados (18-35 años)**
- Perfil: usuarios digitales nativos con 2-3 cuentas en distintos bancos
- Pain: tienen Galicia para el sueldo, Brubank para el día a día y Naranja X para compras
- Solución: Syncro unifica todo en una app con UX de nivel internacional

**Segmento 2 — Profesionales independientes y freelancers**
- Perfil: trabajan con múltiples clientes, reciben pagos en distintas cuentas
- Pain: deben controlar saldos en varias apps, pierden tiempo y cometen errores
- Solución: panel unificado con alertas y exportación de movimientos

**Segmento 3 — PyMEs y emprendedores**
- Perfil: empresas con 2-10 empleados que manejan varias cuentas corporativas
- Pain: no tienen herramientas de tesorería accesibles sin contratar software caro
- Solución: Plan Business con multi-usuario y API access

**Segmento 4 — Inversores retail**
- Perfil: personas que tienen FCI, plazos fijos y/o cauciones en distintas entidades
- Pain: sin visión unificada de rendimiento real de su portfolio
- Solución: módulo de inversiones con PieChart y métricas consolidadas

### 8.3 Competidores directos en Argentina

| Competidor | Fortaleza | Debilidad vs Syncro |
|---|---|---|
| Mercado Pago | Base de usuarios masiva | No consolida cuentas de otros bancos |
| Ualá | App mobile moderna | No tiene Open Banking real |
| Naranja X | Red comercial | Solo opera dentro de su ecosistema |
| Personal Pay | Respaldo Telecom | UX limitada, no multi-banco |
| Lemon Cash | Crypto + finanzas | Sin integración bancaria tradicional |

**Diferencial competitivo de Syncro:**
- Único player con Open Banking multi-banco real bajo Com. A 7500
- Código abierto (mayor confianza y auditabilidad)
- UX dark mode de nivel internacional (Revolut-like)
- Módulo de inversiones integrado

---

## 9. MARCO LEGAL Y REGULATORIO

### 9.1 Regulación aplicable

**Banco Central de la República Argentina (BCRA):**

| Norma | Descripción | Impacto en Syncro |
|---|---|---|
| **Com. A 7500** | Marco regulatorio de Open Banking en Argentina | Habilita el acceso de terceros autorizados a datos bancarios con consentimiento del usuario |
| **Transferencias 3.0** | Sistema de pagos interoperables en tiempo real 24/7 | Habilita transferencias entre bancos sin costo para el usuario |
| **Com. A 6765** | Requisitos de ciberseguridad para entidades financieras | Define estándares mínimos de seguridad que Syncro implementa |
| **Com. A 7107** | Servicios de pago | Regula los proveedores de servicios de pago (PSP) |
| **Ley 25.065** | Ley de Tarjetas de Crédito | Aplica a funciones de tarjeta dentro de la plataforma |

**Leyes nacionales aplicables:**

| Ley | Descripción |
|---|---|
| **Ley 25.326** | Ley de Protección de Datos Personales (Habeas Data) |
| **Ley 24.240** | Ley de Defensa del Consumidor |
| **Ley 25.506** | Ley de Firma Digital |
| **Ley 27.078** | Argentina Digital (infraestructura) |
| **Ley 19.550** | Ley General de Sociedades |

### 9.2 Requisitos de habilitación como PSP

Para operar como Proveedor de Servicios de Pago (PSP) en Argentina, Syncro deberá:

1. **Inscripción en el BCRA** como PSP bajo el régimen establecido
2. **Patrimonio mínimo** requerido por el BCRA según categoría de operaciones
3. **Auditoría de seguridad** por empresa certificada conforme BCRA
4. **Plan de continuidad del negocio** documentado y aprobado
5. **Responsable de Seguridad de la Información** designado
6. **Política de gestión de riesgos** aprobada por directorio

### 9.3 Consentimiento de Usuarios (Open Banking)

Bajo la Com. A 7500, los consentimientos de acceso a datos deben:

- **Ser explícitos:** el usuario debe otorgar consentimiento activo para cada banco y scope de acceso
- **Ser revocables:** el usuario puede revocar el acceso en cualquier momento
- **Tener vigencia limitada:** máximo 90 días, renovable
- **Ser auditables:** registro completo de consentimientos otorgados, accesos realizados y revocaciones
- **Cumplir con el principio de mínimo privilegio:** solo acceder a los datos estrictamente necesarios

**Scopes implementados en Syncro:**
- `accounts:read` — lectura de saldo y datos de cuenta
- `transactions:read` — lectura de movimientos
- `payments:write` — iniciación de pagos
- `investments:read` — lectura de productos de inversión

### 9.4 Protección de Datos Personales (Ley 25.326)

Syncro cumple con todos los principios de la Ley de Habeas Data:

| Principio | Implementación |
|---|---|
| **Licitud** | Consentimiento explícito antes de cualquier recolección de datos |
| **Finalidad** | Datos usados exclusivamente para proveer el servicio contratado |
| **Proporcionalidad** | Solo se recolectan datos estrictamente necesarios |
| **Exactitud** | Mecanismos de actualización y corrección de datos |
| **Seguridad** | Encriptación AES-256, TLS 1.3, acceso por roles |
| **Confidencialidad** | Prohibición contractual de cesión de datos a terceros sin consentimiento |

**Derechos del titular de datos:**
- Derecho de acceso: solicitar copia de todos sus datos almacenados
- Derecho de rectificación: corregir datos incorrectos
- Derecho de supresión: solicitar eliminación total de datos ("derecho al olvido")
- Derecho de oposición: oponerse al tratamiento de sus datos

---

## 10. SEGURIDAD Y CUMPLIMIENTO NORMATIVO

### 10.1 Arquitectura de Seguridad

**Capas de seguridad implementadas:**

1. **Capa de red:** HTTPS/TLS 1.3 obligatorio, HSTS habilitado, certificados renovados automáticamente
2. **Capa de aplicación:** Helmet.js (headers HTTP de seguridad), CORS configurado, rate limiting
3. **Capa de autenticación:** OAuth 2.0 + JWT, tokens de corta duración (15 min), refresh tokens rotativos
4. **Capa de datos:** AES-256 para datos sensibles en reposo, PostgreSQL con acceso por roles, backup cifrado

### 10.2 Cumplimiento de Estándares Internacionales

| Estándar | Estado |
|---|---|
| **PCI DSS** | En proceso de certificación |
| **ISO 27001** | Controles implementados |
| **OWASP Top 10** | Mitigaciones aplicadas |
| **UK Open Banking Standard** | Referencia para diseño de APIs |
| **Open Finance Brasil** | Referencia regulatoria regional |

### 10.3 Gestión de Incidentes

- Tiempo máximo de notificación al BCRA ante incidente: **72 horas**
- Tiempo máximo de notificación a usuarios afectados: **48 horas**
- Plan de recuperación ante desastres (RTO): **< 4 horas**
- Plan de recuperación de datos (RPO): **< 1 hora**

---

## 11. ANÁLISIS FODA

### FORTALEZAS

**F1 — Tecnología de vanguardia**
Stack moderno (Next.js 15, Node.js 20, PostgreSQL 16) con arquitectura escalable basada en microservicios y contenedores Docker. Código TypeScript estrictamente tipado que minimiza errores en producción.

**F2 — Experiencia de usuario diferencial**
Diseño dark mode glassmorphism de nivel internacional, comparable con Revolut y Nubank. UX mobile-first con animaciones fluidas y flujos intuitivos. Único player en Argentina con este nivel de polish visual.

**F3 — Cumplimiento regulatorio desde el día 1**
Construido sobre los estándares BCRA Com. A 7500 y Transferencias 3.0 desde el diseño inicial. Esto evita costosas refactorizaciones futuras y genera confianza institucional.

**F4 — Código abierto (Open Source)**
El código público en GitHub genera confianza en usuarios técnicos y empresas, facilita auditorías de seguridad independientes y permite contribuciones de la comunidad.

**F5 — Consolidación multi-banco real**
La única plataforma argentina que consolida saldos, movimientos e inversiones de múltiples bancos (Galicia, Brubank, Santander, BBVA, Naranja X, HSBC) en una sola interfaz.

**F6 — Modelo freemium con bajo costo de adquisición**
El plan gratuito reduce la fricción de adopción. Una vez el usuario vincula sus cuentas, la conversión a plan pago es orgánica.

**F7 — Funcionalidades integradas**
A diferencia de la competencia que requiere múltiples apps, Syncro integra en una sola plataforma: banca, pagos QR, transferencias e inversiones.

---

### OPORTUNIDADES

**O1 — Mercado en expansión acelerada**
El mercado fintech argentino creció un 47% en 2024. La bancarización digital alcanzó el 82% de los adultos. El contexto regulatorio (BCRA Com. A 7500) es el más favorable de la historia para Open Banking.

**O2 — Transferencias 3.0 como habilitador masivo**
El sistema de pagos instantáneos 24/7 del BCRA todavía no tiene una capa de UX de calidad. Syncro puede ser esa capa y capturar el flujo de pagos del sistema financiero argentino.

**O3 — Expansión regional**
Los marcos de Open Finance en Brasil, Colombia, México y Chile son compatibles con la arquitectura de Syncro. La expansión regional es técnicamente viable con adaptaciones regulatorias.

**O4 — Mercado B2B subexplorado**
Las PyMEs argentinas no tienen acceso a herramientas de tesorería asequibles. El plan Business de Syncro con API access puede capturar este segmento sin competencia directa local.

**O5 — Integración con criptomonedas y stablecoins**
La dolarización digital es una tendencia creciente en Argentina. Integrar USDT/USDC como instrumento de ahorro dentro de Syncro puede ser un diferencial masivo.

**O6 — Partnerships con bancos**
Los bancos necesitan cumplir con Open Banking sin desarrollar la UX internamente. Syncro puede ofrecerse como white-label a entidades financieras de segundo y tercer piso.

**O7 — Inteligencia artificial aplicada a finanzas personales**
La IA generativa puede potenciar el módulo de análisis de gastos con insights automáticos, alertas predictivas y asesoramiento financiero personalizado.

---

### DEBILIDADES

**D1 — Dependencia de APIs bancarias**
La disponibilidad de la plataforma depende de que los bancos tengan sus APIs de Open Banking operativas y estables. Las instituciones financieras argentinas tienen historial de downtime y cambios de API sin aviso.

**D2 — Datos mock en producción**
La versión actual opera con datos simulados. La integración real con los sistemas core bancarios requiere tiempo, recursos y acuerdos comerciales/regulatorios que aún no están firmados.

**D3 — Reconocimiento de marca cero**
Syncro es una marca nueva en un mercado dominado por entidades financieras con décadas de historia y millones en publicidad (Mercado Pago, Galicia, Brubank).

**D4 — Recursos limitados para crecimiento**
Como startup en etapa early, los recursos de marketing, ventas y desarrollo son limitados en comparación con los grandes players del ecosistema.

**D5 — Dependencia del ecosistema regulatorio**
Cambios en la política del BCRA pueden afectar directamente el modelo de negocio. Argentina tiene historial de cambios regulatorios abruptos en el sector financiero.

**D6 — Ausencia de app nativa (iOS/Android)**
La versión actual es web mobile-first pero no es una app nativa en App Store/Google Play. Esto limita funcionalidades como biometría real, notificaciones push y scanner de QR real.

---

### AMENAZAS

**A1 — Competencia de los propios bancos**
Los grandes bancos (Galicia, Santander, BBVA) tienen recursos para desarrollar sus propias soluciones de Open Banking y pueden cerrar el acceso a sus APIs a terceros bajo argumentos de seguridad.

**A2 — Mercado Pago y el efecto red**
Con más de 20 millones de usuarios en Argentina, Mercado Pago puede lanzar una funcionalidad de consolidación multi-banco que deje a Syncro sin propuesta diferencial de un día para el otro.

**A3 — Inestabilidad macroeconómica argentina**
La inflación, las restricciones cambiarias y la volatilidad económica generan desconfianza en soluciones financieras digitales y pueden frenar la adopción.

**A4 — Ciberseguridad y fraude**
Una brecha de seguridad o incidente de fraude en los primeros meses podría destruir la confianza de los usuarios de forma irreversible, dado que la marca todavía no tiene historia.

**A5 — Fricción regulatoria para el registro como PSP**
Obtener la habilitación del BCRA como PSP puede tomar 12-18 meses y requiere capital mínimo que puede ser difícil de conseguir en etapa early.

**A6 — Neobancos internacionales**
La eventual entrada de Revolut, N26 o Nubank al mercado argentino (cuando se estabilice la economía) representaría competencia de altísimo nivel con marca global establecida.

---

## 12. LAS 5 FUERZAS DE PORTER

### Fuerza 1 — RIVALIDAD ENTRE COMPETIDORES EXISTENTES
**Intensidad: ALTA ⚠️**

El mercado fintech argentino cuenta con más de 200 empresas activas (CÁMARA ARGENTINA FINTECH, 2024). Los principales competidores directos e indirectos son:

**Competidores directos (Open Banking / multi-banco):**
- No existe actualmente un competidor directo puro en Open Banking multi-banco en Argentina → **ventaja de first mover**

**Competidores indirectos (billeteras y neobancos):**
- Mercado Pago: 20M+ usuarios, respaldo de Mercado Libre
- Brubank: 3M+ usuarios, full digital
- Naranja X: 5M+ usuarios, red física
- Personal Pay: respaldo de Telecom
- Ualá: 5M+ usuarios, operaciones en 3 países

**Factores que aumentan la rivalidad:**
- Bajos costos de cambio para el usuario (cambiar de app es fácil)
- Alta velocidad de innovación del sector
- Subsidios de nuevos jugadores para ganar market share

**Estrategia de Syncro:** diferenciarse en el eje consolidación multi-banco + UX superior + inversiones integradas, donde ningún player actual tiene fortaleza real.

---

### Fuerza 2 — AMENAZA DE NUEVOS ENTRANTES
**Intensidad: MEDIA ⚠️**

**Barreras de entrada:**

| Barrera | Altura | Descripción |
|---|---|---|
| Regulatoria | Alta | Requiere registro como PSP en BCRA, capital mínimo, auditorías |
| Técnica | Media | Integración con APIs bancarias requiere conocimiento específico |
| Confianza | Alta | Los usuarios son muy cautos con apps que acceden a sus datos bancarios |
| Capital | Media | Desarrollo inicial requiere inversión significativa |
| Ecosistema | Media | Los acuerdos con bancos llevan tiempo en negociar |

**Factores que reducen las barreras:**
- El Open Source reduce la barrera técnica (cualquiera puede forkear el repositorio de Syncro)
- La Com. A 7500 estandariza los protocolos, facilitando la integración técnica
- Cloud computing y servicios como AWS/GCP reducen costos de infraestructura

**Conclusión:** las barreras regulatorias y de confianza son las más significativas. Syncro debe aprovechar su ventaja de first mover para construir reconocimiento de marca y base de usuarios antes de que lleguen nuevos competidores bien financiados.

---

### Fuerza 3 — PODER DE NEGOCIACIÓN DE LOS PROVEEDORES
**Intensidad: ALTA ⚠️**

Los proveedores clave de Syncro son los bancos que exponen sus APIs de Open Banking.

**Análisis:**

| Proveedor | Poder | Justificación |
|---|---|---|
| Bancos grandes (Galicia, Santander, BBVA) | Muy Alto | Pueden cambiar o cerrar sus APIs unilateralmente |
| BCRA | Alto | Define las reglas del juego regulatorio |
| Proveedores cloud (AWS, Netlify) | Bajo | Mercado competitivo, fácil migración |
| Proveedores de pagos (Stripe, etc.) | Bajo | Múltiples alternativas disponibles |

**Riesgos concretos:**
- Un banco puede exigir acuerdos comerciales desventajosos como condición para el acceso a sus APIs
- Los bancos pueden introducir rate limits que degraden la experiencia de Syncro
- Cambios en las especificaciones técnicas de las APIs sin aviso previo suficiente

**Estrategia de mitigación:**
- Diversificar la base de bancos integrados (8 actuales) para reducir dependencia de cada uno
- Participar activamente en los foros regulatorios del BCRA para influir en los estándares
- Desarrollar relaciones directas con los equipos de Open Banking de cada banco

---

### Fuerza 4 — PODER DE NEGOCIACIÓN DE LOS CLIENTES
**Intensidad: MEDIA ⚠️**

**Segmento B2C (usuarios individuales):**
- Poder: **Medio-Alto**
- Los usuarios pueden cambiar de app con facilidad (costo de cambio bajo)
- Sin embargo, una vez que vinculan sus cuentas y configuran sus datos, el switching cost aumenta
- El plan gratuito reduce el poder de negociación por precio

**Segmento B2B (empresas):**
- Poder: **Medio**
- Las empresas tienen más leverage para negociar precios y condiciones en el plan Business
- Los contratos anuales generan stickiness

**Estrategia de retención:**
- Aumentar el switching cost a través de datos históricos, personalizaciones y workflows configurados
- Programa de loyalty para usuarios Pro con más de 6 meses
- SLAs contractuales para clientes Business que generen reciprocidad

---

### Fuerza 5 — AMENAZA DE PRODUCTOS SUSTITUTOS
**Intensidad: MEDIA ⚠️**

| Sustituto | Descripción | Nivel de amenaza |
|---|---|---|
| Apps nativas de cada banco | El usuario usa el homebanking de cada banco por separado | Alto en el corto plazo |
| Planillas de cálculo (Excel/Sheets) | Usuarios que consolidan manualmente sus finanzas | Bajo (solución inferior) |
| Asesores financieros humanos | Para el segmento de inversiones | Bajo-Medio (complementario) |
| Soluciones ERP para PyMEs | Para el segmento Business | Medio (mayor costo y complejidad) |
| Super apps (WhatsApp Pay, etc.) | Integración de pagos en apps de mensajería | Medio-Alto en el largo plazo |

**El mayor sustituto real** es la inercia del usuario: seguir usando las apps de cada banco por separado. La estrategia de Syncro para combatir esto es demostrar el ahorro de tiempo y la visibilidad financiera que solo la consolidación puede dar.

---

### Resumen de las 5 Fuerzas

| Fuerza | Intensidad | Impacto en Syncro |
|---|---|---|
| Rivalidad entre competidores | Alta | Requiere diferenciación clara y rápida |
| Amenaza de nuevos entrantes | Media | Ventana de first mover que hay que aprovechar |
| Poder de proveedores (bancos) | Alta | Riesgo estratégico a gestionar activamente |
| Poder de clientes | Media | Switching cost bajo que debe incrementarse con tiempo |
| Amenaza de sustitutos | Media | Educación del usuario como palanca clave |

**Conclusión Porter:** Syncro opera en un mercado con fuerzas competitivas importantes, pero con una ventana de oportunidad clara: ser el primer actor en consolidar Open Banking real en Argentina antes de que lleguen los grandes players con recursos masivos. La velocidad de ejecución y la calidad del producto son los factores críticos de éxito.

---

## 13. ROADMAP Y PROYECCIONES

### Q2 2026 — Lanzamiento MVP
- ✅ Plataforma web funcional con datos mock
- ✅ Dashboard, cuentas, transferencias, QR, inversiones
- ✅ Deploy en Netlify
- 🔄 Integración real con 2 bancos (Galicia + Brubank)
- 🔄 Registro como PSP ante BCRA

### Q3 2026 — Crecimiento
- Integración real con 5 bancos
- App nativa iOS y Android
- Lanzamiento del plan Pro
- Meta: 5.000 usuarios pagos

### Q4 2026 — Escala
- Integración con los 8 bancos del plan
- Módulo de inversiones con FCI real
- Partnerships con billeteras
- Meta: 15.000 usuarios pagos

### 2027 — Expansión
- Expansión a Uruguay y Paraguay
- Plan Business con API access público
- Serie A de financiamiento
- Meta: 100.000 usuarios activos

---

## 14. INDICADORES CLAVE (KPIs)

### KPIs de Producto
| Indicador | Meta Q3 2026 |
|---|---|
| Usuarios registrados | 100.000 |
| Usuarios activos mensuales (MAU) | 45.000 |
| Cuentas bancarias vinculadas | 180.000 |
| Transferencias procesadas/mes | 500.000 |
| Volumen procesado/mes | $5.000M ARS |
| NPS (Net Promoter Score) | > 50 |

### KPIs de Negocio
| Indicador | Meta Q3 2026 |
|---|---|
| MRR (Monthly Recurring Revenue) | USD 45.000 |
| Tasa de conversión Free → Pro | 10% |
| Churn mensual | < 3% |
| CAC (Costo de Adquisición) | < USD 2 |
| LTV (Lifetime Value) | > USD 60 |
| LTV/CAC ratio | > 30x |

### KPIs de Seguridad
| Indicador | Meta |
|---|---|
| Uptime | 99.9% |
| Tiempo de respuesta API | < 200ms |
| Incidentes de seguridad | 0 críticos |
| Tiempo de resolución de vulnerabilidades | < 24hs |

---

## 15. TÉRMINOS Y CONDICIONES (RESUMEN LEGAL)

*Nota: Este es un resumen orientativo. Los términos completos deben ser redactados por un profesional legal habilitado.*

### 15.1 Aceptación de Términos
Al crear una cuenta en Syncro, el usuario acepta los presentes Términos y Condiciones, la Política de Privacidad y cualquier política adicional incorporada por referencia.

### 15.2 Descripción del Servicio
Syncro provee una plataforma tecnológica de agregación financiera que actúa como intermediario técnico entre el usuario y sus entidades bancarias. Syncro **no es un banco** ni una entidad financiera regulada bajo la Ley 21.526 de Entidades Financieras.

### 15.3 Responsabilidades del Usuario
- Proveer información veraz y actualizada
- Mantener la confidencialidad de sus credenciales de acceso
- Notificar inmediatamente cualquier acceso no autorizado
- No utilizar la plataforma para actividades ilícitas

### 15.4 Limitación de Responsabilidad
Syncro no será responsable por:
- Indisponibilidad de APIs bancarias de terceros
- Errores en los datos provistos por los bancos al sistema
- Pérdidas derivadas de decisiones financieras del usuario basadas en la información de la plataforma
- Daños indirectos, lucro cesante o daño emergente

### 15.5 Modificación de los Términos
Syncro se reserva el derecho de modificar estos términos con un preaviso de 30 días mediante notificación por email al usuario.

---

## 16. POLÍTICA DE PRIVACIDAD (RESUMEN)

*Nota: Este es un resumen orientativo conforme la Ley 25.326.*

### 16.1 Datos que recolectamos
- **Datos de identidad:** nombre, email, DNI
- **Datos financieros:** saldos, movimientos (obtenidos con consentimiento del usuario desde los bancos)
- **Datos de uso:** páginas visitadas, acciones realizadas, dispositivo utilizado
- **Datos técnicos:** dirección IP, cookies de sesión, logs de acceso

### 16.2 Cómo usamos los datos
- Proveer y mejorar el servicio
- Cumplir con obligaciones regulatorias (BCRA)
- Enviar comunicaciones transaccionales (comprobantes, alertas)
- Con consentimiento explícito: comunicaciones de marketing

### 16.3 Con quién compartimos los datos
- **No vendemos datos a terceros bajo ninguna circunstancia**
- Bancos: solo para ejecutar las operaciones autorizadas por el usuario
- Proveedores de infraestructura (Netlify, cloud providers): bajo acuerdos de confidencialidad
- Autoridades regulatorias: cuando sea legalmente requerido

### 16.4 Retención de datos
- Datos de cuenta: durante la vigencia del contrato + 5 años (obligación fiscal)
- Logs de seguridad: 2 años
- Datos eliminados por el usuario: 30 días para eliminación efectiva de backups

### 16.5 Transferencias internacionales
Los datos pueden procesarse en servidores ubicados fuera de Argentina (AWS US-East, Netlify CDN global). Se implementan salvaguardas adecuadas conforme la Ley 25.326.

---

## 17. CONCLUSIONES

Syncro representa una oportunidad única en el mercado fintech argentino: ser el primer actor en construir una capa de Open Banking real, centrada en el usuario, con tecnología de nivel internacional y pleno cumplimiento regulatorio.

**Los 5 factores críticos de éxito de Syncro son:**

1. **Velocidad de ejecución:** la ventana de first mover es limitada. Cada mes que pasa, la probabilidad de que un competidor bien financiado entre al segmento aumenta.

2. **Calidad del producto:** en un mercado donde la desconfianza es alta, la calidad de la experiencia de usuario es el principal vector de adquisición orgánica.

3. **Cumplimiento regulatorio proactivo:** trabajar con el BCRA como aliado, no como obstáculo. La regulación es una barrera de entrada para los competidores, pero solo si Syncro la navega primero.

4. **Integraciones bancarias:** cada banco integrado aumenta exponencialmente el valor para el usuario. La estrategia de partnerships bancarios es prioritaria.

5. **Confianza:** en un país con historial de crisis financieras, la transparencia, el código abierto y el cumplimiento con la Ley de Datos Personales son pilares no negociables.

> *"Tus finanzas, perfectamente sincronizadas."*
> — Syncro, 2026

---

**Documento preparado por:** Syncro Open Finance S.A.
**Fecha:** Abril 2026
**Versión:** 1.0
**Clasificación:** Uso interno y presentación a inversores

---
*Este documento contiene información confidencial y propietaria de Syncro. Su distribución está limitada a personas autorizadas.*