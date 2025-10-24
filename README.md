# battle4

Jamstack stack pour Battle4 — Site Événementiel + Dashboard

Stack choisie (résumé)

- Framework : Next.js (App Router)
- Langage : JavaScript (JSX)
- Styling : Tailwind CSS
- Animations : Framer Motion
- Headless CMS : Sanity.io
- i18n : next-intl
- Formulaires : react-hook-form
- Hôte : Netlify

Fonctionnalités incluses dans ce dépôt

- Structure `app/` prête à l'emploi (layout, page, providers, not-found).
- Exemples de composants (`components/`) en `.jsx`.
- `lib/sanity.js` pour config Sanity client.
- API route examples sous `app/api/` pour Twitch et Streamlabs (proxy).
- Tailwind + PostCSS config (fichiers ajoutés). Vous devez installer les dépendances listées ci-dessous.

Installation & démarrage

1. Installer les dépendances (ajoutez `next`, `react`, `react-dom` si besoin) :

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Créer un fichier `.env.local` en copiant `.env.example` et remplir vos clés :

```bash
cp .env.example .env.local
# edit .env.local
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

Points d'attention

- Les routes live (Twitch / Streamlabs) nécessitent des clés et peuvent nécessiter des endpoints/paramètres différents selon vos accès. Les fichiers dans `app/api/` sont des exemples qu'on adaptera ensemble.
- Netlify nécessite que vous configuriez les variables d'environnement dans l'interface Netlify (ou via CLI) pour que les fonctions d'API puissent accéder aux clés.

Prochaines étapes recommandées

- Ajouter des pages de contenu statique gérées depuis Sanity (schémas, webhooks si besoin).
- Implémenter les endpoints du dashboard (auth, webhooks pour dons en temps réel, sockets si nécessaire).
- Mettre en place CI (GitHub Actions) ou utiliser les déploiements Netlify automatiques.

Si vous voulez, je peux :

- exécuter l'installation (npm install) et démarrer le serveur pour vérifier que tout compile, ou
- adapter précisément les API (ex : récupérer viewers Twitch pour une liste de streamers) — dites-moi quel flux vous voulez exposer.
