# Website for Parc des Ânes

Site web vitrine pour le Parc des Ânes, une ferme pédagogique. Construit avec React, React Router, Framer Motion et TailwindCSS.

## Installation

Pré-requis : Node.js 18+

```bash
npm install
```

## Usage

Démarrer le serveur de développement :

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`.

Construire pour la production :

```bash
npm run build
```

Prévisualiser le build de production :

```bash
npm run preview
```

## Structure du projet

```
src/
├── main.tsx                  # Point d'entrée
├── app/
│   ├── App.tsx               # Composant racine
│   ├── routes.ts             # Définition des routes
│   ├── components/
│   │   └── Layout.tsx        # Navbar + Footer partagés
│   └── pages/
│       ├── Home.tsx          # Page d'accueil
│       ├── LeParc.tsx        # Présentation du parc
│       ├── NosAnes.tsx       # Portraits des ânes
│       ├── Boutique.tsx      # Boutique artisanale
│       ├── Dons.tsx          # Page de dons
│       └── InfosPratiques.tsx # Horaires, tarifs, contact
```

## API

Ce projet est entièrement statique (pas de backend). Les données sont définies directement dans chaque page sous forme de constantes TypeScript. Aucune clé d'API n'est requise.

Les images proviennent de [Unsplash](https://unsplash.com) via des URLs directes.

## Technologies

- **React** + **TypeScript**
- **React Router** — navigation SPA
- **Framer Motion** — animations
- **TailwindCSS** — styles utilitaires
- **Lucide React** — icônes
- **Vite** — bundler