# Configuration pour Google Search Console

## Étapes rapides:

### 1. Ajouter le fichier de validation GSC

Télécharge le fichier HTML depuis Google Search Console et place-le dans `/public/` avec ce nom exact.

Exemple: Si GSC te donne `google_xxxxx.html`, fais:

```bash
cp ~/Downloads/google_xxxxx.html public/google_xxxxx.html
```

Puis l'URL sera accessible à:

```
https://www.ecdconciergerie.fr/google_xxxxx.html
```

### 2. Alternative: Ajouter le tag HTML dans index.html

Si tu préfères, ajoute dans le `<head>` de `index.html`:

```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

### 3. Vérifier l'accès au sitemap

Ouvre dans le navigateur:

```
https://www.ecdconciergerie.fr/sitemap.xml
```

Tu devrais voir un XML avec tes URLs. Si pas visible = 404.

### 4. Vérifier robots.txt

Ouvre:

```
https://www.ecdconciergerie.fr/robots.txt
```

Doit contenir:

```
User-agent: *
Allow: /

Sitemap: https://www.ecdconciergerie.fr/sitemap.xml
```

---

## Après validation GSC (IMPORTANT):

1. **Soumettre le sitemap**
   - GSC > Sitemaps (menu gauche)
   - Ajouter: `https://www.ecdconciergerie.fr/sitemap.xml`

2. **Demander l'indexation des URLs principales**
   - GSC > Inspection URL
   - Saisis: `https://www.ecdconciergerie.fr/`
   - Clique "Demander l'indexation"
   - Répète pour `/mentions-legales`, `/politique-de-confidentialite`, etc.

3. **Monitor la couverture**
   - GSC > Couverture
   - Doit avoir "Envoyé" ou "En attente d'indexation"

---

## URLs prioritaires à indexer manuellement:

```
https://www.ecdconciergerie.fr/
https://www.ecdconciergerie.fr/nos-services
https://www.ecdconciergerie.fr/mentions-legales
https://www.ecdconciergerie.fr/politique-de-confidentialite
https://www.ecdconciergerie.fr/legal-notice
https://www.ecdconciergerie.fr/privacy-policy
```

---

## Erreurs courantes & solutions:

**"La propriété du site n'est pas validée"**

- Vérifiez que le fichier HTML ou le meta tag est bien en place
- Attendez 48h
- Recliquez sur "Vérifier" dans GSC

**"Inaccessible par Googlebot"**

- Vérifiez que le serveur ne bloque pas les bots
- Vérifiez robots.txt: doit avoir `Allow: /`
- Testez: https://www.ecdconciergerie.fr/ dans un navigateur

**"URL en attente d'indexation depuis 1 mois"**

- Peut être un problème de contenu ou de performance
- Check "Signaux Web essentiels" dans GSC
- Optimise Lighthouse score

---

## Outils gratuits pour tracker le ranking

- **Google Search Console** (gratuit) - données officielles
- **Google Analytics** (gratuit) - trafic organique
- **Ubersuggest** (gratuit + limité) - ranking pour 100 URLs
- **SERP Robot** (gratuit) - tracker position pour mots-clés

Pour "conciergerie tours", tu devrais être #1 en 3-6 mois si:

- ✅ Backlinks locaux (Google My Business, annuaires)
- ✅ Contenu optimisé
- ✅ Performance site OK
