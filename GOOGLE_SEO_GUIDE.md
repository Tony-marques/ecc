# 📊 Guide Google Search Console pour ECC

## ✅ Étapes pour indexer ton site sur Google

### 1️⃣ **Crée un compte Google Search Console**

1. Va sur https://search.google.com/search-console
2. Clique sur **"URL prefix"**
3. Saisis: `https://www.ecdconciergerie.fr`
4. Valide ton site (Google te proposera plusieurs méthodes)

### 2️⃣ **Valide la propriété du site**

Choisis l'une des méthodes:

- **Fichier HTML** (recommandé): Mets le fichier dans `/public/`
- **Tag HTML**: Ajoute dans le `<head>` d'index.html
- **Google Analytics**: Si configuré
- **Google Tag Manager**: Si utilisé

### 3️⃣ **Soumettre le Sitemap**

1. Dans GSC, va dans **Sitemaps** (menu gauche)
2. Clique **"Ajouter un sitemap"**
3. Entre: `https://www.ecdconciergerie.fr/sitemap.xml`
4. Google commencera à crawler toutes tes pages

### 4️⃣ **Vérifier l'indexation**

1. Attend 1-2 jours après la soumission du sitemap
2. Va dans **Couverture** pour voir l'état des pages
3. Les erreurs apparaîtront avec solutions

### 5️⃣ **Optimiser les performances**

- Va dans **Signaux Web essentiels** (Core Web Vitals)
- Vérifiez ta performance mobile avec Lighthouse
- Cible un score **90+**

### 6️⃣ **Analyser les requêtes**

1. Va dans **Performance** (après quelques jours d'indexation)
2. Vois combien de clics sur "conciergerie tours", etc.
3. Note la position moyenne
4. Optimise le contenu des pages mal classées

---

## 🔍 Mots-clés prioritaires à cibler

```
Requêtes générales:
- conciergerie tours
- location courte durée tours
- gestion airbnb tours
- service conciergerie
- propriétaire airbnb tours

Requêtes avec intention commerciale:
- louer son appartement tours
- gestion propriété location saisonnière
- conciergerie airbnb
- service prestataire tours

Requêtes longues:
- conciergerie location courte durée tours
- gestion complète propriété airbnb
- accueil voyageurs tours professionnel
```

---

## ⚙️ Configuration actuelle ✅

✅ **Titres & Descriptions**: Optimisés avec mots-clés "Tours", "conciergerie", "location"
✅ **Sitemap.xml**: Généré avec hreflang pour multilingue
✅ **Schema.org**: LocalBusiness + Organization ajoutés
✅ **Canonical URLs**: Implémentées pour éviter duplicates
✅ **Hreflang**: FR/EN configuré
✅ **Images**: Lazy-load activé

---

## 📱 Avant d'aller plus loin

1. **Google My Business**
   - Crée un profil: https://business.google.com
   - Saisis ton adresse: 28 rue du Vieux Bourg, 37390 Notre-Dame-d'Oé
   - Ajoute photos, horaires, description
   - Cette fiche aide beaucoup pour "conciergerie tours" local

2. **Backlinks locaux**
   - Annonces sur annuaires (Pages Jaunes, Bing Places, etc.)
   - Partenariats avec hôtels/offices de tourisme à Tours
   - Avis clients (Google Reviews, Trustpilot)

3. **Contenu supplémentaire**
   - Blog: articles sur "location courte durée", "gestion airbnb", etc.
   - FAQ optimisée SEO
   - Cas clients / témoignages

4. **Monitoring continu**
   - Reçois des alertes GSC pour erreurs d'indexation
   - Check le ranking tous les mois (Semrush, Ubersuggest gratuit)
   - Optimise le meta des pages qui classent mal

---

## 🎯 Timeline réaliste

- **Jour 0**: Soumettre sitemap à GSC
- **Jours 1-7**: Google crawle et indexe (tu verras dans "Couverture")
- **Semaines 2-4**: Premières impressions dans Search Console
- **Mois 1-3**: Classement pour mots-clés de niche ("conciergerie tours")
- **Mois 3-6**: Amélioration du ranking, plus de trafic

**Note**: Sans backlinks, c'est plus difficile de rank pour "conciergerie tours" en position 1 rapidement. Priorité = Google My Business + GSC + contenu.

---

## 📞 Aide spécifique

**Blocage par robots.txt?**

- Vérifie `/public/robots.txt`: doit avoir `Allow: /`
- Check: https://www.ecdconciergerie.fr/robots.txt

**Page n'indexe pas?**

- URL peut être cassée (404)
- Meta `noindex` accidentellement
- Redirects en chaîne (301 → 302 → page)

**Score Core Web Vitals faible?**

- Optimise les images (WebP)
- Lazy-load du JavaScript
- Réduis les CSS/JS critiques
