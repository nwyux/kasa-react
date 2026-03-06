# Kasa - Application de location d'appartements

Application web de location d'appartements entre particuliers développée avec React, TypeScript, et Vite.

## 🚀 Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **TypeScript** - Typage statique pour JavaScript
- **React Router DOM** - Gestion du routage de l'application
- **Sass** - Préprocesseur CSS pour le styling
- **Vite** - Build tool rapide et moderne

## 📋 Respect des contraintes techniques

### React
✅ **Découpage en composants modulaires et réutilisables**
- Header, Footer, Banner, Card, Carousel, Collapse, Rating

✅ **Un composant par fichier**
- Chaque composant est dans son propre dossier avec son fichier .tsx et .scss

✅ **Structure logique des fichiers**
```
src/
├── components/     # Composants réutilisables
│   ├── Header/
│   ├── Footer/
│   ├── Banner/
│   ├── Card/
│   ├── Carousel/
│   ├── Collapse/
│   └── Rating/
├── pages/          # Pages de l'application
│   ├── Home/
│   ├── Logement/
│   ├── About/
│   └── Error404/
├── router/         # Configuration du routeur
├── styles/         # Styles globaux Sass
└── types/          # Types TypeScript
```

✅ **Utilisation des props entre composants**
- Tous les composants utilisent des props typées

✅ **Utilisation du state**
- useState pour Carousel (gestion de l'index actuel)
- useState pour Collapse (gestion de l'ouverture/fermeture)

✅ **Gestion des événements**
- onClick sur les boutons, navigation, etc.

✅ **Utilisation de listes avec map**
- Liste des logements sur la page d'accueil
- Liste des tags, équipements, images dans le carrousel

✅ **Composants fonctionnels**
- Tous les composants sont des composants fonctionnels

### React Router
✅ **Paramètres des routes gérés dans l'URL**
- `/logement/:id` pour afficher le détail d'un logement

✅ **Une page par route**
- Home (`/`)
- About (`/about`)
- Logement (`/logement/:id`)
- Error404 (`/404` et `*`)

✅ **Gestion de la page 404**
- Redirection automatique si l'ID du logement n'existe pas
- Route wildcard (`*`) pour toutes les routes inexistantes

✅ **Logique du routeur dans un seul fichier**
- `src/router/index.tsx` contient toute la configuration

### Général
✅ **Code sans erreur ni warning dans la console**
- TypeScript strict mode activé
- Aucune erreur ESLint

## 🎨 Styling avec Sass

Tous les styles sont codés en Sass avec :
- Variables pour les couleurs
- Mixins pour la réutilisabilité
- Structure modulaire (un fichier .scss par composant)
- Design responsive (mobile-first)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Preview du build de production
npm run preview
```

## 🌐 Routes

- `/` - Page d'accueil avec la liste des logements
- `/about` - Page à propos
- `/logement/:id` - Page de détail d'un logement
- `/404` ou toute route inexistante - Page d'erreur 404

## 📁 Structure des données

Les données des logements sont stockées dans `data/data.json` avec la structure suivante :

```typescript
interface Accommodation {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}
```

## 🎯 Fonctionnalités

- **Navigation** : Header avec liens actifs vers Accueil et À Propos
- **Liste des logements** : Affichage en grille responsive
- **Détail du logement** : Carrousel d'images, informations, tags, rating, collapse pour description et équipements
- **Carrousel** : Navigation entre les images avec compteur
- **Collapse** : Composant accordion réutilisable
- **Rating** : Affichage des étoiles de notation
- **404** : Gestion des erreurs de navigation

## 📝 Notes

⚠️ **Images placeholders** : Les fichiers `/logo.svg`, `/logo-white.svg`, `/home-banner.jpg`, et `/about-banner.jpg` sont des placeholders. Remplacez-les par vos images réelles.

## 👨‍💻 Développement

Ce projet utilise :
- ESLint pour le linting
- TypeScript en mode strict
- Vite pour un HMR ultra-rapide
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
