# 🧠 InsightBoard — Progetto di Osservabilità e Analisi Applicativa

## 🎯 Obiettivo del progetto

**InsightBoard** è una mini–piattaforma full-stack (React + Node.js) progettata per simulare un sistema reale e permettere l’apprendimento pratico dei concetti di **monitoraggio**, **osservabilità** e **analisi delle performance**.

L’app è volutamente semplice ma completa: genera e mostra statistiche di utilizzo e performance in tempo reale, creando così un contesto perfetto per integrare strumenti come **OpenTelemetry**, **Prometheus**, **Grafana** e **Dynatrace**.

---

## ⚙️ Architettura generale


- Il **Frontend** visualizza in tempo reale le metriche e lo stato del sistema.
- Il **Backend** genera dati simulati, simili a quelli di un sistema distribuito reale.
- In fasi successive, l’app verrà strumentata per raccogliere **log, metriche e trace**, creando un ambiente di osservabilità completo.

---

## 🧩 Backend – `backend/`

### 🧱 Descrizione

Il backend rappresenta un **servizio applicativo monitorabile**.  
Simula il comportamento di un microservizio che espone dati di business e performance.  

Espone due endpoint principali:
- `GET /stats` → dati aggiornati di utilizzo (utenti attivi, throughput, error rate, latenza)
- `GET /health` → verifica stato del servizio (OK / FAIL)

### 💡 Obiettivi didattici

1. Comprendere cosa e come si monitora lato server.  
2. Creare un flusso di dati realistico per il frontend.  
3. Preparare un’app pronta per essere **strumentata** con:
   - Logging strutturato (Pino/Winston)
   - Metriche Prometheus
   - Tracing OpenTelemetry

### ⚙️ Output JSON di esempio

```json
{
  "timestamp": "2025-11-03T10:00:00Z",
  "activeUsers": 134,
  "requestsPerSecond": 42,
  "errorRate": 0.03,
  "avgResponseTime": 210
}
