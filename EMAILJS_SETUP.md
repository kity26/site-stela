# Guide de configuration EmailJS

Ce guide vous explique comment configurer EmailJS pour que le formulaire de contact fonctionne.

## Étape 1 : Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up"** pour créer un compte gratuit
3. Vérifiez votre email et connectez-vous

## Étape 2 : Ajouter un service email

1. Dans le tableau de bord EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. **Notez le Service ID** qui apparaît (ex: `service_xxxxx`)

## Étape 3 : Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. **IMPORTANT** : Dans le champ **"To Email"**, entrez : `stela.esport@gmail.com`
   - C'est l'adresse qui recevra toutes les réponses du formulaire
4. Dans le champ **"From Name"**, vous pouvez mettre : `SAKURA TEAMS` ou `{{from_name}}`
5. Configurez votre template avec les variables suivantes :
   - `{{to_email}}` - Email de destination (stela.esport@gmail.com)
   - `{{from_name}}` - Nom/Pseudo de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur
   - `{{pseudo}}` - Pseudo Activision
   - `{{style_jeu}}` - Style(s) de jeu sélectionné(s)
   - `{{age}}` - Âge
   - `{{message}}` - Message du formulaire

6. Exemple de template :
   ```
   Sujet: Nouvelle candidature SAKURA TEAMS
   
   Nouvelle candidature reçue !
   
   Pseudo Activision: {{pseudo}}
   Email: {{from_email}}
   Âge: {{age}}
   Style(s) de jeu: {{style_jeu}}
   
   Message:
   {{message}}
   
   ---
   Répondre à: {{from_email}}
   ```

7. **Notez le Template ID** (ex: `template_xxxxx`)

## Étape 4 : Obtenir votre clé publique

1. Allez dans **"Account"** → **"General"**
2. Trouvez la section **"API Keys"**
3. **Copiez votre Public Key** (ex: `xxxxxxxxxxxxxxxx`)

## Étape 5 : Configurer les variables d'environnement

1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez les valeurs suivantes :
   ```
   VITE_EMAILJS_SERVICE_ID=votre_service_id
   VITE_EMAILJS_TEMPLATE_ID=votre_template_id
   VITE_EMAILJS_PUBLIC_KEY=votre_public_key
   VITE_DISCORD_LINK=votre_lien_discord
   ```

3. **Important** : Ne partagez jamais votre fichier `.env.local` (il est déjà dans `.gitignore`)

## Étape 6 : Redémarrer le serveur de développement

Après avoir modifié `.env.local`, redémarrez votre serveur :
```bash
npm run dev
```

## Test

1. Remplissez le formulaire sur la page "Nous rejoindre"
2. Cliquez sur "Envoyer ma candidature"
3. Vérifiez votre boîte email pour confirmer la réception

## Limites du plan gratuit

- 200 emails/mois
- Parfait pour commencer !

## Besoin d'aide ?

Consultez la documentation officielle : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
