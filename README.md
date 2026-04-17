# 🚀 Solimouv' — PWA du festival du sport inclusif

## 📌 Présentation du projet

Solimouv' est une Progressive Web App (PWA) développée dans le cadre d’un hackathon, visant à promouvoir le festival du sport inclusif organisé par l’association **Up Sport!**.

L’objectif est de proposer une application accessible, performante et installable permettant de :

* Découvrir le festival
* Consulter le programme des activités
* Explorer les associations partenaires
* Faciliter la communication avec les participants

---

## 🎯 Objectifs

* Rendre l’information accessible à tous les publics
* Offrir une expérience mobile fluide (mobile-first)
* Permettre une utilisation offline (PWA)
* Optimiser la visibilité via le SEO
* Proposer une architecture moderne et scalable

---

## 🏗️ Architecture du projet

```bash
solimouv/
├── frontend/   # Next.js (PWA + SEO)
├── backend/    # Rust (API Axum)
└── README.md
```

---

## ⚙️ Stack technique

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* next-pwa (Service Worker + offline)

### Backend

* Rust
* Axum (framework web)
* Serde (sérialisation JSON)

---

## 🧠 Choix techniques

### Pourquoi Next.js ?

* SEO natif (important pour le référencement du festival)
* Routing simple et performant
* Support du SSR/SSG
* Intégration facile en PWA

### Pourquoi Rust (Axum) ?

* Performance élevée
* Sécurité mémoire
* Architecture backend robuste
* Différenciation technique (bonus hackathon)

### Pourquoi une PWA ?

* Installable sans passer par un store
* Fonctionne offline
* Adaptée aux contraintes terrain (festival)

---

## 📱 Fonctionnalités principales

* ✅ Application installable (manifest + service worker)
* ✅ Navigation fluide entre les pages
* ✅ Design responsive (mobile-first)
* ✅ Pages :

  * Accueil
  * À propos
  * Programme
  * Associations
  * Contact
* ✅ Chargement rapide (optimisation Next.js)
* ✅ Accessibilité de base (contrastes, navigation clavier)

---

## 🔗 API Backend (Rust)

### Endpoints disponibles

```bash
GET /health
GET /program
```

### Exemple de réponse

```json
[
  {
    "title": "Boxe inclusive",
    "time": "14:00",
    "description": "Accessible à tous"
  }
]
```

---

## 🚀 Installation & Lancement

### 1. Cloner le projet

```bash
git clone <repo-url>
cd solimouv
```

---

### 2. Lancer le backend (Rust)

```bash
cd backend
cargo run
```

👉 API disponible sur : http://localhost:3001

---

### 3. Lancer le frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

👉 Application disponible sur : http://localhost:3000

---

## 📦 Déploiement

### Frontend

* Déployé sur Vercel

### Backend

* Déployable sur :

  * Railway
  * Fly.io
  * VPS

---

## 🔍 SEO & Performance

* Balises meta configurées
* Structure sémantique HTML
* Optimisation des images
* Lazy loading
* Lighthouse score cible > 70

---

## ♿ Accessibilité

* Contrastes respectés
* Tailles de texte lisibles
* Navigation clavier possible
* Structure HTML sémantique

---

## 📱 PWA

* Manifest.json configuré
* Service Worker actif
* Mode offline partiel
* Installable sur mobile et desktop

---

## 👥 Organisation de l’équipe

* Tech Lead : architecture & décisions techniques
* Frontend : développement Next.js
* Backend : API Rust
* UX/UI : design & accessibilité
* Content/SEO : rédaction & stratégie

---

## 📌 Améliorations possibles

* Notifications push
* Géolocalisation des activités
* Scan QR code (check-in)
* Espace bénévoles
* Backend temps réel (WebSockets)

---

## 📄 Licence

Projet réalisé dans un cadre pédagogique (hackathon).

---

## 💬 Conclusion

Ce projet démontre la capacité à concevoir une solution complète, performante et adaptée à un contexte réel, en respectant des contraintes de temps, d’accessibilité et de qualité technique.
