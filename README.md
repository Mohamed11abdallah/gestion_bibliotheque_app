# 📚 Application de Gestion de Bibliothèque

Cette application est un système de gestion de bibliothèque simple construit avec **Vue.js**. Elle permet de gérer les livres, les membres et les prêts.

## 🎨 Fonctionnalités

### 1. **Gestion des Livres**

- **Ajouter un Livre** : Formulaire pour ajouter un nouveau livre à la collection. Les champs incluent le titre, l'auteur, et l'année de publication.
- **Voir les Détails** : Affichage des détails d'un livre sélectionné.
- **Éditer un Livre** : Modifier les informations d'un livre existant.
- **Supprimer un Livre** : Retirer un livre de la collection.

```vue
<template>
  <!-- Vue.js pour afficher les données et gérer les événements -->
</template> 

<script setup>
import { ref } from 'vue';

// Fonctionnalité pour ajouter, editer, voir, et supprimer des livres
</script>

<style scoped>
/* Style pour la gestion des livres */
</style>
```

### 2. **Gestion des Membres**
- **Ajouter un Membre** : Formulaire pour ajouter un nouveau membre avec un nom et un email.
- **Voir les Détails** : Affichage des informations d'un membre.
- **Éditer un Membre** : Modifier les informations d'un membre existant.
- **Supprimer un Membre** : Retirer un membre de la liste.

```vue
<template>
  <!-- Vue.js code pour gérer les membres -->
</template>

<script setup>
import { ref } from 'vue';

// Fonctionnalité pour ajouter, editer, voir, et supprimer des membres
</script>

<style scoped>
/* Style pour la gestion des membres */
</style>
```

### 3. **Gestion des Prêts**
- **Enregistrer un Prêt** : Formulaire pour enregistrer un prêt avec l'ID du livre, l'ID du membre et la date de prêt.
- **Voir les Détails** : Affichage des informations sur un prêt.
- **Éditer un Prêt** : Modifier les détails d'un prêt existant.
- **Supprimer un Prêt** : Retirer un prêt de la liste.

```vue
<template>
  <!-- Vue.js code pour gérer les prets -->
</template>

<script setup>
import { ref } from 'vue';

// Fonctionnalité pour ajouter, editer, voir, et supprimer des prets
</script>

<style scoped>
/* Style pour la gestion des prets */
</style>
```

🗂️ Structure du Projet

- App.vue : Le composant principal qui inclut la navigation et les vues des différentes sections.
- main.js : Point d'entrée de l'application Vue, où le routeur est monté.
- index.js : Fichier de configuration du routeur qui gère les différentes routes de l'application.
- Navbar.vue : Composant de navigation en haut de l'application, permettant d'accéder aux sections Livres, Membres et Prêts.

🚀 Installation et Lancement

        1. Clonez le dépôt.
        2. Installez les dépendances avec npm install.
        3. Démarrez l'application avec npm run dev.
