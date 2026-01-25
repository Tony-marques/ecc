# Sanity Setup

Sanity est configuré dans ce projet. Voici les étapes pour le mettre en place:

## 1. Configuration

Crée un fichier `.env.local` à la racine du projet avec:

```
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
```

Remplace `your-project-id` par ton ID de projet Sanity.

## 2. Initialiser Sanity

```bash
npm run sanity
```

Cela va te demander de créer/connecter un projet Sanity.

## 3. Lancer le Studio Sanity

```bash
npm run sanity:dev
```

Le studio sera accessible à `http://localhost:3333`

## 4. Structure

- `sanity/sanity.config.ts` - Configuration Sanity
- `sanity/schemas/` - Schemas (property, blockContent)
- `src/lib/sanity.ts` - Client Sanity pour le front
- `src/features/properties/Properties.tsx` - Récupère les biens depuis Sanity

## 5. Utilisation

Une fois configuré:
1. Va dans le studio Sanity
2. Crée un document "Property" avec titre, ville, images, etc.
3. Définis le status à "published"
4. Le front affichera automatiquement le bien en haut
